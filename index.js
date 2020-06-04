function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = object.id;
    })
    .catch(function (error) {
      alert("error");
      let div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = error.message;
    });
}
