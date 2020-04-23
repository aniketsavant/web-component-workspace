const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const prgmName = process.argv.slice(2)[0];
    if(prgmName === '' || prgmName === undefined) {
        console.log('project name required as a argument...!!!');
        return false;
    } else {
        const files_es2015 = [
            './dist/' + prgmName + '/polyfill-webcomp-es5.js',
            './dist/' + prgmName + '/polyfill-webcomp.js',
            './dist/' + prgmName + '/polyfills-es2015.js',
            './dist/' + prgmName + '/scripts.js',
            './dist/' + prgmName + '/main-es2015.js',
        ]
        await fs.ensureDir('./dist/' + prgmName + '/elements');
        await concat(files_es2015, './dist/' + prgmName + '/elements/' + prgmName + '-elements-es2015.js');

        const files_es5 = [
            './dist/' + prgmName + '/polyfill-webcomp-es5.js',
            './dist/' + prgmName + '/polyfill-webcomp.js',
            './dist/' + prgmName + '/polyfills-es5.js',
            './dist/' + prgmName + '/scripts.js',
            './dist/' + prgmName + '/main-es5.js',
        ]
        await fs.ensureDir('./dist/' + prgmName + '/elements');
        await concat(files_es5, './dist/' + prgmName + '/elements/' + prgmName + '-elements-es5.js');

        console.log('Done generating bundles for ' + prgmName);
    }
})()