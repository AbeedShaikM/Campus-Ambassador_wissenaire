
var result=document.createElement("p");
document.body.appendChild(result);
result.classList.add("centre");
result.style.fontSize="30px";
result.style.fontWeight="400px";
result.innerHTML=" ";
let dice=["dice_1.png",
"dice_2.png",
"dice_3.png",
"dice_4.png",
"dice_5.png",
"dice_6.png",
];
var st=document.getElementById("start");
st.addEventListener("click",start);
var player1_name=document.getElementById("player1_name");
var player2_name=document.getElementById("player2_name");
function start(){
    var name1=prompt("Enter Player-1 name:");
    var name2=prompt("Enter Player-2 name");
    player1_name.innerHTML=name1;
    player2_name.innerHTML=name2;
    playagain();
}
function playagain(){
    var a=Math.random();
    var player1_num=Math.floor(a*6);
    var b=Math.random();
    var player2_num=Math.floor(b*6);
    var im=document.getElementsByClassName("image");
    im[0].src=dice[player1_num];
    im[1].src=dice[player2_num];
    if(player1_num>player2_num){
        result.innerHTML=  player1_name.innerHTML + " wins";
    }
    else if(player2_num>player1_num){
        result.innerHTML= player2_name.innerHTML + " wins";
    }
    else{
        result.innerHTML= "Match Drawn";
    }
}
var b=document.getElementById("but");
b.addEventListener("click",playagain);