const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const count = counter(data);
    console.log('File contents:', count);
  });

const counter = (data)=>{
    data = data.trim();
    let words = data.split(/\s+/);
    words = words.filter((word)=> word !== '' );
    return words.length;
}