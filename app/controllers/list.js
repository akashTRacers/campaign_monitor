const _prepareRequest = require("../../lib/request");
class listController {

  static getLists(request, response) {
    let endPoint;
    const provider = request.headers.provider;
    if (provider == "campaignMonitor") {
      const clientId = request.query.clientId;
      endPoint = 'clients/' + clientId + '/lists.json';
    }
    if (provider == "mailChimp") {
      endPoint = 'lists';
    }

    _prepareRequest(endPoint, request, response);
  }

  static createList(request, response) {
    let endPoint;
    const provider = request.headers.provider;
    if (provider == "campaignMonitor") {
      const clientId = request.query.clientId;
      endPoint = 'lists/' + clientId + '.json'
    }
    if (provider == "mailChimp") {
      endPoint = 'lists';
    }
    _prepareRequest(endPoint, request, response);
  }


  static getEmailState(request, response) {
    const clientId = request.params.clientid;
    const email = request.query.email;
    const endPoint = 'clients/' + clientId + '/listsforemail.json?email=' + email;
    _prepareRequest(endPoint, request, response);
  }

}
module.exports = listController;
