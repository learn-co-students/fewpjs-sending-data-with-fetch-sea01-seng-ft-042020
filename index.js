// Add your code here
function submitData(str1, str2){
    let formData = {
        name: str1,
        email: str2
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
      console.log(object.id);
      document.body.innerHTML = object.id
    })
    .catch(function(error) {
      alert(error.message);
      console.log(error.message);
      document.body.innerHTML = error.message
    });
}