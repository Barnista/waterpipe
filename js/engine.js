

retryButton.addEventListener("click", Retry);
newButton.addEventListener("click", New);
genButton.addEventListener("click", Gen);

NewGameNow();
//countDownTime();
animTime();

function Gen(){
    PlayButton();
    row = Number(inputRow.value);
    column = Number(inputColumn.value);
    isRetry = false;
    NewGameNow();
}

function Retry(){
    PlayButton();
    isRetry = true;
    NewGameNow();
}

function New(){
    PlayButton();
    isRetry = false;
    NewGameNow();
}

function NewGameNow(){
    score_count = 0;

    InitEnvironment(row, column);

    NewGame();

    PlayMusic(sound.music.bg1);
}

function InitEnvironment(r, c){
    LayoutSetup(r, c)
    start_column = 1;
    first = "";
    second = "bottom";
    third = [0,1];
    score_add_house = 100;
    score_pipe_left = 100;
    isHouseConnected = 0;
    totalHouse = 0;
    promise_score = 0;

    isTimeBreak = false;

    second = def_second;
    track = [];

    scoreBoard.classList.add("collapse");
    gameBoard.classList.remove("collapse");

    starGroup[0].setAttribute("src", stars[0]);
    starGroup[1].setAttribute("src", stars[0]);
    starGroup[2].setAttribute("src", stars[0]);

    temp_score = 0;
}

function NewGame(){
    BuildGrid();

    board = [];
    var n;
    gridRow = layout.querySelectorAll("tr");

    for(var x=0; x < gridRow.length; x++){
        board[x] = [];

        n = gridRow[x].querySelectorAll("td").length;

        for(var y=0; y < n; y++){
            var temp = gridRow[x].querySelectorAll("td")[y];
            board[x][y] = {
                obj: temp,
                block: "grass",
                isPipe: false,
                isBorder: false,
                isWall: false,
                isHouse: false,
                isItem: false
            };
        }

    }

    BuildBoard();
}

function RandomHouse(){
    for(var z=0; z < pipe_item; z++){
        item_pos[z] = {};
        item_pos[z].row = Random(1, row-2);
        item_pos[z].column = Random(1, column-2);

        var r = item_pos[z].row;
        var c = item_pos[z].column;

        board[r][c].isItem = true;
        board[r][c].isWall = false;
        board[r][c].isHouse = false;

        board[r][c].obj.innerHTML = items.extra_pipe.html;

        board[r][c].obj.classList.remove("house");
        board[r][c].obj.classList.remove("wall");
    }
    for(var y=0; y <= level * 2 + 2; y++){
        wall_pos[y] = {};
        wall_pos[y].row = Random(2, row-3);
        wall_pos[y].column = Random(2, column-3);
        
        var r = wall_pos[y].row;
        var c = wall_pos[y].column;
        board[r][c].obj.classList.add("wall");
        board[r][c].obj.classList.remove("house");

        board[r][c].isItem = false;
        board[r][c].isWall = true;
        board[r][c].isHouse = false;

        var random_wall = Random(0, 2);

        board[r][c].obj.classList.remove("playable");
        board[r][c].obj.innerHTML = walls[random_wall].html;
    }
    for(var x=0; x <= level; x++){
        house_pos[x] = {};
        house_pos[x].row = Random(2, row-2);
        house_pos[x].column = Random(2, column-2);

        var r = house_pos[x].row;
        var c = house_pos[x].column;

        board[r][c].isItem = false;
        board[r][c].isWall = false;
        board[r][c].isHouse = true;

        var random_house = Random(0, 1);
        board[r][c].obj.innerHTML = houses[random_house].html;

        board[r][c].obj.classList.add("house");
        board[r][c].obj.classList.remove("wall");
    }

}

function RebuildHouse(){
    for(var z=0; z < item_pos.length; z++){
        var r = item_pos[z].row;
        var c = item_pos[z].column;

        board[r][c].isItem = true;
        board[r][c].isWall = false;
        board[r][c].isHouse = false;

        board[r][c].obj.innerHTML = items.extra_pipe.html;

        board[r][c].obj.classList.remove("house");
        board[r][c].obj.classList.remove("wall");
    }
    for(var y=0; y < wall_pos.length; y++){

        var r = wall_pos[y].row;
        var c = wall_pos[y].column;
        board[r][c].obj.classList.add("wall");
        board[r][c].obj.classList.remove("house");

        board[r][c].isItem = false;
        board[r][c].isWall = true;
        board[r][c].isHouse = false;

        var random_wall = Random(0, 2);

        board[r][c].obj.classList.remove("playable");
        board[r][c].obj.innerHTML = walls[random_wall].html;
    }
    for(var x=0; x < house_pos.length; x++){

        var r = house_pos[x].row;
        var c = house_pos[x].column;

        board[r][c].isItem = false;
        board[r][c].isWall = false;
        board[r][c].isHouse = true;

        var random_house = Random(0, 1);
        board[r][c].obj.innerHTML = houses[random_house].html;

        board[r][c].obj.classList.add("house");
        board[r][c].obj.classList.remove("wall");
    }
}

function BuildGrid(){
    var ccolumn = "<td></td>";

    var rrow = "<tr>" + ccolumn.repeat(column) + "</tr>";

    var result = rrow.repeat(row);

    layout.innerHTML = result;
}

function BuildBoard(){
    border = [];
    if(isRetry == false){
        RandomHouse();
    }else{
        RebuildHouse();
    }

    for(var x=0; x < board.length; x++){
        for(var y=0; y < board[x].length; y++){
            if(x == 0 || x == board.length - 1 || y == 0 || y == board[x].length - 1){
                board[x][y].obj.classList.add("border");
                board[x][y].isBorder = true;
            }else{
                board[x][y].obj.classList.add("grass");
                if(board[x][y].isHouse == true){
                    totalHouse++;
                }
            }

            board[0][1].obj.classList.add("grass");
            
            if(board[x][y].isWall == true || board[x][y].isBorder){

            }else{
                board[x][y].obj.addEventListener("click", SetupPipe);
                board[x][y].obj.classList.add("playable");
            }
        }
    }
    
    promise_score = totalHouse * 100;
    Update();
}

function Update(){
    board[0][1].obj.innerHTML = pipes.pipe2.html;
    board[0][1].pipe = "pipe2";
    board[0][1].obj.classList.add("start-pipe");
    pipeCount.textContent = pipe_count;
    scoreCount.textContent = score_count;
}

function LayoutSetup(r, c){
    if(row < 7){
        row = 7;
    }else{
        try{
            row = Number(r);
        }catch(ex){

            row = 8;
        }
    } inputRow.value = row;
    if(column < 7){
        column = 7;
    }else{
        try{

            column = Number(c);
        }catch(ex){
            column = 8;
        }
    } inputColumn.value = column;

    level = Math.ceil(Math.sqrt(r * c) / 2);
    pipe_count = level * 3;
    pipe_point = Math.floor(level * 1.5);
    pipe_item = Math.floor(level / 2);
}