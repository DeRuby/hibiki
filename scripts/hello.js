// Description
//  挨拶スクリプト
//
// Dependencies:
//  なし
//
// Configuration:
//  なし
//
// Commands:
//  hibiki おはよう - 響がおはようを言ってくれます
//  hibiki こんにちは - 響がこんにちはを言ってくれます
//  hibiki こんばんは - 響がこんばんはを言ってくれます
//
// Notes:
//  挨拶させたいWordを入れるべし
//
// Author:
//  nasum
export default function(robot){
  robot.respond(/おはよう/, (msg) => {
    msg.send("司令官、Доброе утро（ドーブラエ　ウートラ）. 眠いね。");
  });

  robot.respond(/こんにちは/, (msg) => {
    msg.send("Добрый день（ドーブルイ　ディェン）. 司令官。お仕事お疲れ様。");
  });

  robot.respond(/こんばんは/, (msg) => {
    msg.send("Добрый вечер（ドーブルイ　ヴィエーチル）. 司令官。おうちに帰りたいね。");
  })

  robot.hear(/イベント/, (msg) => {
    msg.send("そろそろイベントの季節か。司令官、準備は順調かい？");
  });
}
