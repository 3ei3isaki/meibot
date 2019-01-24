$(document).ready(() => {
  /*----------------------------------------------*/
  /*---------------------NEKO---------------------*/
  /*----------------------------------------------*/
  $('#_neko_next').click(() => {
    $.ajax({
      type: 'POST',
      url: '/_neko_text',
      success: data => {
        $('#_neko_text').text(data);
      },
      error: () => {
        $('#_neko_text').text('Error!');
      }
    });

    $.ajax({
      type: 'POST',
      url: '/_neko_url',
      data: $('input[name=neko]:checked').val(),
      beforeSend: () => {
        $('#_ajax_loader').show();
        $('#_ajax_loader_err').hide();
        $('#_main_neko_img_img').hide();
      },
      success: data => {
        $('#_main_neko_img_img').attr('src', data);
        $('#_neko_open_url').attr('href', data);
        setTimeout(() => {
          let now = new Date();
          let h = now.getHours();
          let m = now.getMinutes();
          let s = now.getSeconds();
          $('#_ajax_loader').hide();
          $('#_main_neko_img_img').show();
          $('#_neko_log').append(`<li>[${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}] [${$('input[name=neko]:checked').val().toUpperCase()}] <a href="${data}" target="_blank">.${data.slice(22, data.length)}</a></li>`)
        }, 1500);
        $('#_ajax_loader_err').hide();
      },
      error: () => {
        $('#_neko_log').append(`<li>ERROR!</li>`)
        $('#_main_neko_img_img').hide();
        $('#_ajax_loader_err').show();
        $('#_ajax_loader').hide();
      }
    });
  });
});

/*----------------------------------------------*/
/*----------------------YT----------------------*/
/*----------------------------------------------*/
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytEmbed', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

var xx = ['MT18gEKFQPc', 'ekH0dvybRAQ', 'JRQbVNzmCK0']

function onPlayerReady(event) {
  document.getElementById('ytEmbed').style.borderColor = '#3c7693';
  $(() => {
    $("#btn_choose").click(() => {
      $.ajax({
        type: 'POST',
        url: '/_get_playlist',
        data: $('input[name=playlist]:checked').val(),
        success: data => {
          player.loadPlaylist(data, Math.floor(Math.random() * data.length))
          alert(player.getVideoUrl())
        },
      });
    });
  });
}

function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "#3c7693"; // unstarted = gray
  } else if (playerStatus == 0) {
    color = "#ffff62"; // ended = yellow
  } else if (playerStatus == 1) {
    color = "#19aa4e"; // playing = green
  } else if (playerStatus == 2) {
    color = "#ff5252"; // paused = red
  } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
  } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
  }
  document.getElementById('ytEmbed').style.borderColor = color;
}

function playpause(value) {
  var play = document.getElementById("btn_stt");
  if (value == 1) {
    play.innerHTML = '<i class="fas fa-play"></i>  Playing';
  } else if (value == 2) {
    play.innerHTML = '<i class="fas fa-pause"></i>  Pause';
  } else if (value == -1) {
    play.innerHTML = '<i class="fas fa-times"></i>  Unstarted';
  } else if (value == 3) {
    play.innerHTML = '<i class="fas fa-spinner"></i>  Loading';
  } else if (value == 0) {
    play.innerHTML = '<i class="fas fa-pause"></i>  Endvid';
  }
};


function onPlayerStateChange(event) {
  changeBorderColor(event.data);
  playpause(event.data)
}