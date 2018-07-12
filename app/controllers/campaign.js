var requestMaker = require('request');
class campaignController{
    
    static getCampaigns(request, response) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>  1 getCampaigns");
        const clientId=request.params.clientId;
        requestMaker('https://api.createsend.com/api/v3.2/clients/'+clientId+'/lists.json', { json: true, method: 'GET',headers: {
            'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
            'Content-Type': 'application/json'
        }}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            response.send(body);
          });

       
    }
    
    static createCampaign(request,response){
        const clientId=request.params.clientId;
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

    
    static urlCreator(part){
        let exacturl="https://api.createsend.com/api/v3.2/";
    }
}
module.exports= campaignController;
