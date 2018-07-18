const _prepareRequest = require("../../lib/request");
class campaignMonitor {
  constructor(espname) {
    this.espname = espname;
  }

  getLists(request, response) {
    const clientId = request.query.clientId;
    const endPoint = 'clients/' + clientId + '/lists.json';
    _prepareRequest(endPoint, request, response);
  }

  createList(request, response) {
    let endPoint;
    const clientId = request.query.clientId;
    const endPoint = 'lists/' + clientId + '.json'
    _prepareRequest(endPoint, request, response);
  }

  getEmailState(request, response) {
    const clientId = request.params.clientid;
    const email = request.query.email;
    const endPoint = 'clients/' + clientId + '/listsforemail.json?email=' + email;
    _prepareRequest(endPoint, request, response);
  }

  getAllSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments.json'
    _prepareRequest(endPoint, request, response);
  }

  createSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'segments/' + listId + '.json';
    _prepareRequest(endPoint, request, response);
  }

  getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    _prepareRequest(endPoint, request, response);
  }

  deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    _prepareRequest(endPoint, request, response);
  }

  updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    _prepareRequest(endPoint, request, response);
  }

}
module.exports = campaignMonitor;