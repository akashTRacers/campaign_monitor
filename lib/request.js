const requestMaker = require('request');
const _prepareRequest = (endPoint, request, response)=> {
  const baseUrl = 'https://api.createsend.com/api/v3.2/'
  const url = baseUrl + endPoint;
const auth=request.headers.authorization;
  requestMaker(url, {
    json: true, method: request.method, headers: {
      'Authorization': auth,
      'Content-Type': 'application/json'
    },
    body: request.body
  }, (err, res, body) => {
    if (err) { return console.log(err); }
    response.send(body);
  });
}
module.exports=_prepareRequest