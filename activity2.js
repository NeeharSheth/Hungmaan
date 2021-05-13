var score=0;

function get_score(){
score= localStorage.getItem("Score");
document.getElementById("score_display").innerHTML=score;
}

function back(){
    window.location="activity_1.html";
}