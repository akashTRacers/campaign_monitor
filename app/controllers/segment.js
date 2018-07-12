var requestMaker = require('request');
class segmentController {

  static getAllSegment(request, response) {
    const campaignID = request.params.campaignID;
    const endPoint = 'lists/' + campaignID + '/segments.json'
    segmentController._prepareRequest(endPoint, request, response);
  }

  static getSpecificSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    segmentController._prepareRequest(endPoint, request, response);
  }

  static createSegment(request, response) {
    const campaignID = request.params.campaignID;
    const endPoint = 'segments/' + campaignID + '.json';
    segmentController._prepareRequest(endPoint, request, response);
  }

  static updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json';
    segmentController._prepareRequest(endPoint, request, response);
  }

  static deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json';
    segmentController._prepareRequest(endPoint, request, response);
  }

  static _prepareRequest(endPoint, request, response) {
    const baseUrl = 'https://api.createsend.com/api/v3.2/'
    const url = baseUrl + endPoint;
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





}
module.exports = segmentController;