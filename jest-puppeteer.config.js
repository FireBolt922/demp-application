const fs = require('fs');

if (!fs.existsSync('__screenshots__')) {
  fs.mkdirSync('__screenshots__');
}

module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    slowMo: 100,
    args: ['--window-size=1920,1080'], // defines the screensize to take screenshot.
    defaultViewport: null,
    devtools: false,
  },
};
