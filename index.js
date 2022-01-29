document.getElementById("btn1").onclick = function(){
    const url= 'https://jsonplaceholder.typicode.com/users/'
                +document.getElementById("id").value;
fetch(url)
    .then((Response) => {
        if(Response.ok){
            return Response.json()}
        else
            throw "Hibás id!"
    })
    .then(json => 
        document.getElementById("nev").innerHTML = json.name + "<br>"+json.email)
    .catch((err) => document.getElementById("nev").innerHTML= err);
}
document.getElementById("btn2").onclick = function(){
    const url= 'https://jsonplaceholder.typicode.com/users/';
    const lista= document.getElementById("lista");
    fetch(url)
    .then((Response) => Response.json())
    .then(json => {
        lista.innerHTML ="";
        json.forEach(f => {
            lista.innerHTML+= "<li>"+f.name+"</li>"
        });
    })
    .catch((err) => console.log(err))
}
document.getElementById("btn3").onclick = function(){
    const url= 'https://jsonplaceholder.typicode.com/users/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name: document.getElementById("ujnev").value
        })
    })
    .then((Response) => Response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

document.getElementById("btn4").onclick = function(){
    const url= 'https://jsonplaceholder.typicode.com/users/' + document.getElementById("id").value;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name: document.getElementById("ujnev").value
        })
    })
    .then((Response) => Response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
document.getElementById("btn4").onclick = function(){
    const url= 'https://jsonplaceholder.typicode.com/users/' + document.getElementById("id").value;
    fetch(url, {
        method: 'DELETE'
    })
    .catch(err => console.log(err));
}
