const _prepareRequest = require("../../lib/request");
class campaignController{
    
  static getCampaigns(request, response) {
    const clientId = request.params.clientId;
    const endPoint = 'clients/' + clientId + '/lists.json';
    _prepareRequest(endPoint, request, response);
  }

  static createCampaign(request, response) {
    const clientId = request.params.clientId;
    const endPoint = 'lists/'+clientId+'.json'
    _prepareRequest(endPoint, request, response);
  }


  static getEmailState(request,response){
    const clientId=request.params.clientid;
    const email= request.query.email;
    const endPoint='clients/'+clientId+'/listsforemail.json?email='+email;
    _prepareRequest(endPoint, request, response);
  }

}
module.exports= campaignController;
