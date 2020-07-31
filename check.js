var http= require('http');
//Import file system
var fs=require('fs');

//Import Custom Library
var datelib=require('./soniyalib')

//Append the file
// fs.appendFile('fedor.txt','Welcome Fedor!!!',function(err){
//   if(err){
//   throw err;
// }
//   console.log("File is saved");
// })

//Open the file
fs.open('fedor.txt','w',function(err){
  if(err){
  throw err;
}
  console.log("File is opened");
})
//
// fs.writeFile('fedor.txt','Hello Writing into file',function(err){
//   if(err){
//   throw err;
// }
//   console.log("Writefile");
// })
//
// fs.appendFile('fedor.txt','Welcome Fedor!!!',function(err){
//   if(err){
//   throw err;
// }
//   console.log("Append file");
// })


//
// fs.rename('fedor.txt','fileOperations.txt',function(err){
//   if(err){
//   throw err;
// }
// console.log("file is renamed");
//
// })


fs.unlink('fileOperations.txt',function(err){
  if(err){
  throw err;
}
console.log("file is deleted");

})

var server = http.createServer(function (req,res){
  // res.end('welcome');
  // res.end("fedor");


// fs.readFile('readFile.html',function(err,data){
//   //URL
//   res.writeHead(200,{'Content-Type':'text/html'})
//   res.write(data);
//   res.end();
// })
// fs.readFile('fileOperations.txt',function(err,data){
//   //URL
//   res.writeHead(200,{'Content-Type':'text/plain'})
//   res.write(data);
//   res.end();
// })


  //Custom library
  // res.write(datelib.soniyalib());
//res.write("hello fedor");




//URL
// res.write(req.url);





}).listen(3000,function(req,res){
  console.log("hello");
  });

//Listen to  port
// server.listen(3000,function(req,res){
//   console.log("hello");
// });
