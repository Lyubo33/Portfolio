const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../public/robots.txt');
const dest = path.resolve(__dirname, '../dist/robots.txt');

fs.copyFileSync(source, dest);

console.log('robots.txt copied to dist');
