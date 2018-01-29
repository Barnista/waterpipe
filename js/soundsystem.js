var sound = {
    button: {
        click1: new Audio('res/aud/click.wav'),
    },
    pipe: {
        construct1: new Audio('res/aud/tube1.mp3'),
        construct2: new Audio('res/aud/tube2.mp3'),
        water: new Audio('res/aud/water.mp3')
    },
    narration:{
        very_good: new Audio(''),
        not_bad: new Audio(''),
        try_harder: new Audio('')
    },
    special:{
        wink: new Audio('res/aud/lasthouse.mp3'),
        bad: new Audio('res/aud/fail.mp3'),
        scoreboard: new Audio('res/aud/scoreboard.mp3'),
        star: new Audio('res/aud/star.mp3')
    },
    music:{
        bg1: new Audio('res/aud/BGM.mp3'),
        bg2: new Audio('')
    }
};

function PlaySFX(sfx){
    sfx.play();
}

function StopSFX(music){

}

function PlayMusic(music){
    if(isTimeBreak == false){
        music.play();
        setTimeout(function(){
            PlayMusic(music);
        }, music.duration * 1000);
    }
}

function PauseMusic(music){

}

function StopMusic(music){
    music.pause();
    music.currentTime = 0;
}

function PlayWater(){
    sound.pipe.water.play();
}

function StopWater(){

}

function PlayButton(){
    var sfx = sound.button.click1;
    sfx.play();
}

function PlayPipe(){
    var sfx;
    var ran = Random(1, 2);
    if(ran == 1){
        sfx = sound.pipe.construct1;
    }else{
        sfx = sound.pipe.construct2;
    }
    sfx.play();
}

function PlayWink(){
    var sfx = sound.special.wink;
    sfx.play();
}

function PlayBad(){
    var sfx = sound.special.bad;
    sfx.play();
}