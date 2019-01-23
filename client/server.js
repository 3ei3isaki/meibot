module.exports = () => {
    /////////////////// Require Module ///////////////////
    
    const express = require('express');
    let app = express();

    //////////////////////// Code ////////////////////////

    // Lắng nghe cổng 3000
    app.listen(process.env.PORT || 3000); 
    console.log(`Server is running in port 3000`);

    // Thiết lập
    app.set('view engine', 'ejs');      // Đặt công cụ đọc cho express;
    app.set('views', './public');       // Đặt thư mục chính
    app.use(express.static('public'));  // Đặt thư mục dùng chung

    // Get rout
    app.get('/', (req, res) => {
        res.send('Hello');
    });

    // Post Rout
    app.post('/post', (req, res) => {
        res.send('Hola');
    });

    // Trả về error nếu ko tìm thấy Rout
    app.get('*', (req, res) => {
        res.send('404 Page not found!');
    });

    //////////////////////// End. ////////////////////////
};