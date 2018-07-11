const  path='../views/update1.pug';
const https= require('https');
var request1 = require('request');
class campaignController{
    
    static getCampaigns(request, response) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1 getCampaigns");
     var options={
    
        host:'api.createsend.com',
        path:'/api/v3.1/clients/e8a260171cc650fd3c7de46ba6f7f0cf/lists.json?pretty=true'
        ,method: 'GET'
        ,headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'

          }
     };
     var maybe="";
       console.log(">>>>>>>>>>>>>>>>>>> 2 getCampaigns");
       var req= https.get(options,function(res){
        var body="";
        res.on('data',function(data){
            console.log("data has been fetched getCampaigns");
            body+=data;
        })
        res.on('end',function(){
            maybe=JSON.parse(body);
            console.log(maybe);
            response.send(maybe);

        })
        console.log('here getCampaigns');
        })
        req.on('error', function(e) {
            console.log('Problem with request: ' + e.message);
        });
    }

    static getEmailState(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1");
        var options={
            host:'api.createsend.com',
            path:'/api/v3.2/clients/e8a260171cc650fd3c7de46ba6f7f0cf/listsforemail.json?email=jainakash7474@gmail.com'
            ,method: 'GET'
            ,headers: {
                'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
                'Content-Type': 'application/json'
            }
        };
        var maybe="";
        console.log(">>>>>>>>>>>>>>>>>>> 2");
        var req= https.get(options,function(res){
            var body="";
            res.on('data',function(data){
                console.log("data has been fetched");
                body+=data;
            })
            res.on('end',function(){
                maybe=JSON.parse(body);
                console.log(maybe);
                response.send(maybe);

            })
            console.log('here');
        })
        req.on('error', function(e) {
            console.log('Problem with request: ' + e.message);
        });

    }
     static createCampaign(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1");
        var options={
            host:'api.createsend.com',
            path:'api/v3.2/lists/e8a260171cc650fd3c7de46ba6f7f0cf.json'
            ,method: 'POST'
            ,headers: {
                'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
                'Content-Type': 'application/json'
            },
            json:true,
            body: {
                "Title": "Website Sky7",
                "UnsubscribePage": "http://www.example.com/unsubscribed.html",
                "UnsubscribeSetting": "AllClientLists",
                "ConfirmedOptIn": false,
                "ConfirmationSuccessPage": "http://www.example.com/joined.html"
            }
        };

        console.log(">>>>>>>>>>>>>>>>>>>>>>createCampaign  2");
        request1('https://api.createsend.com/api/v3.2/lists/e8a260171cc650fd3c7de46ba6f7f0cf.json', { json: true, method: 'POST',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'},
            body:{
                "Title": "Newest Sky9",
                "UnsubscribePage": "http://www.example.com/unsubscribed.html",
                "UnsubscribeSetting": "AllClientLists",
                "ConfirmedOptIn": false,
                "ConfirmationSuccessPage": "http://www.example.com/joined.html"
                
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          });


       
    }

    static deleteSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>deleteSegment  1");
        request1('https://api.createsend.com/api/v3.2/segments/3ee88782fd55e22a22b7d9d90363cbef.json', { json: true, method: 'DELETE',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            response.send(body);
          });

    }

    static getAllSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>getSegment  1");
        request1('https://api.createsend.com/api/v3.2/lists/835d66e4ac3a69db3989da7a3ab6f46b/segments.json', { json: true, method: 'GET',headers: {
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
        request1('https://api.createsend.com/api/v3.2/segments/cec5ad087a263c8bde2cc79270071441.json', { json: true, method: 'GET',headers: {
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
        request1('https://api.createsend.com/api/v3.2/segments/835d66e4ac3a69db3989da7a3ab6f46b.json', { json: true, method: 'POST',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'},
            body:{
                "Title": "My Rules Segment9",
                "RuleGroups": [
                    {
                        "Rules": [
                            {
                                "RuleType": "EmailAddress",
                                "Clause": "CONTAINS @domain.com"
                            }
                        ]
                    },
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
                    },
                    {
                        "Rules": [
                            {
                                "RuleType": "DateSubscribed",
                                "Clause": "BEFORE 2010-01-01"
                            }
                        ]
                    }
                ]
            }
        }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            response.send(body);
          });

    }
   static updateSegment(request,response){
    console.log(">>>>>>>>>>>>>>>>>>>>>>getSegment  1");
    request1('https://api.createsend.com/api/v3.2/segments/cec5ad087a263c8bde2cc79270071441.json', { json: true, method: 'PUT',headers: {
        'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
        'Content-Type': 'application/json'
    },body:{
        "Title": "My Newest Segment",
        "RuleGroups":[
                {
                  "Rules":[
                            {
                            "RuleType":"EmailAddress",
                            "Clause":"CONTAINS @sky.com"
                                
                            },
                            {
                            "RuleType": "DateSubscribed",
                            "Clause": "BEFORE 2018-10-01"
                            }
                            
                        ]
                }
            
            ]
    }    

    }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        response.send(body);
      });



   }
 
}
module.exports= campaignController;
