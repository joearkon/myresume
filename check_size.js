import fs from 'fs';
const stats = fs.statSync('public/avatar.jpg');
console.log('Size:', stats.size);
