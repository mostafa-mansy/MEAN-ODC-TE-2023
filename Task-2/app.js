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

/* 
[
    {"id":1670265174675,"name":"mostafa","age":22,"email":"mosta@gmail.com","status":false},
    {"id":1670265323811,"name":"mouse","age":25,"email":"mostasdgfsdgs@gmail.com","status":false},
    {"id":1670278096030,"name":"vevo","age":28,"email":"mosta@gmail.com","status":false},
    {"id":1671635211835,"name":"key","age":26,"email":"mecv@gmail.com","status":false},
    {"id":1671807202705,"name":"mdn","age":29,"email":"node@gmail.com","status":false}
] */

const name = "heelo word"
console.log(name);