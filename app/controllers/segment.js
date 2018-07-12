const _prepareRequest = require("../../lib/request");
class segmentController {

  static getAllSegment(request, response) {
    const campaignID = request.params.campaignID;
    const endPoint = 'lists/' + campaignID + '/segments.json'
   _prepareRequest(endPoint, request, response);
  }

  static getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
   _prepareRequest(endPoint, request, response);
  }

  static createSegment(request, response) {
    const campaignID = request.params.campaignID;
    const endPoint = 'segments/' + campaignID + '.json';
   _prepareRequest(endPoint, request, response);
  }

  static updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json';
    _prepareRequest(endPoint, request, response);
  }

  static deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json';
    _prepareRequest(endPoint, request, response);
  }
}
module.exports = segmentController;