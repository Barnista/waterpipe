function SetupPipe(){
    if(isTimeBreak == false){
        var temp;
        if(this == board[third[0]+1][third[1]].obj){

            temp = board[third[0]+1][third[1]];
            if(temp.isPipe == false){
                first = second;
                second = "bottom";
                third[0]++;
                CheckPipe(this);
                console.log("1");
                PlayPipe();
            }
        }else if(this == board[third[0]-1][third[1]].obj){

            temp = board[third[0]-1][third[1]];
            if(temp.isPipe == false){
                first = second;
                second = "top";
                third[0]--;
                CheckPipe(this);
                console.log("2");
                PlayPipe();
            }

        }else if(this == board[third[0]][third[1]+1].obj){

            temp = board[third[0]][third[1]+1];
            if(temp.isPipe == false){
                first = second;
                second = "right";
                third[1]++;
                CheckPipe(this);
                console.log("3");
                PlayPipe();
            }

            
        }else if(this == board[third[0]][third[1]-1].obj){

            temp = board[third[0]][third[1]-1];
            if(temp.isPipe == false){
                first = second;
                second = "left";
                third[1]--;
                CheckPipe(this);
                console.log("4");  
                PlayPipe(); 
            }


        } 
    }
}

function CheckPipe(obj){
    console.log(obj.innerHTML);

    if(obj.innerHTML == houses[0].anim_idle1 || obj.innerHTML == houses[0].anim_idle2 || obj.innerHTML == houses[1].anim_idle1 || obj.innerHTML == houses[1].anim_idle2){
        
        isHouseConnected++;
        score_count += score_add_house;

        scoreCount.textContent = score_count;

    }

    if(obj.innerHTML == items.extra_pipe.html){
        pipe_count += pipe_point;

        pipeCount.textContent = pipe_count;
    }

    PlacePipe();

    if(isHouseConnected == totalHouse || pipe_count == 0){
        isTimeBreak = true;
        var bonus = pipe_count * score_pipe_left;
        StopMusic(sound.music.bg1);

        if(isHouseConnected == totalHouse){
            PlayWink();
        }else{
            PlayBad();
        }

        setTimeout(function(){
            scoreCount.textContent = score_count + "  +" + bonus;
            score_count = score_count + bonus;
        }, 1100);
        setTimeout(function(){
            scoreCount.textContent = score_count;    
            AnimateWater(); 
        }, 2000);

        //InitEnvironment();
        //NewGame();
    }
}

function PlacePipe(){
    if(pipe_count != 0){
        curr = board[third[0]][third[1]];
        if(first == "bottom"){
            if(second == "right"){
                prev = board[third[0]][third[1]-1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe3.html;

                    
            }else if(second == "left"){
                prev = board[third[0]][third[1]+1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe4.html;

            }else if(second == "bottom"){
                prev = board[third[0]-1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe2.html;

            }else if(second == "top"){
                
            }else{
                console.log("bottom error");
            }
        }else if(first == "top"){
            if(second == "right"){
                prev = board[third[0]][third[1]-1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe6.html;

            }else if(second == "left"){
                prev = board[third[0]][third[1]+1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe5.html;

            }else if(second == "bottom"){
                
            }else if(second == "top"){
                prev = board[third[0]+1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe2.html;

            }else{
                console.log("top error");
            }
        }else if(first == "right"){
            if(second == "right"){
                prev = board[third[0]][third[1]-1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.pipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe1.html;

                console.log("err");
            }else if(second == "left"){
                
            }else if(second == "bottom"){
                prev = board[third[0]-1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.pipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe5.html;

            }else if(second == "top"){
                prev = board[third[0]+1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.pipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe4.html;

            }else{
                console.log("right error");
            }
        }else if(first == "left"){
            if(second == "right"){
                
            }else if(second == "left"){
                prev = board[third[0]][third[1]+1];
                curr.obj.innerHTML = pipes.pipe1.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[0].html;
                else
                    prev.obj.innerHTML = pipes.pipe1.html;

            }else if(second == "bottom"){
                prev = board[third[0]-1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe6.html;

            }else if(second == "top"){
                prev = board[third[0]+1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                else
                    prev.obj.innerHTML = pipes.pipe3.html;

            }else{
                console.log("left error");
            }
        }else{
            prev = board[third[0]-1][third[1]];
                curr.obj.innerHTML = pipes.pipe2.html;
                curr.isPipe = true;

                if(prev.isHouse)
                    prev.obj.innerHTML = houses[1].html;
                 else
                    prev.obj.innerHTML = pipes.pipe2.html;

            console.log("first error");
        } 
        track.push(prev);
        pipe_count--;
        Update();
    }
    console.log("you've click the right block");
}