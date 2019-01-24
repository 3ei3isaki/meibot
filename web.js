module.exports = (express, app, neko) => {
  const song = require('./DATA/Playlist.json');

  console.log('- WEB_CLIENT is Active!');
  /*----------------------------------------------*/
  /*---------------------Setup--------------------*/
  /*----------------------------------------------*/

  app.listen(process.env.PORT || 3000)
  app.set('view engine', 'ejs')
  app.set('views', './WEB')
  app.use(express.static('WEB'))

  /*----------------------------------------------*/
  /*----------------------GET---------------------*/
  /*----------------------------------------------*/

  app.get('/', function (req, res) {
    res.render('home')
  })

  app.get('/audio', function (req, res) {
    res.render('audio')
  })

  app.get('/3ei3isaki', (req, res) => {
    res.render('profile');
  });

  /*----------------------------------------------*/
  /*--------------------POST----------------------*/
  /*----------------------------------------------*/

  app.post('/_neko_url', function (req, res) {
    req.on('data', function (data) {
      let neko_type = `${data}`;

      switch (neko_type) {
        case 'hug':
          neko.getSFWHug().then(url => {
            res.send(url.url);
          });
          break;
        case 'baka':
          neko.getSFWBaka().then(url => {
            res.send(url.url);
          });
          break;
        case 'meow':
          neko.getSFWMeow().then(url => {
            res.send(url.url);
          });
          break;
        case 'slap':
          neko.getSFWSlap().then(url => {
            res.send(url.url);
          });
          break;
        case 'pat':
          neko.getSFWPat().then(url => {
            res.send(url.url);
          });
          break;
        case 'neko':
          neko.getSFWNeko().then(url => {
            res.send(url.url);
          });
          break;
        case 'nekogif':
          neko.getSFWNekoGif().then(url => {
            res.send(url.url);
          });
          break;
        case 'foxgirl':
          neko.getSFWFoxGirl().then(url => {
            res.send(url.url);
          });
          break;
        case 'feed':
          neko.getSFWFeed().then(url => {
            res.send(url.url);
          });
          break;
        case 'kemonomimi':
          neko.getSFWKemonomimi().then(url => {
            res.send(url.url);
          });
          break;
        case 'holo':
          neko.getSFWHolo().then(url => {
            res.send(url.url);
          });
          break;
        case 'tickle':
          neko.getSFWTickle().then(url => {
            res.send(url.url);
          });
          break;
        case 'kiss':
          neko.getSFWKiss().then(url => {
            res.send(url.url);
          });
          break;
        case 'smug':
          neko.getSFWSmug().then(url => {
            res.send(url.url);
          });
          break;
        case 'cuddle':
          neko.getSFWCuddle().then(url => {
            res.send(url.url);
          });
          break;
      }
    });
  });

  app.post('/_neko_text', (req, res) => {
    neko.getSFWCatText().then(text => {
      res.send(text.cat);
    });
  });

  app.post('/_get_playlist', (req, res) => {
    req.on('data', (data) => {
      res.send(song[`${data}`]);
    });
  });

  /*----------------------------------------------*/
  /*--------------------POST----------------------*/
  /*----------------------------------------------*/

  app.get("*", function (req, res) {
    res.send("Phá hả mạy");
  });
}