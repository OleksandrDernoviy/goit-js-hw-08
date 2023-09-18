import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const TIME_KEY = 'videoplayer-current-time';
const player = new Player(iframe);


const onPlay = function (data) {
    localStorage.setItem(TIME_KEY, data.seconds)
};
player.on('timeupdate', throttle(onPlay, 1000));
    
let actualSeconds = JSON.parse(localStorage.getItem(TIME_KEY)) || 0;
console.log(actualSeconds);
const currentTimePlayer = player.setCurrentTime(actualSeconds);


// if (localStorage.getItem(TIME_KEY) !== null) {
//  console.log(localStorage.getItem(TIME_KEY));        
//  






