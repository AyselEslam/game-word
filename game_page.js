var player1_name=localStorage.getItem("user1");

var player2_name=localStorage.getItem("user2");

document.getElementById("player1").innerHTML=player1_name;

document.getElementById("player2").innerHTML=player2_name;

document.getElementById("question").innerHTML=player1_name;

document.getElementById("answer").innerHTML=player2_name;

function send()
{
    var question_word= document.getElementById("word").value;
    new_word= question_word.toLowerCase();
    var char_1= new_word.charAt(1);
    var len= new_word.length;
    var char_2= new_word.charAt(len-1);
    var char_3= new_word.charAt(Math.floor(len/2));
    var replace1= new_word.replace(char_1,"_");
    var replace2= replace1.replace(char_2,"_");
    var replace3= replace2.replace(char_3,"_");
    var line1= "<h3>Q" +replace3+"</h3>";
    var line2= "<input type='text' id='answer_input' class='form-control'>"
    var line3= "<br><button id='check_button' class='btn btn-info' onclick='check()'>check</button>"
    document.getElementById("output").innerHTML=line1+line2+line3;
    document.getElementById("word").value = "";
}

var player1 = 0;
var player2 = 0;

var question_turn = "player1";
var answer_turn =  "player2";

function check()
{
   var answer = document. getElementById("answer_input").value.toLowerCase();

   if (new_word == answer)
   {
    if(answer_turn == "player2")
    {
        player2 = player2 +1
        document.getElementById("score2").innerHTML = player2;
    }

    else
        {
            player1 = player1 +1
            document.getElementById("score1").innerHTML = player1;
        }

   }

    if (question_turn == "player1")
    {
       question_turn = "player2"
       document.getElementById("question").innerHTML = player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("question").innerHTML = player1_name;
    }

    if (answer_turn == "player1")
        {
           answer_turn = "player2"
           document.getElementById("answer").innerHTML = player2_name;
        }
        else{
            answer_turn = "player1"
            document.getElementById("answer").innerHTML = player1_name;
        }

        document.getElementById("output").innerHTML = "";
}