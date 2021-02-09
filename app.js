// 简单音频合并 无其他操作 
//换成ffmpeg工具即ffmpeg-i xxx1.wav -i xx2.wav -filter_complex amix=inputs=2:duration=first:dropout_transition=2 -f wav remix.wav

var ffmpeg = require('fluent-ffmpeg');
const audio_urls = ['upload/Soprano.wav', 'upload/Bass.wav'];
const merged_file = 'upload/merged_file.wav';

ffmpeg()
      .input(audio_urls[0])
      .input(audio_urls[1])
      .complexFilter([
        {
           filter : 'amix', options: { inputs : 2, duration : 'longest' }
        }
      ])
      .on('end', async function (output) {
        console.log(output,'Files have been merged and saved.')
      })
      .saveToFile(merged_file)

// 以上为音频合并

var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var router = require('./router')
var bodyParser = require('body-parser')
var app = express()

var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 
        cb(null, file.fieldname+ '.wav');  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

// 单图上传
var cpUpload = upload.fields([
    {name:'workReference',maxCount:1},
    {name:'accompaniment',maxCount:1},
    {name:'voice1',maxCount:1},
    {name:'voice2',maxCount:1},
    {name:'voice3',maxCount:1}
    ])
// 多图上传
app.post('/upload', cpUpload, function(req, res, next){
     res.render('initiate.html');
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./views/form.html', {encoding: 'utf8'});
    res.send(form);
});

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
app.use('/upload/',express.static('./upload/'))
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(3000,function(){
	console.log('Your server 127.0.0.1:3000 is running')
})

module.exports = app