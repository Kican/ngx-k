const {execSync} = require("child_process");

const getLibraries = () => {
	return [
		'core',
		'components',
		'auth',
		'form-builder',
		'components-bootstrap',
		'form-builder-bootstrap',
	];
}
for (let library of getLibraries()) {
	try {
		console.log(`start building [${library}] ...`)
		execSync(`ng build --project ${library} --prod`)
		if (process.argv.includes('--install')) {
			console.log(`npm install [${library}] ...`)
			execSync(`npm i`)
		}
		if (process.argv.includes('--publish')) {
			console.log(`publishing package [${library}] ...`)
			execSync(`npm publish dist/${library} --access public`)
		}
	} catch (e) {
		console.error(e);
	}
}
