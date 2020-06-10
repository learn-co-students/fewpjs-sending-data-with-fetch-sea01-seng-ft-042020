// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(resp => resp.json())
        .then(obj => document.body.innerHTML = obj["id"])
        .catch(error => document.body.innerHTML = error.message);
};

function submitDataRobots(name, type) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            robotType: type
        })
    })
        .then(resp => resp.json())
        .then(obj => document.body.innerHTML = obj["id"])
        .catch(error => document.body.innerHTML = error.message);
};

function submitDataDogs(name, breed) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            dogName: name,
            dogBreed: breed
        })
    })
        .then(resp => resp.json())
        .then(obj => document.body.innerHTML = obj["id"])
        .catch(error => document.body.innerHTML = error.message);
};

function submitDataCats(name, breed) {
    return fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            catName: name,
            catBreed: breed
        })
    })
        .then(resp => resp.json())
        .then(obj => document.body.innerHTML = obj["id"])
        .catch(error => document.body.innerHTML = error.message);
};