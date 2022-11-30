const dataFromUser = document.querySelector("#data-from-user");
const displayData = document.querySelector("#display")
const displayDataUl = document.querySelector("#display ul")

/* dataFromUser.addEventListener("submit", e => 
            e.preventDefault()
            console.log(e)) */


const readFromStorage = (itemKey="tasks",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}

const writeToStorage = (data,itemKey="tasks")=> 
                localStorage.setItem(itemKey, JSON.stringify(data))



let dataUser = ["UserName","Password","PhoneNumber"];
    dataFromUser.addEventListener("submit", (e)=>{
        e.preventDefault()
        
        const task = {}
        dataUser.forEach(h=> task[h]= dataFromUser.elements[h].value)
        
        const data = readDataFromStorage()
        data.push(task)
        writeDataToStorage(data)
        console.log(data);
    }) 


    const data = readFromStorage()

    data.forEach( d =>{
            
        const div = document.createElement("div")


        div.className = "close"
/*             const p = document.createElement("p")
        const p2 = document.createElement("p") */
        div.innerText = `UserName:     ${d.UserName} 
                            Password:     ${d.Password}   
                            PhoneNumber:  ${d.PhoneNumber}`
    
        displayData.appendChild(div)
        console.log(data);
        const newItem = document.createElement("button");

        newItem.innerHTML = `Delete`
        displayData.appendChild(newItem)
        /* button.addEventListener("submit",e=>{}) */
/*         newItem.setAttribute("id", "set");
 */

    })





/*       function removeItem() {
       document.getElementById("displayData").removeChild(this);
       saveList();
      } */

 /*              */

/*        function addItem() {
       const newItem = document.createElement("button");
       newItem.innerHTML = document.getElementById("box").value;
       newItem.onclick = removeItem;
       document.getElementById("displayData").appendChild(newItem);
       saveList();
      } */


