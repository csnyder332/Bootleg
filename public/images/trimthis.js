const sharp = require("sharp")
sharp("./me-programming.png")
  .resize(20, 20,{fit:'fill'})
  .toFile('output.png', function(err) {
  });