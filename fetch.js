// fetch("https://reqres.in/api/users").then((res) => res.json()).then((data) => console.log(data));

//fetch("https://reqres.in/api/users").then((res) => res.json()).then((data) => console.log(data.data[0].first_name));

//fetch("https://reqres.in/api/users").then((res) => res.json()).then((data) => console.log(data.data[0].first_name)).catch((err) => console.log(err));

/*
fetch("https://reqres.in/api/users").then((res) => res.json())
.then((data) => console.log(data.data[0].first_name))
.catch((err) => console.log(err));
*/

/*
fetch("https://reqres.in/api/users/")
.then((res) => res.json())
.then((data) => console.log(data.data[0].first_name))
.catch((err) => console.log(err));


fetch("https://reqres.in/api/users", {
    method: "POST",
    body: {
        name: "Eduardo",
    },
})
.then((res) => res.json())
.then((data) => console.log(data));
*/


fetch("https://reqres.in/api/users/")
.then((res) => res.json())
.then((data) => console.log(data.data[0].first_name))
.catch((err) => console.log(err));


fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Eduardo",
    }),
})
.then((res) => res.json())
.then((data) => console.log(data));