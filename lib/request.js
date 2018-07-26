const requestMaker = require('request');

const _prepareRequest = (baseUrl, endPoint, request, response) => {
  return new Promise((success, error) => {
    let methodSend;
    const provider = request.headers.provider;
    methodSend = request.method;
    if (provider === "mailChimp") {
      if (request.method === "PUT") {
        methodSend = "PATCH";
      }
    }
    const url = baseUrl + endPoint;
    const auth = request.headers.authorization;
    requestMaker(url, {
      json: true, method: methodSend, headers: {
        'Authorization': auth,
        'Content-Type': 'application/json'
      },
      body: request.body
    }, (err, res, body) => {
      if (err) { return error(err) }
      response.send(body);
      return success(body);
    });
  })
}

module.exports = _prepareRequest