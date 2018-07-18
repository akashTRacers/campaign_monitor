const _prepareRequest = require("../../lib/request");
class mailChimp {
  constructor(espname) {
    this.espname = espname;
  }

  getLists(request, response) {
    let endPoint;
    endPoint = 'lists';
    _prepareRequest(endPoint, request, response);
  }

  createList(request, response) {
    let endPoint;
    endPoint = 'lists';
    _prepareRequest(endPoint, request, response);
  }

  getAllSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments';
    _prepareRequest(endPoint, request, response);
  }

  getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(endPoint, request, response);
  }

  createSegment(request, response) {
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments'
    _prepareRequest(endPoint, request, response);
  }

  deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(endPoint, request, response);
  }

  updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const listId = request.params.listId;
    const endPoint = 'lists/' + listId + '/segments/' + segmentId;
    _prepareRequest(endPoint, request, response);
  }



}
module.exports = mailChimp;