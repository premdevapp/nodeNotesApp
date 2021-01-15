/* const fs = require("fs");
fs.writeFileSync("notes.txt", "My Name is Premnath", "utf8");
fs.appendFileSync("notes.txt", "\nMy Name is Premnath Pichaimuthu", "utf8");
 */

/* 
const util = require("./utils");
console.log(util.name.toString().padStart(5, "0"));
console.log("-".repeat(150));

console.log(util.add(1, 2));
*/

const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const util = require("./notes1");

console.log("-".repeat(150));

console.log(chalk.green.inverse(validator.isAlpha("process.argv")));
console.log(chalk.green(process.argv));
console.log(chalk.yellow(JSON.stringify(argv)));

console.log("-".repeat(150));

//customize version
argv.version("1.1.0");

//add, remove, list, read

//add
yargs.command({
  command: "add",
  describe: "Add a new Note",
  handler() {
    console.log("adding a note");
  },
});

yargs(hideBin(process.argv))
  .command("add", "add a note", () => {
    console.log("adding a note");
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Add a new Note",
  }).argv;

const command = process.argv[2];

if (command === "add") {
  const userEnter = util.getNotes();

  userEnter.then((data) => console.log(chalk.white.bgGreen.bold(data)));
} else if (command === "remove") {
  console.log(chalk.white.bgRed.bold("removing"));
}

/*
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .argv

*/
