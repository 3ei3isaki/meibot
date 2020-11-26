module.exports = function () {
     var sec = 0;
     var min = 0;
     var hours = 0;

     setInterval(function () {
          sec += 1;
          if (sec == 60) {
               min += 1;
               sec = 0;
          }
          if (min == 60) {
               hours += 1;
               min = 0;
          }
          return uptime = (hours > 9 ? hours : '0' + hours) + ' giờ ' + (min > 9 ? min : '0' + min) + ' phút ' + (sec > 9 ? sec : '0' + sec) + ' giây'
     }, 1000)
     console.log('- upTime function is Active!');
}
