function AddUser(){
 var player1_name = document.getElementById("player1_name_input").value ;
 var player2_name = document.getElementById("player2_name_input"),value ;

 localStorage.setItem ("Player1 name",player1_name);
 localStorage.setItem ("Player2 name",player2_name);

 window.location = "game_page.html" ; 
}
