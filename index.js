function submitData(nameInput, emailInput){
    let formData = {
        name: nameInput,
        email: emailInput
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object.name)
            const element = document.createElement("p")
            element.innerHTML = `${object.id}`
            document.body.innerHTML = object.id
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
    });
}

submitData("Aidan", "MC")