// var Platform = (function(api) {
    
//     function getAllPlatforms() {
    
//         var result = []
    
//         for(x = 0;x < api.data.length;x++)
//         {
//             result.push(api.data[x].platform)
//         }
//         return result
//     }
    
//     return { 
//        getAll: getAllPlatforms
//     };
// })(api);

// var video = document.querySelector("video");
// var source = document.querySelector("#url");

// function play() {
//     video.play();
// }

// function pause() {
//     video.pause();
// }

// function volumeUp() {
//     video.volume+=0.1;
// }

// function volumeDown() {
//     video.volume-=0.1;
// }

// function changeSource() {
//     source.setAttribute("src", "nuovoUrl");
//     video.load();
// }

var Player = (function() {

    var video = document.querySelector("#video");
    var url = document.querySelector("#url");
    
    function Play() {
    
        return video.play()
    }
    function Pause() {
    
        return video.pause()
    }
    function Up() {
        console.log(video.volume)
        if (video.volume < 0.9){
            video.volume+=0.1
        } 
        
    }
    function Down() {
        console.log(video.volume)
        if (video.volume > 0.1){
            video.volume-=0.1
        }
    }
    function Ok() {
        var source = document.getElementById('source');
        console.log(source)
        source.setAttribute('src', url.value)
        video.load();
        console.log(source)
        
        
    }
    
    return { 
       getPlay: Play, getPause: Pause, getUp: Up, getDown: Down, getOk: Ok
    };




})();

var App = (function(Player) {
    
    var Play = document.querySelector('#play')
    Play.addEventListener('click', Player.getPlay)
    var Pause = document.querySelector('#stop')
    Pause.addEventListener('click', Player.getPause)
    var Up = document.querySelector('#up')
    Up.addEventListener('click', Player.getUp)
    var Down = document.querySelector('#down')
    Down.addEventListener('click', Player.getDown)
    var Ok = document.querySelector('#ok')
    Ok.addEventListener('click', Player.getOk)

})(Player);