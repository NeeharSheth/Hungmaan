var score= 0;

function score_update(){
score= score+1;
document.getElementById("score_display").innerHTML= "Score: "+score;
}

function score_save(){
localStorage.setItem("Score",score);
}

function next(){
    window.location="activity_2.html";
}