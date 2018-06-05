const Multer = require('multer');

const multer = Multer({
  storage: Multer.memoryStoragem,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
}).any();

module.exports = {
  multer
}