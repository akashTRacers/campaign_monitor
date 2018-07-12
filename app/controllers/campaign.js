var requestMaker = require('request');
class campaignController{
    
  static getCampaigns(request, response) {
    const clientId = request.params.clientId;
    const endPoint = 'clients/' + clientId + '/lists.json';
    campaignController._prepareRequest(endPoint, request, response);
  }

  static createCampaign(request, response) {
    const clientId = request.params.clientId;
    const endPoint = 'lists/'+clientId+'.json'
    campaignController._prepareRequest(endPoint, request, response);
  }


  static _prepareRequest(endPoint, request, response) {
    const baseUrl = 'https://api.createsend.com/api/v3.2/'
    const url= baseUrl+endPoint;
    requestMaker(url, {
      json: true, method: request.method, headers: {
        'Authorization': 'Basic ZGNhZWI0MTVlOGM3ZGYyZWU1NmUyMzc5NDJkYzdmZmE=',
        'Content-Type': 'application/json'
      },
      body: request.body
    }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
      response.send(body);
    });
  }

      /* static getEmailState(request,response){
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
     }*/
}
module.exports= campaignController;
