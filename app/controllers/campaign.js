const _prepareRequest = require("../../lib/request");
class campaignController{

  static getCampaigns(request, response) {
    let endPoint;
    const clientId = request.params.clientId;
    const provider= request.headers.provider;
    console.log(typeof provider);
    if(provider=="campaignMonitor"){
        endPoint = 'clients/' + clientId + '/campaigns.json';
    }
    if(provider=="mailChimp"){
      endPoint = 'clients/' + clientId + '/campaigns.json';
  }

    _prepareRequest(endPoint, request, response);
  }

  static createCampaign(request, response) {
    const clientId = request.params.clientId;
    const endPoint = 'lists/'+clientId+'.json'
    _prepareRequest(endPoint, request, response);
  }


}
module.exports= campaignController;