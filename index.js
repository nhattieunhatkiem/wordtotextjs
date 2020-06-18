const {
	execFile
} = require('child_process');

class wordtotext {

	constructor() {

	}

	extractText(fileName) {
		return new Promise((resolve, reject) => {
			execFile('antiword', ['-m', 'UTF-8.txt', fileName, '-'], (error, stdout, stderr) => {
				if (!error) {
					var result = stdout.trim().replace(/\[pic\]/g, '');
					console.log('result: ', result);
					resolve(result);
				} else {
					throw error;
				}
			});
		});
	}
}