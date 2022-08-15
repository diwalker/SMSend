var request = require('request');

request({
  method: 'POST',
  url: "https://api.nvoip.com.br/v2/sms?napikey=bEZiYlJPZE1pMlRkOVI2MmZsRE9VUmpqZUc4Z2NFNVc%3D",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer !GfB-YiOgeTS#CXab-Vjb9P76@VZXD-KC5W#3Si'
  },
  body: "{  \"numberPhone\": \"(87)988370228\",  \"message\": \"TESTANDO MEU SCRIPT DE ENVIO DE SMS\",  \"flashSms\": false}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  
})

