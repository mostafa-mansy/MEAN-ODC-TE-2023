const user = require("./modules/user.module")
const yargs = require('yargs')
yargs.command({
    command:"add",
    builder:{
/*         const fs = require("fs")
        fs.writeFileSync("data.json", "argv") */
    },
/*     builder: {
        fNum: {
            describe: 'First Number',
            demandOption: true,  // Required
            type: 'number'     
        },
        sNum: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    }, */
    handler: function(argv){
/*         const fs = require("fs")
        fs.writeFileSync("data.json", argv) */
        user.add(argv)
       /*  console.log("Result:", (argv.fNum+argv.sNum)) */
        
    }
})
 yargs.command({
    command:"showAll",
    handler: function(argv,id){
        user.showAll(argv,id)
    }
})



yargs.command({
    command:"showSingle",
    builder: { id: {demandOption: true }},
    
    handler: function(argv){
        user.showSingle(argv,argv.id)
/*         console.log(argv.id);
 */    }
})/*
yargs.command({
    command:"edit",
    handler: function(argv){
        user.edit()
    }
})
yargs.command({
    command:"del",
    handler: function(argv){
        user.del()
    }
}) */
yargs.argv


const name = "heelo word"
console.log(name);