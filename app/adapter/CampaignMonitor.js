const _prepareRequest = require("../../lib/request");
class campaignMonitor {
  constructor() {
    this.baseUrl = 'https://api.createsend.com/api/v3.2/'
  }

  
  getLists(request, response) {
    return new Promise((success,error) =>{
      let finalResult;
      const clientId = request.query.clientId;
      const endPoint = 'clients/' + clientId + '/lists.json';
     _prepareRequest(this.baseUrl,endPoint, request, response)
      .then(result=> {
        return success(result);
      }).catch(err=>console.log(err))
    });
    
  }

  createList(request, response) {
    return new Promise((success,error)=>{
      const clientId = request.query.clientId;
      const endPoint = 'lists/' + clientId + '.json'
      _prepareRequest(this.baseUrl,endPoint, request, response)
        .then(result=>{
          return success(result);
        }).catch(err=>console.log(err));
    })
  }

  getEmailState(request, response) {
    return new Promise((success,error)=>{
    const clientId = request.params.clientId;
    const email = request.query.email;
    const endPoint = 'clients/' + clientId + '/listsforemail.json?email=' + email;
    _prepareRequest(this.baseUrl,endPoint, request, response).then(result=>{return success(result)}).catch(err=>console.log(err));
    })  
  }

  getAllSegment(request, response) {
    return new Promise((success,error)=>{
      const listId = request.params.listId;
      const endPoint = 'lists/' + listId + '/segments.json';
      _prepareRequest(this.baseUrl,endPoint, request, response).then(result=>{return success(result)}).catch(error=>{console.log(error)});
    })
  }

  createSegment(request, response) {
    return new Promise((success,error)=>{
      const listId = request.params.listId;
      const endPoint = 'segments/' + listId + '.json';
      _prepareRequest(this.baseUrl,endPoint, request, response).then(result=>{return success(result)})
      .catch(error=>{console.log(error)});
    })
  }

  getSpecificSegment(request, response) {
    return new Promise((success,error)=>{
      const segmentId = request.params.segmentId;
      const endPoint = 'segments/' + segmentId + '.json'
      _prepareRequest(this.baseUrl,endPoint, request, response).then(result=>{return success(result)})
      .catch(error=>{console.log(error)});
    })
  }

  deleteSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    _prepareRequest(this.baseUrl,endPoint, request, response);
  }

  updateSegment(request, response) {
    const segmentId = request.params.segmentid;
    const endPoint = 'segments/' + segmentId + '.json'
    _prepareRequest(this.baseUrl,endPoint, request, response);
  }

}
module.exports = campaignMonitor;