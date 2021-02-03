let data = []
function getData(e){
    e.preventDefault()
    data = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        cel: document.getElementById("cel").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        notes: document.getElementById("notes").value,
    };
    console.log(data)
}

function toggleForm(){
    let flag = document.getElementById("form")
    if(flag.className == "modal"){
        flag.className = ""
    } else {
        flag.className = "modal"
    }
}
