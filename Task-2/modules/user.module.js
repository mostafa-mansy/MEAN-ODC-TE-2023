heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal.module")
const fs = require("fs")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null)     user[head.key]= head.default
                
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }
    static showAll(view){
        view = deal.readFromJson("data.json")
        console.log(view);
// run tamm
        /* console.log(require('../data.json')) */
// run tamm
/*         fs.readFile('data.json', (err, data) => {
            if (err) throw err;
            let student = JSON.parse(data);
            console.log(student);
        }); */
    }
    static showSingle(showdata,idnum){
        showdata = deal.readFromJson("data.json")
 /*        showdata.forEach(
            (idnum=showdata.id) ? console.log(showdata.id) : console.log("Not Found")
        ) */
/*           for(let sunm in showdata){
            (showdata.id=idnum) ? console.log(showdata) : console.log("Not Found")
          }  */ 
/*           let viewSingle = showdata.find(id => (idnum=showdata.id) ? console.log(showdata['idnum']) : console.log("Not Found")
          )  
          console.log(viewSingle) */
          
/*           showdata.forEach( id => {
            
            (idnum=showdata.id) ? console.log(showdata) : console.log("Not Found")
            
        })  */
          showdata.find(
            (el)=> (el.id===idnum)? console.log(el) : null
          )
 

    }
    static edit(){}
    static del(){}
}

module.exports = User