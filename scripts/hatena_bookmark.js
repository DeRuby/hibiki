
export default function(robot){
  robot.router.post('/hatena_bookmark', (req, res) => {
    let body = req.body;
    let room = { room: "#general" }
    robot.send(room, "司令官がこんなページをブックマークしたよ。");
    robot.send(room, body.title);
    robot.send(room, body.url);
  });
}
