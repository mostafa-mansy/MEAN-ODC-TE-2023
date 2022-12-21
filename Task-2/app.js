const user = require("./modules/user.module")
const yargs = require('yargs')
yargs.command({
    command:"add",
/*    builder:{
         const fs = require("fs")
        fs.writeFileSync("data.json", "argv") 
    },*/
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
    handler: function(argv){
        user.showAll(argv)
    }
})
yargs.command({
    command:"showSingle",
    builder: { id: {demandOption: true }},
    
    handler: function(argv){
        user.showSingle(argv.id)
/*         console.log(argv.id);
 */    }
})
yargs.command({
    command:"edit",
/*     builder: { name: {demandOption: true }}, */
    handler: function(argv){

        user.edit(argv)
    }
})
yargs.command({
    command:"del",
    builder: { id: {demandOption: true }},
    handler: function(argv){
        user.del(argv.id)
    }
}) 
yargs.argv


const name = "heelo word"
console.log(name);