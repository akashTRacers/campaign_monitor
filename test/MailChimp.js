const Replay = require('replay');
const chai = require('chai');
const assert= require('assert');
var httpMocks = require('node-mocks-http');
Replay.mode = 'record';
Replay.fixtures = __dirname + '/fixtures/'; 
const mailChimp = require('../app/adapter/MailChimp') 
let chimp = new mailChimp();
describe('#getLists()',  () => {
  
  it('should return a lists',  (done) => {
    let request = httpMocks.createRequest({
      query: { clientId: 'e8a260171cc650fd3c7de46ba6f7f0cf' },
      headers:{ provider: 'mailChimp',
      authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
     }
    });
    const response = httpMocks.createResponse();
    chimp.getLists(request,response)
    .then(body=>{
      chai.expect(body).to.be.a('Object');
     
      done();
    })
    .catch(errorOnOperation => done(errorOnOperation));
  });

});  

describe('#getAllSegment()',  () => {
  it('should return all segments',  (done) => {
    let request = httpMocks.createRequest({
      params: { listId: '43f899303b' },
      headers: {
        provider: 'mailChimp',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      }
    });
    const response = httpMocks.createResponse();
    chimp.getAllSegment(request, response)
      .then(body => {
       // console.log(body);
        chai.expect(body).to.be.a('Object');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#getSpecificSegment()',  () => {
  it('should return specific segments',  (done) => {
    let request = httpMocks.createRequest({
      params: {listId: '43f899303b', segmentId: '4121'},
      headers: {
        provider: 'mailChimp',  
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      }
    });
    const response = httpMocks.createResponse();
    chimp.getSpecificSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a('Object');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#createList()',  () => {
  it('should create new listId',  (done) => {
    let request = httpMocks.createRequest({ 
      query: { clientId: 'e8a260171cc650fd3c7de46ba6f7f0cf' },
      headers: {
        provider: 'mailChimp',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      },
      body:{
          "name":"TechRacers 10",
          "contact":{"company":"MailChimp","address1":"675 Ponce De Leon Ave NE","address2":"Suite 5000","city":"Atlanta","state":"GA","zip":"30308","country":"US","phone":"414365146"},
          "permission_reminder":"You are receiving this email because you signed up for updates about Freddie's newest hats.",
          "campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"Ligtening Deals","language":"en"},
          "email_type_option":true
      },
      method:'POST'
    });
    const response = httpMocks.createResponse();
    chimp.createList(request, response)
      .then(body => {
        chai.expect(body).to.be.a('Object');
        //chai.expect(response.body).to.be.a('String');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  
 

describe('#createSegment()', ()=> {
  it('should return new created segment Id',(done)=> {
    let request = httpMocks.createRequest({
      params: { listId: '59b3b15db4' },
      headers: {
        provider: 'mailChimp',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      },body:{
          "name":"New Segment",
          "options": {
                      "match": "all",
                      "conditions": [
                          {
                              "condition_type": "Date",
                              "field": "timestamp_opt",
                              "op": "greater",
                              "value": "date",
                              "extra": "2018-07-16"
                          }
                      ]
                  }
            }, method:'POST'
    });
    const response = httpMocks.createResponse();
    chimp.createSegment(request, response)
      .then(body => {
        chai.expect(body).to.be.a('Object');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#updateSegment()',  () => {
  it('should update segment',  (done) => {
    let request = httpMocks.createRequest({
      params: { segmentId: '4661', listId: '59b3b15db4' },
      headers: {
        provider: 'mailChimp',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      },body:{
        
          "name":"email based",
          "options":{
                      "match": "any",
                      "conditions":[
                                      {
                                          "condition_type":"EmailAddress",
                                          "field":"merge0",
                                          "op":"is",
                                          "value":"jainakash7474@gmail.com"
                                      },
                                      {
                                          "condition_type":"EmailAddress",
                                          "field":"merge0",
                                          "op":"is",
                                          "value":"akjain@grepruby.com"
                                      }
                      ]
          }  
       
       },method:'PUT' 
    });
    const response = httpMocks.createResponse();
    chimp.updateSegment(request, response)
      .then(response => {
        chai.expect(response).to.be.a('Object');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  

describe('#deleteSegment()',  () => {
  it('should delete specific segments',  (done) => {
    let request = httpMocks.createRequest({
      params: { segmentId: '4213', listId: '43f899303b' },
      headers: {
        provider: 'mailChimp',
        authorization: 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE6OTRhOTY1MGM1NjZlMzZhYjhjZjQ0NjFmMzU4NGQ1YTYtdXMxOA==',
      },
      method:'DELETE'
    });
    const response = httpMocks.createResponse();
    chimp.deleteSegment(request, response)
      .then(response => {
        chai.expect(response).to.be.a('undefined');
        done();
      })
      .catch(errorOnOperation => done(errorOnOperation));
  });
});  