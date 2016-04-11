export default function(robot){
  const config = {
    room: process.env.SLACK_ROOM
  }
  robot.router.post('/hatena_bookmark', (req, res) => {
    let body = req.body;
    let room = { room: config.room }
    robot.send(room, `司令官がこんなページをブックマークしたよ。\n${body.title}\n${body.url}`);
  });
}
