const https= require('https');
var requestMaker = require('request');
const express = require("express");
const app=express();
class campaignController{
    
    static getCampaigns(request, response) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1 getCampaigns");
        const clientId=request.params.clientid;
        requestMaker('https://api.createsend.com/api/v3.1/clients/'+clientId+'/lists.json?pretty=true', { json: true, method: 'GET',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            response.send(body);
          });

       
    }

    static getEmailState(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1");
        const clientId=request.params.clientid;
        const email= request.query.email;
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',email);
        requestMaker('https://api.createsend.com/api/v3.2/clients/'+clientId+'/listsforemail.json?email='+email, { json: true, method: 'GET',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            response.send(body);
          });
     

    }
     static createCampaign(request,response){
        const clientId=request.params.clientid;
        console.log("createCampaign  1");
        console.log(request.body);
        requestMaker('https://api.createsend.com/api/v3.2/lists/'+clientId+'.json', { json: true, method: 'POST',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'},
            body:request.body}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          });


       
    }

    static deleteSegment(request,response){
        const segmentId=request.params.segmentid;
       
        console.log(">>>>>>>>>>>>>>>>>>>>>>deleteSegment  1");
        requestMaker('https://api.createsend.com/api/v3.2/segments/'+segmentId+'.json', { json: true, method: 'DELETE',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          });

    }

    static getAllSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>geAllSegment  1");
        const listId = request.params.listid;
        requestMaker('https://api.createsend.com/api/v3.2/lists/'+listId+'/segments.json', { json: true, method: 'GET',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            response.send(body);
          });

    }

    static getSpecificSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>getSegment  1");
        const segmentId=request.params.segmentid;
        requestMaker('https://api.createsend.com/api/v3.2/segments/'+segmentId+'.json', { json: true, method: 'GET',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          }); 

    }

    static createSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>createSegment  1");
        const listId= request.params.listid;
        console.log(listId);
        console.log(request.body);
        requestMaker('https://api.createsend.com/api/v3.2/segments/'+listId+'.json', { json: true, method: 'POST',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'},
            body:request.body
        }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          });

    }
   static updateSegment(request,response){
    console.log(">>>>>>>>>>>>>>>>>>>>>>getSegment  1");
    const segmentId=request.params.segmentid;
    console.log(segmentId);
    console.log(request.body);
    requestMaker('https://api.createsend.com/api/v3.2/segments/'+segmentId+'.json', { json: true, method: 'PUT',headers: {
        'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
        'Content-Type': 'application/json'
    },body:request.body  

    }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        response.send(body);
      });



   }
 
}
module.exports= campaignController;
