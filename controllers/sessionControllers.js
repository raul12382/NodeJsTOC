const request = require("request");

exports.sessionController = (req, res) =>{
    let options = { method: 'POST',
    url: 'https://sandbox-api.7oc.cl/session-manager/v1/session-id',
    headers:
     { 'Cache-Control': 'no-cache',
       'Content-Type': 'multipart/form-data' },
    formData: { apiKey: '433a8e1ed0dc4495974a9f95018eed8f' , autocapture: 'true', liveness: 'true', mode:1, liveness_passive: 'true'} };
  
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(response.body)
      res.setHeader('Content-Type', 'application/json');
      res.end(response.body);
      
    });

}