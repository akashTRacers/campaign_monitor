const _prepareRequest = require("../../lib/request");
class mailChimp {
  constructor() {
    this.baseUrl = "https://us18.api.mailchimp.com/3.0/";
  }

  getLists(request, response) {
    return new Promise((success, error) => {
      const endPoint = "lists";
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  createList(request, response) {
    return new Promise((success, error) => {
      const endPoint = "lists";
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  getAllSegment(request, response) {
    return new Promise((success, error) => {
      const listId = request.params.listId;
      const endPoint = "lists/" + listId + "/segments";
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  getSpecificSegment(request, response) {
    return new Promise((success, error) => {
      const segmentId = request.params.segmentId;
      const listId = request.params.listId;
      const endPoint = "lists/" + listId + "/segments/" + segmentId;
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  createSegment(request, response) {
    return new Promise((success, error) => {
      const listId = request.params.listId;
      const endPoint = "lists/" + listId + "/segments";
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  deleteSegment(request, response) {
    return new Promise((success, error) => {
      const segmentId = request.params.segmentId;
      const listId = request.params.listId;
      const endPoint = "lists/" + listId + "/segments/" + segmentId;
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }

  updateSegment(request, response) {
    return new Promise((success, error) => {
      const segmentId = request.params.segmentId;
      const listId = request.params.listId;
      const endPoint = "lists/" + listId + "/segments/" + segmentId;
      _prepareRequest(this.baseUrl, endPoint, request, response)
        .then(result => {
          return success(result);
        })
        .catch(err => console.log(err));
    });
  }
}
module.exports = mailChimp;
