var pipes = {
    pipe1: {
        html: '<img class="block" src="res/pip/Left-Right.png">',
        name: "pipe1",
        water: '<img class="block" src="res/pip/Left-Right1.png">'
    },
    pipe2: {
        html: '<img class="block" src="res/pip/Top-Down.png">',
        name: "pipe2",
        water: '<img class="block" src="res/pip/Top-Down1.png">'
    },
    pipe3: {
        html: '<img class="block" src="res/pip/Top-Right.png">',
        name: "pipe3",
        water:'<img class="block" src="res/pip/Top-Right1.png">'
    },
    pipe4: {
        html: '<img class="block" src="res/pip/Top-Left.png">',
        name: "pipe4",
        water:'<img class="block" src="res/pip/Top-Left1.png">'
    },
    pipe5: {
        html: '<img class="block" src="res/pip/Left-Down.png">',
        name: "pipe5",
        water:'<img class="block" src="res/pip/Left-Down1.png">'
    },
    pipe6: {
        html: '<img class="block" src="res/pip/Right-Down.png">',
        name: "pipe6",
        water:'<img class="block" src="res/pip/Right-Down1.png">'
    }
};

var houses = [
    {
        html: '<img class="block house" src="res/Idle1-1.png">',
        name: "house1",
        anim_idle1: '<img class="block house" src="res/Idle1-1.png">',
        anim_idle2: '<img class="block house" src="res/Idle1-2.png">'

    },
    {
        html: '<img class="block house" src="res/Idle2-1.png">',
        name: "house2",
        anim_idle1: '<img class="block house" src="res/Idle2-1.png">',
        anim_idle2: '<img class="block house" src="res/Idle2-2.png">'
    }

];

var walls = [
    {
        html: '<img class="block house" src="res/env/Ob2.png">',
        name: "wall1"
    },
    {
        html: '<img class="block house" src="res/env/Ob1.png">',
        name: "wall2"
    },
    {
        html: '<img class="block house" src="res/env/Ob3.png">',
        name: "wall3"
    }
];

var items = {
    extra_pipe: {
        html: '<img class="block house" src="res/Item1.png">',
        name: 'extra_pipe'
    },
    dead_end: {
        html: '<img class="block house" src="res/Gave1.png">',
        name: 'dead_end'
    }
};

var stars = ["res/str/star-dim.png", "res/str/star-bright.png"];

var temp_score;
var board = [];
var house_pos = [], wall_pos = [], item_pos = [];
var track = [];

var pipe_count = 20;
var row = 8;
var column = 8;
var start_column = 1;

var first = "";
var second = "bottom";
var third = [0,1];

var level = 3;
var score_count = 0;
var score_add_house = 100;
var score_pipe_left = 100;
var isHouseConnected = 0;
var totalHouse = 0;
var promise_score = 0;

var pipe_item = 0;
var pipe_point = 5;

var second = 0, def_second = 30;
var isTimeBreak = true;
var isRetry = false;

var layout = document.querySelector("#game-table");
var pipeCount = document.querySelector("#pipe-count");
var scoreCount = document.querySelector("#score-count");
var timeout = document.querySelector("#timeout");
var scoreBoard = document.querySelector("#score-board");
var gameBoard = document.querySelector("#game-board");
var retryButton = document.querySelector("#retry-button");
var newButton = document.querySelector("#new-button");
var scoreCountBoard = document.querySelector("#score-count-board");
var retryCountBoard = document.querySelector("#retry-count-board");
var starGroup = document.querySelectorAll(".star");
var admireLab = document.querySelector("#admire-lab");
var genButton = document.querySelector("#gen-button");
var inputRow = document.querySelector("#input-row");
var inputColumn = document.querySelector("#input-col");

var gridRow;

var x=0;
var curr, prev;

function Random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}