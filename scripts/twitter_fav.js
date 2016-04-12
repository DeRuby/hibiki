var twitter = require('twitter');
export default function(robot){
  let client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

  let twitterStream = null;

  robot.respond(/favorite ([0-9]+)/, (msg) => {
    msg.send(`司令官のTwitterのお気に入りを監視するね。えっちなのをいれても暁には内緒にしておくよ\ncount:${msg.match[1]}`);

    client.get(`favorites/list.json?count=${msg.match[1]}`, function(error, tweets, response){
      if(error) throw error;

      tweets.forEach((elem, index, array) => {
        if(!elem.possibly_sensitive){
          msg.send(elem.text);
        }
      });
    });
  });
}
