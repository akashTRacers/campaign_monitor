const Replay = require('replay');
const chai = require('chai');
const assert= require('assert');
var httpMocks = require('node-mocks-http');
Replay.mode = 'record';
Replay.fixtures = __dirname + '/fixtures/'; 
const campaignMonitor = require('../app/adapter/CampaignMonitor') 
let camp = new campaignMonitor();
describe('#getLists()', function () {
  
  it('should return a lists', function (done) {
    let request = httpMocks.createRequest({
      query: { clientId: 'e8a260171cc650fd3c7de46ba6f7f0cf' },
      headers:{ provider: 'campaignMonitor',
      authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
     }
    });
    const response = httpMocks.createResponse();
    camp.getLists(request,response)
    .then(res=>{
      console.log(res.body);
      chai.expect(res).to.be.a('Object');
      chai.expect(res.body).to.be.a('Array');
      done();
    })
    .catch(errorOnOperation => done(errorOnOperation));
  });

});  

describe('#getAllSegment()', function () {
  it('should return all segments', function (done) {
    let request = httpMocks.createRequest({
      params: { listId: '0ca378631e57bf95c15005153f8c073b' },
      headers: {
        provider: 'campaignMonitor',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
      }
    });
    const response = httpMocks.createResponse();
    camp.getAllSegment(request, response)
      .then(response => {
        chai.expect(response).to.be.a('Object');
        chai.expect(response.body).to.be.a('Array');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#getSpecificSegment()', function () {
  it('should return specific segments', function (done) {
    let request = httpMocks.createRequest({
      params: { segmentId: 'cecd3dfc9240e0ea1bf261a165321bdd' },
      headers: {
        provider: 'campaignMonitor',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
      }
    });
    const response = httpMocks.createResponse();
    camp.getSpecificSegment(request, response)
      .then(response => {
        chai.expect(response).to.be.a('Object');
        //chai.expect(response.body).to.be.a('Array');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#createList()', function () {
  it('should return listId', function (done) {
    let request = httpMocks.createRequest({
      query: { clientId: 'e8a260171cc650fd3c7de46ba6f7f0cf' },
      headers: {
        provider: 'campaignMonitor',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
      },
      body:{
          "Title": "Website Sky29",
          "UnsubscribePage": "http://www.example.com/unsubscribed.html",
          "UnsubscribeSetting": "AllClientLists",
          "ConfirmedOptIn": false,
          "ConfirmationSuccessPage": "http://www.example.com/joined.html"
      },
      method:'POST'
    });
    const response = httpMocks.createResponse();
    camp.createList(request, response)
      .then(response => {
        chai.expect(response).to.be.a('Object');
        chai.expect(response.body).to.be.a('String');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#getEmailState()', function () {
  it('should return information of email availabled in campaigns', function (done) {
    let request = httpMocks.createRequest({
      params: { clientId: 'e8a260171cc650fd3c7de46ba6f7f0cf' },
      query: { email: 'jainakash7474@gmail.com' },
      headers: {
        provider: 'campaignMonitor',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
      }
    });
    const response = httpMocks.createResponse();
    camp.getEmailState(request, response)
      .then(response => {
        chai.expect(response).to.be.a('Object');
        //chai.expect(response.body).to.be.a('Array');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#createSegment()', function () {
  it('should return new created segment Id', function (done) {
    let request = httpMocks.createRequest({
      params: { listId: '0ca378631e57bf95c15005153f8c073b' },
      headers: {
        provider: 'campaignMonitor',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6ZThhMjYwMTcxY2M2NTBmZDNjN2RlNDZiYTZmN2YwY2Y=',
      },body:{
          "Title": "My Rules Segment56",
          "RuleGroups": [
              {
                "Rules": [
                    {
                        "RuleType": "DateSubscribed",
                        "Clause": "AFTER 2009-01-01"
                    },
                    {
                        "RuleType": "DateSubscribed",
                        "Clause": "EQUALS 2009-01-01"
                    }
                ]
              }
          ]
        }, method:'POST'
    });
    const response = httpMocks.createResponse();
    camp.createSegment(request, response)
      .then(response => {
        console.log("reponse>>>>>>>>>>>",response);
        chai.expect(response).to.be.a('Object');
        chai.expect(response.body).to.be.a('String');
        //chai.assert.equal(response.uri[Url],'https://api.createsend.com/api/v3.2/segments/0ca378631e57bf95c15005153f8c073b.json');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  