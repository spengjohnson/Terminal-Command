const fs = require('fs'); 
var fileContent = "blahblahblah"; 

module.exports.ls = () => {
	fs.readdir('./', (err,files) => {
		const filesToString = files.reduce((acc, file) => {
			return `${acc} ${file}`; 
		}, ''); 
		console.log(filesToString); 
	}); 
}; 

module.exports.touch = () => {
	fs.writeFile('./', fileContent, (err) => {
		if (err) throw err; 
	});
	console.log('The file was made!');  
}; 

module.exports.mkdir = () => {
	fs.mkdir('./', [0o777], (err) => {
		if (err) throw err; 
	}); 
	console.log('Folder was made!'); 
}; 