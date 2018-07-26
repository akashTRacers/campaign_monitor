const Replay = require("replay");
const chai = require("chai");
const assert = require("assert");
var httpMocks = require("node-mocks-http");
Replay.mode = "record";
Replay.fixtures = __dirname + "/fixtures/";
const campaignMonitor = require("../app/adapter/CampaignMonitor");
let camp = new campaignMonitor();
describe("#getLists()", () => {
  it("should return a lists", done => {
    let request = httpMocks.createRequest({
      query: { clientId: "e8a260171cc650fd3c7de46ba6f7f0cf" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      }
    });
    const response = httpMocks.createResponse();
    camp
      .getLists(request, response)
      .then(body => {
        chai.expect(body).to.be.a("Array");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#getAllSegment()", () => {
  it("should return all segments", done => {
    let request = httpMocks.createRequest({
      params: { listId: "0ca378631e57bf95c15005153f8c073b" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      }
    });
    const response = httpMocks.createResponse();
    camp.getAllSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a("Array");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#getSpecificSegment()", () => {
  it("should return specific segments", done => {
    let request = httpMocks.createRequest({
      params: { segmentId: "cecd3dfc9240e0ea1bf261a165321bdd" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      }
    });
    const response = httpMocks.createResponse();
    camp
      .getSpecificSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a("Object");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#createList()", () => {
  it("should return listId", done => {
    let request = httpMocks.createRequest({
      query: { clientId: "e8a260171cc650fd3c7de46ba6f7f0cf" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      },
      body: {
        Title: "Website Sky29",
        UnsubscribePage: "http://www.example.com/unsubscribed.html",
        UnsubscribeSetting: "AllClientLists",
        ConfirmedOptIn: false,
        ConfirmationSuccessPage: "http://www.example.com/joined.html"
      },
      method: "POST"
    });
    const response = httpMocks.createResponse();
    camp
      .createList(request, response)
      .then(body => {
        chai.expect(body).to.be.a("String");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#getEmailState()", () => {
  it("should return information of email availabled in campaigns", done => {
    let request = httpMocks.createRequest({
      params: { clientId: "e8a260171cc650fd3c7de46ba6f7f0cf" },
      query: { email: "jainakash7474@gmail.com" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      }
    });
    const response = httpMocks.createResponse();
    camp
      .getEmailState(request, response)
      .then(body => {
        chai.expect(body).to.be.a("Array");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#createSegment()", () => {
  it("should return new created segment Id", done => {
    let request = httpMocks.createRequest({
      params: { listId: "0ca378631e57bf95c15005153f8c073b" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      },
      body: {
        Title: "My Rules Segment56",
        RuleGroups: [
          {
            Rules: [
              {
                RuleType: "DateSubscribed",
                Clause: "AFTER 2009-01-01"
              },
              {
                RuleType: "DateSubscribed",
                Clause: "EQUALS 2009-01-01"
              }
            ]
          }
        ]
      },
      method: "POST"
    });
    const response = httpMocks.createResponse();
    camp
      .createSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a("String");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#updateSegment()", () => {
  it("should update segment", done => {
    let request = httpMocks.createRequest({
      params: { segmentId: "cecd3dfc9240e0ea1bf261a165321bdd" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      },
      body: {
        Title: "My 4568 Segment",
        RuleGroups: [
          {
            Rules: [
              {
                RuleType: "EmailAddress",
                Clause: "CONTAINS @FB.com"
              },
              {
                RuleType: "DateSubscribed",
                Clause: "BEFORE 2018-10-01"
              }
            ]
          }
        ]
      },
      method: "PUT"
    });
    const response = httpMocks.createResponse();
    camp
      .updateSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a("undefined");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});

describe("#deleteSegment()", () => {
  it("should delete specific segments", done => {
    let request = httpMocks.createRequest({
      params: { segmentId: "58c3f23ee561525b195c61c657b6f794" },
      headers: {
        provider: "campaignMonitor",
        authorization:
          "Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y="
      },
      method: "DELETE"
    });
    const response = httpMocks.createResponse();
    camp
      .deleteSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a("undefined");
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});
