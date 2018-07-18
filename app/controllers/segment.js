const _prepareRequest = require("../../lib/request");
class segmentController {

  static getAllSegment(request, response) {
    request.esp.getAllSegment(request, response);
  }

  static getSpecificSegment(request, response) {
    request.esp.getSpecificSegment(request, response);
  }

  static createSegment(request, response) {
    request.esp.createSegment(request, response);
  }

  static updateSegment(request, response) {
    request.esp.updateSegment(request, response);
  }

  static deleteSegment(request, response) {
    request.esp.deleteSegment(request, response);
  }
}
module.exports = segmentController;