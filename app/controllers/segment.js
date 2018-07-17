const _prepareRequest = require("../../lib/request");
class segmentController {

  static getAllSegment(request, response) {
    let endPoint;
    const listId = request.params.listId;
    const provider = request.headers.provider;
    console.log(typeof provider);
    if (provider == "campaignMonitor") {
      endPoint = 'lists/' + listId + '/segments.json'
    }
    if (provider == "mailChimp") {
      endPoint = 'lists/' + listId + '/segments'
    }

    _prepareRequest(endPoint, request, response);
  }

  static getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    let endPoint;
    const provider = request.headers.provider;
    if (provider == "campaignMonitor") {
      endPoint = 'segments/' + segmentId + '.json'
    }
    if (provider == "mailChimp") {
      const listId = request.params.listId;
      endPoint = 'lists/' + listId + '/segments/' + segmentId;
    }
    _prepareRequest(endPoint, request, response);
  }

  static createSegment(request, response) {
    let endPoint;
    const listId = request.params.listId;
    const provider = request.headers.provider;
    console.log(typeof provider);
    if (provider == "campaignMonitor") {
      endPoint = 'segments/' + listId + '.json';
    }
    if (provider == "mailChimp") {
      endPoint = 'lists/' + listId + '/segments'
    }
    _prepareRequest(endPoint, request, response);
  }

  static updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    let endPoint;
    const provider = request.headers.provider;
    if (provider == "campaignMonitor") {
      endPoint = 'segments/' + segmentId + '.json'
    }
    if (provider == "mailChimp") {
      const listId = request.params.listId;
      endPoint = 'lists/' + listId + '/segments/' + segmentId;
    }
    _prepareRequest(endPoint, request, response);
  }

  static deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    let endPoint;
    const provider = request.headers.provider;
    if (provider == "campaignMonitor") {
      endPoint = 'segments/' + segmentId + '.json'
    }
    if (provider == "mailChimp") {
      const listId = request.params.listId;
      endPoint = 'lists/' + listId + '/segments/' + segmentId;
    }
    _prepareRequest(endPoint, request, response);
  }
}
module.exports = segmentController;