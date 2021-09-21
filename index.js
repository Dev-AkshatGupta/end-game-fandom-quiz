const chalk = require('chalk');
var readLineSync =require('readline-sync');
var name=readLineSync.question(chalk.yellow("whats your name? "));
var score=0;
var highScore=
[
  {name:"akshat",
  score:5},
  {name:"Anushka",
    score:4 },
{
name:"Pranshu",
score:"4"
},
]
console.log(chalk.blue("hey welcome "+name));
console.log(chalk.blue("do you know tanay "+name));
function play(question, answer)
{
  var useranswer=readLineSync.question(chalk.magenta(question));
  if (useranswer===answer)
  {
    console.log(chalk.green("you are right"));
     score = score + 1
  }else
  {
    console.log(chalk.red("you are wrong"));
  }
  console.log("your current score is "+score)
}
  var series=[
  {
    question: "what is the name of iron man?\n\
              a)tony stark\n\
              b)dr. bruce banner\n\
              c)Black widow \n\
              ",
    answer:"a"
  },
  {
    question:"what is the name of hulk?\n\
    a)dr. bruce banner\n\
    b)thor\n\
    c)Hawk Eye\n\
    ",
    answer:"a"
  },
  {
    question:"who is the head of S.H.I.E.L.D ?\n\
    a)Thor\n\
    b)Iron Man\n\
    c)Nick Furry\n\
    d)Green Lantern\n\
    ",
    answer:"c"

  },
  {
    question:"what is the name of Black Widow?\n\
    a)dr. bruce banner\n\
    b)Natasha Stankovic \n\
    c)Hawk Eye\n\
    ",
    answer:"b"
  },
  {
    question:"what is the profession of Dr.Strange?\n\
    a)Doctor\n\
    b)Mechanic\n\
    c)Cricketer\n\
    ",
    answer:"a"
  }
];

  for( var i=0;i<series.length;i=i+1 )
  {
    var quiz=series[i];
    play(quiz.question,quiz.answer);
  }
  console.log("your final score = "+score);
  
  for(var u=0;u<=2; u++ )
  {
    var scoring=highScore[u];
    console.log(scoring.name+" and their high score "+scoring.score)
  }

  
  