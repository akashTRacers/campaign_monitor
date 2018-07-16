const requestMaker = require('request');
const _prepareRequest = (endPoint, request, response)=> {
  let baseUrl;
  console.log("#########", endPoint);
  const provider= request.headers.provider;
  if(provider=="campaignMonitor"){
    baseUrl = 'https://api.createsend.com/api/v3.2/'
  }
  if(provider=="mailChimp"){
    baseUrl= 'https://us18.api.mailchimp.com/3.0/'
  }
  
  const url = baseUrl + endPoint;
  console.log(">>>>>>>>>>>>>>>>>>>>>>>",url);
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