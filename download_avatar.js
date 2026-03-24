import fs from 'fs';
import https from 'https';

const url = "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESHMxpwjvhhDC6PAjXwWdxj19fXQOTOgACUSYAApbxEFbJ6jGpt4MkijoE.jpg";
const dest = "public/avatar.jpg";

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download completed.");
  });
}).on('error', (err) => {
  console.error("Error downloading file:", err);
});
