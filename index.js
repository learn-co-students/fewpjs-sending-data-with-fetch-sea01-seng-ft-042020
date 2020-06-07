// Add your code here
const USERS = "http://localhost:3000/users"
const BODY = document.querySelector("body")
function submitData(name, email) {
    
    return fetch(USERS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name, 
            email: email
        })})
    .then(res => res.json())
    .then(object => {
        let p = document.createElement("p")
        // console.log(object.id)
        p.textContent = `The id is: ${object.id}`
        BODY.appendChild(p)
    })
    .catch(error => {
        // alert("An error occured. Please try again.")
        let p = document.createElement("p")
        p.textContent = error.message
        BODY.appendChild(p)
    })
}