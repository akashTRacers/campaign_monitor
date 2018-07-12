var requestMaker = require('request');
class segmentController{

    static getAllSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>geAllSegment  1");
        const campaignID = request.params.campaignID;
        requestMaker('https://api.createsend.com/api/v3.2/lists/'+campaignID+'/segments.json', { json: true, method: 'GET',headers: {
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
        const campaignID= request.params.campaignID;
        console.log(campaignID);
        console.log(request.body);
        requestMaker('https://api.createsend.com/api/v3.2/segments/'+campaignID+'.json', { json: true, method: 'POST',headers: {
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



}
module.exports= segmentController;