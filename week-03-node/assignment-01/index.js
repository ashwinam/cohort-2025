const fs = require('fs');
const {Command} = require('commander')

const program = new Command

program
    .name('counter')
    .description('Reads file and count the words from file')
    .version('0.8.0')

program.command('count')
    .description('read count of words')
    .argument('<file>', 'File for reading content')
    .action((file)=>{
        const content = fs.readFileSync(file, 'utf-8')

        console.log(`Total Word count is: ${content.split("\n").length}`);
    })

program.parse();

