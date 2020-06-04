// Add your code here
let body = document.querySelector("body")


function submitData(str1, str2) {
    let formData = {
        name: str1,
        email: str2
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)  
    };

    return fetch("http://localhost:3000/users", configObj) 
    .then((resp) => resp.json())
    .then((json) => {
        body.innerHTML = json["id"],
        console.log(json["id"])
    })
    .catch((error) => {
        alert(error.message)
        body.innerHTML = error.message
    })

};
    


