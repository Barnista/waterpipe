
function AnimateWater(){
    if(x >= track.length){
        x = 0;
        setTimeout(ShowScoreBoard, 1500);
    }else{
        setTimeout(function(){

            if(track[x].obj.innerHTML == pipes.pipe1.html){
                track[x].obj.innerHTML = pipes.pipe1.water;
                console.log("pipe1");
            }else if(track[x].obj.innerHTML == pipes.pipe2.html){
                track[x].obj.innerHTML = pipes.pipe2.water;
            }else if(track[x].obj.innerHTML == pipes.pipe3.html){
                track[x].obj.innerHTML = pipes.pipe3.water;
            }else if(track[x].obj.innerHTML == pipes.pipe4.html){
                track[x].obj.innerHTML = pipes.pipe4.water;
            }else if(track[x].obj.innerHTML == pipes.pipe5.html){
                track[x].obj.innerHTML = pipes.pipe5.water;
            }else if(track[x].obj.innerHTML == pipes.pipe6.html){
                track[x].obj.innerHTML = pipes.pipe6.water;
            }
            PlayWater();
                console.log("check");
            x++;
            AnimateWater();
        }, 350);
    }
}

function ShowScoreBoard(){
    gameBoard.classList.add("collapse");
    scoreBoard.classList.remove("collapse");
    scoreCountBoard.textContent = score_count;
    PlaySFX(sound.special.scoreboard);
    setTimeout(ReportScore, 1000);
}

var cursor;
function animTime(){
    for(var x=0; x < house_pos.length; x++){
       cursor = board[house_pos[x].row][house_pos[x].column];
        if(cursor.isHouse){
            if(cursor.obj.innerHTML == houses[0].anim_idle1){

                cursor.obj.innerHTML = houses[0].anim_idle2;
                houses[0].html = houses[0].anim_idle2;

            }else if(cursor.obj.innerHTML == houses[0].anim_idle2){

                cursor.obj.innerHTML = houses[0].anim_idle1;
                houses[0].html = houses[0].anim_idle1;

            }else if(cursor.obj.innerHTML == houses[1].anim_idle1){

                cursor.obj.innerHTML = houses[1].anim_idle2;
                houses[1].html = houses[1].anim_idle2;

            }else if(cursor.obj.innerHTML == houses[1].anim_idle2){

                cursor.obj.innerHTML = houses[1].anim_idle1;
                houses[1].html = houses[1].anim_idle1;

            }
        }
    }
    setTimeout(function(){
        animTime();
    }, 500);
}

function ReportScore(){
    if(temp_score < score_count){
        setTimeout(function(){
            temp_score += 20;
            scoreCountBoard.textContent = temp_score;
            GiveScore();
            ReportScore();
        }, 80); 
        DelayAdmire();
    }else{
        scoreCountBoard.textContent = temp_score;
        GiveScore();
    } 
}

function GiveScore(){
    if(temp_score >= promise_score){
        starGroup[2].setAttribute("src", stars[1]);
        starGroup[1].setAttribute("src", stars[1]);
        starGroup[0].setAttribute("src", stars[1]);
    }else if(temp_score < promise_score/2){
        starGroup[2].setAttribute("src", stars[0]);
        starGroup[1].setAttribute("src", stars[1]);
        starGroup[0].setAttribute("src", stars[1]);
    }else if(temp_score < promise_score/4){
        starGroup[2].setAttribute("src", stars[0]);
        starGroup[1].setAttribute("src", stars[0]);
        starGroup[0].setAttribute("src", stars[1]);
    }else if(temp_score <= 0){
        starGroup[2].setAttribute("src", stars[0]);
        starGroup[1].setAttribute("src", stars[0]);
        starGroup[0].setAttribute("src", stars[0]);
    }
}

function DelayAdmire(){
    setTimeout(function(){
        if(temp_score >= promise_score){
            admireLab.textContent = "VERY GOOD!";
        }else if(temp_score < promise_score/2){
            admireLab.textContent = "NOT BAD!";
        }else if(temp_score < promise_score/4){
            admireLab.textContent = "TRY HARDER";
        }
    }, 250);
}