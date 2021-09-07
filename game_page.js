
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1); //to get the second letter
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2); //to get the middle letter of your word
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; //to get the last letter of the word
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);
//word = coding charAt1 = "o"
    remove_charAt1 = word.replace(charAt1, "_");//output: c_ding 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");//charAt2 = "i" output: c_d_ng
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");//charAt3 = "g" output:c_d_n_
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";//to display the question word after the replacing letters with underscore
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";//to display inputbox for entering the user's answer
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";//to create the check btn
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;//get the value that u have entered and store it in get_answer
	answer = get_answer.toLowerCase(); //change that word into lowercase 
	console.log("answer in lower case - " + answer);
	if(answer == word)	//comparing your answer with the actual word 
	{
		if(answer_turn == "player1") 
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1") 
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}
 
	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

