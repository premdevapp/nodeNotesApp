const io = require("console-read-write");
let userInput;
const getNotes = async () => {
  io.write("please enter something?");
  userInput = await io.read();
  return new Promise((resolve, reject) => {
    resolve(`You entered : ${userInput}`);
  });
};

module.exports = { getNotes };
