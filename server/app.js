
var http = require('http'),
    url = require('url'),
    fs = require('fs');

    var messages = ['&quot;testing&quot;'];
var clients = [];

 //API FS

 http.createServer(function (req, res) {
    fs.readFile('./index.html', function(err, data) {
      res.end(data);
    });
  }).listen(8080, 'localhost');
  console.log('Server running.');


// Client code
var counter = 0;
var poll = function() {
  $.getJSON('/poll/'+counter, function(response) {
     counter = response.count;
     var elem = $('#output');
     elem.text(elem.text() + response.append);
     poll();
  });
}
poll();

//Implémentation du long polling côté serveur

http.createServer(function (req, res) {
    // parse URL
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    if(url_parts.pathname == '/') {
       // file serving
       fs.readFile('./index.html', function(err, data) {
          res.end(data);
       });
    } else if(url_parts.pathname.substr(0, 5) == '/poll') {
      // polling code here
   }
 }).listen(8080, 'localhost');
 console.log('Server running.');

 var count = url_parts.pathname.replace(/[^0-9]*/, '');
console.log(count);

if(messages.length > count) {
  res.end(JSON.stringify( {
    count: messages.length,
    append: messages.slice(count).join('&quot;\n&quot;)+&quot;\n&quot')
  }))
} else {
  clients.push(res);
  
}

{/* } else if(url_parts.pathname.substr(0, 5) == '/msg/') {
  // message receiving
  var msg = unescape(url_parts.pathname.substr(5));
  messages.push(msg);
  while(clients.length > 0) {
    var client = clients.pop();
    client.end(JSON.stringify( {
      count: messages.length,
      append: msg+&quot;\n&quot;
    }));
  }
  res.end();
} */}

server.listen(8080, () => console.log(`Server started successfuly ok`));

