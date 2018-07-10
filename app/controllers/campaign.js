const  path='../views/update1.pug';
const https= require('https');
var request = require('request');
class campaignController{
    
    static getCampaigns(request, response) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1");
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
        var maybe="";
        console.log(">>>>>>>>>>>>>>>>>>> 2");
        var req= https.get(options,function(res,body){
            var body1="";
            res.on('data',function(data){
                console.log("data has been fetched");
                body1+=data;
            })
            res.on('end',function(){
                maybe=body1;
                console.log(maybe);
                response.send(maybe);

            })
            console.log('here');
        })
        req.on('error', function(e) {
            console.log('Problem with request: ' + e.message);
        });
    }

    static deleteSegment(request,response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1");
        var options={
            host:'api.createsend.com',
            path:'api/v3.2/segments/bf5ad8b1e20620b5c8e614a85d923d8d.json'
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
                maybe=(body);
                console.log(maybe);
                response.send(maybe);

            })
            console.log('here');
        })
        req.on('error', function(e) {
            console.log('Problem with request: ' + e.message);
        });

    }
   
 
}
module.exports= campaignController;