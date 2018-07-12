var requestMaker = require('request');
 const _prepareRequest = (endPoint, request, response)=> {
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
  module.exports=_prepareRequest