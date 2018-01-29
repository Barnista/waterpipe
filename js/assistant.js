function HilightBlock(){
    for(var x=0; x < board.length; x++){
        for(var y=0; y < board[x].length; y++){
            board[x][y].obj.classList.remove("path");
        }
    }

    var x1 = third[0]+1;
    var x2 = third[0]-1;
    var x3 = third[0];
    var y1 = third[1]+1;
    var y2 = third[1]-1;
    var y3 = third[1];

    CreatePath(x1, y3);
    CreatePath(x2, y3);
    CreatePath(x3, y1);
    CreatePath(x3, y2);

    /*if(board[third[0]][third[1]-1].isBorder == false){
        board[third[0]][third[1]-1].obj.classList.add("path");
    }*/
}

function CreatePath(x, y){
    if(board[x][y].isWall == false || board[x][y].isBorder == false){
        board[x][y].obj.classList.add("path");
    }
}