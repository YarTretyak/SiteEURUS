VANTA.NET({
  el: "#animation",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff6800,
  backgroundColor: 0x180c2d
})

var teams = [
    {
        team_id: 1,
        team_name: "Natus Vincere",
      },
      {
        team_id: 2,
        team_name: "Virtus Pro",
      },
      {
        team_id: 3,
        team_name: "Team Empire",
      },
      {
        team_id: 4,
        team_name: "Team Liquid",
      },
      {
        team_id: 5,
        team_name: "OG",
      },
      {
        team_id: 6,
        team_name: "LGD.PSG",
      },
      {
        team_id: 7,
        team_name: "Alliance",
      },
      {
        team_id: 8,
        team_name: "Team Nigma",
      },
      {
        team_id: 9,
        team_name: "Team Spirit",
      },
      {
        team_id: 10,
        team_name: "ViKin.gg",
      },
      {
        team_id: 11,
        team_name: "Thunder Predator",
      },
      {
        team_id: 12,
        team_name: "TNC Pro Team",
      },
      {
        team_id: 13,
        team_name: "PuckChamp",
      },
      {
        team_id: 14,
        team_name: "EHOME",
      },
      {
        team_id: 15,
        team_name: "Team Unique",
      },
      {
        team_id: 16,
        team_name: "IG Vitality",
      }
  ];
  
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  var games = teams.slice();
  
  function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  
  shuffle(games);
  
  var click_num = 0;
  
  function myFunction() {
    if (click_num == 0) {
      document.getElementById("title").innerHTML =
        "Раунд" + click_num + ": Турнірна сітка ";
  
      for (var i = 0; i < teams.length; i++) {
        var team_id = i + 1;
        document.getElementById("name_1_" + team_id).innerHTML =
          games[i].team_name;
      }
    }
  
    if (click_num == 1) {
      document.getElementById("title").innerHTML =
        "Раунд" + click_num + ": 1/8 Фіналу ";
  
      for (var i = 0; i < 8; i++) {
        var game_id = i + 1;
  
        var team_id_1 = game_id * 2 - 1;
        var team_id_2 = game_id * 2;
  
        var team_name_1 = document.getElementById(
          "name_" + click_num + "_" + team_id_1
        ).innerHTML;
        var team_name_2 = document.getElementById(
          "name_" + click_num + "_" + team_id_2
        ).innerHTML;
  
        var game_result = randomInteger(1, 2);
  
        if (game_result == 1) {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_1;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("winner");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("loser");
        } else {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_2;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("loser");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("winner");
        }
      }
    }
  
    if (click_num == 2) {
      document.getElementById("title").innerHTML =
        "Раунд" + click_num + ": 1/4 Фіналу";
  
      for (var i = 0; i < 4; i++) {
        var game_id = i + 1;
  
        var team_id_1 = game_id * 2 - 1;
        var team_id_2 = game_id * 2;
  
        var team_name_1 = document.getElementById(
          "name_" + click_num + "_" + team_id_1
        ).innerHTML;
        var team_name_2 = document.getElementById(
          "name_" + click_num + "_" + team_id_2
        ).innerHTML;
  
        var game_result = randomInteger(1, 2);
  
        if (game_result == 1) {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_1;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("winner");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("loser");
        } else {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_2;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("loser");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("winner");
        }
      }
    }
  
    if (click_num == 3) {
      document.getElementById("title").innerHTML =
        "Раунд" + click_num + ": 1/2 Фіналу ";
  
      for (var i = 0; i < 2; i++) {
        var game_id = i + 1;
  
        var team_id_1 = game_id * 2 - 1;
        var team_id_2 = game_id * 2;
  
        var team_name_1 = document.getElementById(
          "name_" + click_num + "_" + team_id_1
        ).innerHTML;
        var team_name_2 = document.getElementById(
          "name_" + click_num + "_" + team_id_2
        ).innerHTML;
  
        var game_result = randomInteger(1, 2);
  
        if (game_result == 1) {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_1;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("winner");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("loser");
        } else {
          document.getElementById(
            "name_" + (click_num + 1) + "_" + game_id
          ).innerHTML = team_name_2;
          document
            .getElementById("result_" + click_num + "_" + team_id_1)
            .classList.add("loser");
          document
            .getElementById("result_" + click_num + "_" + team_id_2)
            .classList.add("winner");
        }
      }
    }
  
    if (click_num == 4) {
      var game_id = 1;
  
      var team_id_1 = game_id * 2 - 1;
      var team_id_2 = game_id * 2;
  
      var team_name_1 = document.getElementById(
        "name_" + click_num + "_" + team_id_1
      ).innerHTML;
      var team_name_2 = document.getElementById(
        "name_" + click_num + "_" + team_id_2
      ).innerHTML;
  
      console.log(game_id, team_id_1, team_id_2, team_name_1, team_name_2);
  
      var game_result = randomInteger(1, 2);
  
      if (game_result == 1) {
        document
          .getElementById("result_" + click_num + "_" + team_id_1)
          .classList.add("winner");
        document
          .getElementById("result_" + click_num + "_" + team_id_2)
          .classList.add("loser");
        document.getElementById("title").innerHTML =
          "Раунд" + click_num + ":  Фінал " + team_name_1 + " Переможець";
        document.getElementById("myCheck").style.display = "none";
      } else {
        document
          .getElementById("result_" + click_num + "_" + team_id_1)
          .classList.add("loser");
        document
          .getElementById("result_" + click_num + "_" + team_id_2)
          .classList.add("winner");
        document.getElementById("title").innerHTML =
          "Раунд" + click_num + ":  Фінал " + team_name_2 + " Переможець";
        document.getElementById("myCheck").style.display = "none";
      }
    }
  
    click_num = click_num + 1;
  }