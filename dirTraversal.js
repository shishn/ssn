var fs = require('fs');

/*
递归处理文件,文件夹

path 路径
floor 层数
handleFile 文件,文件夹处理函数
*/
//var EventEmitter = require('events').EventEmitter;   
// var ee = new EventEmitter();

function Traversal(path, floor, handleFile){
	//handleFile(path, floor,false);
	//floor++;
	fs.readdir(path, function(err, files) {
		if (err) {
			console.log('read dir error');
		} else {
			handleFiles(files,floor,path,handleFile);
		}
	});
	
}
function handleFiles(files,floor,path,handleFile) {
	var length=files.length;;
	for(index=0;index<length;index++)
	{
		var tmpPath = path + '/'+files[index];
		handleFile(tmpPath,floor,index==length-1?true:false);
	}
files.forEach()
{

}
/*	files.forEach(function(item) {
				var tmpPath = path + '/' + item;
				fs.stat(tmpPath, function(err1, stats) {
					if (err1) {
						console.log('stat error');
					} else {
						if (stats.isDirectory()) {
							Traversal(tmpPath, floor, handleFile);
						} else {
							handleFile(tmpPath, floor);
						}
						handleFile(tmpPath, floor);
					}
				})
			});*/
}
exports.Traversal = Traversal;