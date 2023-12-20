console.log("Gichia")
setTimeout(() => {
    console.log("Muiruri")
}, 3000)

console.log("Muiruri")
console.log("Bill")

// setTimeout(callback, timer)

let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let x = 10

        if(x ===7){
            resolve("Data fetched")
        }
        else{
            reject("something went wrong")
        }
    }, 2000)
})

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

document.getElementById('addItemButton').addEventListener('click', displayList)

function displayList(){
    //get input from shopping list
    let newItem =document.getElementById('newItem').value;
    //create nodes
    let list =document.createElement('li')
    //create text node with the input from the user
    let textNode =document.createTextNode(newItem)
    //attach the text node to the list
    list.appendChild(textNode)
    //append my list to the UL element
    document.getElementById('shoppingList').appendChild(list)
    //clear nodes
    document.getElementById('newItem').value ='';
}