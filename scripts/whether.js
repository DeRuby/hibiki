// Description
//  天気スクリプト
//
// Dependencies:
//  なし
//
// Configuration:
//  なし
//
// Commands:
//  hibiki whether
//
// Notes:
//  東京の天気を返す
//
// Author:
//  nasum
var fetch = require('node-fetch');
fetch.Promise = require('bluebird');
export default function(robot){
  robot.respond(/whether/, (msg) => {
    fetch('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010')
      .then(function(res){
        return res.json();
      }).then(function(json){
        msg.send(json.title);
        msg.send(json.description.text);
        msg.send(json.link);
      });
  });
}
