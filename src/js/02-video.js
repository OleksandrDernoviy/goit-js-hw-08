import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const TIME_KEY = 'videoplayer-current-time';
// const setTime = localStorage.setItem('TIME_KEY', 'videoplayer-current-time')
const player = new Player(iframe);


// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
// player.on('play', onPlay);

// timeupdate
// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// })
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));

const onPlay = function (data) {
    localStorage.setItem(TIME_KEY, data.seconds)
};
player.on('timeupdate', throttle(onPlay, 1000));
    
const actualSeconds = JSON.parse(localStorage.getItem(TIME_KEY));
player.setCurrentTime(actualSeconds);










