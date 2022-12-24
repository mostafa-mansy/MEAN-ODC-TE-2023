heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal.module")
const fs = require("fs")
const AllData = deal.readFromJson("data.json")

// const editJsonFile = require("edit-json-file")

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
        view = AllData
        console.log(view)
// run tamm
        /* console.log(require('../data.json')) */
// run tamm
/*         fs.readFile('data.json', (err, data) => {
            if (err) throw err;
            let student = JSON.parse(data);
            console.log(student);
        }); */
    }
    static showSingle(idnum){
       /* const showdata = deal.readFromJson("data.json") */
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
        AllData.find(
            (el)=> (el.id==idnum)? console.log(el) : null
          )
 

    }
    static edit(data){
/*         const newItem = {}
        let file = editJsonFile(`../data.json`);
       file.set("planet", "Earth");
       file.save()
       file = editJsonFile(`../data.json`, {autosave: true });
        

           AllData.push(file) */
/*         AllData.forEach(
            el => (el.name == nameUser)? null : el.name = nameUser
        ) */
        const editobj = AllData.filter(el => el.id == data.id ) 
        /* console.log(editobj[0].id)
        console.log(editobj) */

         const eldelete = AllData.filter( el => el.id!=data.id ) 
         deal.writeToJson(eldelete) 

        // const objIndex = AllData.findIndex((obj => obj.id == data.id))
        const newObj ={
                        id: (data.id)?data.id:editobj[0].id,
                        name: (data.name)?data.name:editobj[0].name,
                        age: (data.age)?data.age:editobj[0].age,
                        email: (data.email)?data.email:editobj[0].email,
                        status: (data.status)?data.status:editobj[0].status
                    } 
         const al = deal.readFromJson()
         al.push(newObj)
         deal.writeToJson(al)  
        // console.log (AllData[objIndex])
                    // console.log(objIndex)
/*           if(data.id != editobj[0].id) null
          if(data.name != editobj[0].name) console.log(data.name == editobj[0].name);
          if(data.age != editobj[0].age) data.age == editobj[0].age */
        //   console.log(editobj)
        //   console.log(AllData)

/*         const newObj =AllData.map((obj)=>{
            if(obj.id!=data.id){
                return {
                    ...obj,

                }
            }

          }) */
/*         console.log(newObj)
 */
           
/*             deal.writeToJson({...AllData,AllData[objIndex]: newObj})
 */        

/*             if(AllData.id == data.id) {

                deal.readFromJson().push(AllData[objIndex]= newObj)
            } */
             // Step 1



            
        

    }
    static del(id){
        const delel = AllData.filter((el)=> (el.id!=id) ) 
/*         function removeValue(value, index, arr) {
            // If the value at the current array index matches the specified value (2)
            if (value === 2) {
            // Removes the value from the original array
                arr.splice(index, 1);
                return true;
            }
            return false;
        }
        const fun = (value,Data)=>{
            data.f
        } */
        deal.writeToJson(delel)
        console.log(delel)
    }
}

module.exports = User