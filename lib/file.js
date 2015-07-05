var
	fs = require('fs'),
	process = require('child_process');

//创建路径,不存在自动创建
//传入路径必须：'/'或者'\\'
function createDir(path, callback) {
	path = path.replace(/\/$||\\$/g, '');
	console.log('文件夹创建！' + path);
	if (typeof callback == 'function') {
		process.exec('md ' + path.replace(/\//g, '\\'), function (err, out, stderr) {
			callback(err, out, stderr);
		});
	} else {
		return process.execSync('md ' + path.replace(/\//g, '\\'));
	}
	//fs.mkdirSync(path);
}

//删除路径
//kill：是否强制删除
function removeDir(path, kill, callback) {
	var
		com = kill ? 'rd/s/q' : 'rd';
	if (typeof callback == 'function') {
		process.exec(com + path.replace(/\//g, '\\'), function (err, out, stderr) {
			callback(err, out, stderr);
		});
	} else {
		return process.execSync(com + path.replace(/\//g, '\\'));
	}  
}
module.exports = (function () {
	return {
		writeFile: writeFile,
		readFile: readFile,
		createDir: createDir,
		removeDir: removeDir
	}
})();