var request = require('request');

request({
  method: 'POST',
  url: "https://api.nvoip.com.br/v2/sms",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '' // Cole seu TOKEN aqui.
  },
  body: "{  \"numberPhone\": \"(XX)XXXXXXXXX\",  \"message\": \"sua mensagem aqui\",  \"flashSms\": false}" // Trocar o Body, com os dados usados para envio do SMS.
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  
})

