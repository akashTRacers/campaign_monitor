const _prepareRequest = require("../../lib/request");
class mailChimp {
  constructor() {
    this.baseUrl="https://us18.api.mailchimp.com/3.0/";
  }

  getLists(request, response) {
    const endPoint = 'lists';
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  createList(request, response) {
    const endPoint = 'lists';
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  getAllSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments';
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  createSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments'
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }

  updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(this.baseUrl, endPoint, request, response);
  }



}
module.exports = mailChimp;