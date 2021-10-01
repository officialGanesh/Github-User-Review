console.log("Review APP 🔥");

let btnSearch = document.getElementById("btnSearch");
let searchUser = document.getElementById("Search");
let avatar = document.getElementById("avatar");
let cardTitle = document.querySelector(".card-title");
let userID = document.querySelector("#userID");
let LogIN = document.querySelector("#LogIN");
let emailAddress = document.querySelector("#emailAddress");
let visitProfile = document.querySelector("#visitProfile");
let Userlocation = document.getElementById("location");
let bio = document.getElementById("bio");


class UI{

    static alertNotification(msg){
        let div = document.createElement("div");
        div.classList = `alert alert-info`;
        div.setAttribute('role','alert');
        div.innerHTML = `Something Went Wrong:\n ${msg}`
        
        let cont = document.querySelector(".container");
        let title = document.querySelector("#title");
        cont.insertBefore(div,title);
        
    };

    static clearNotification(){
        setTimeout(()=>{
            document.querySelector(".alert").remove()
        },1500)
    }
}

function fetchUserData(url){

    return fetch(url).then(res=> {return res.json()})
    .then(data=>{return data})
    .catch(err=>{
        UI.alertNotification(err)
        UI.clearNotification()
})};

btnSearch.addEventListener("click",async ()=>{

    if(searchUser.value===''||searchUser.value===null){
        UI.alertNotification("Search User");
        UI.clearNotification();

    }else{

        let prof = await fetchUserData(`https://api.github.com/users/${searchUser.value}`);
        searchUser.value = "";

        avatar.src = prof.avatar_url;
        cardTitle.innerHTML =  prof.name;
        userID.innerHTML = prof.id;
        LogIN.innerHTML = prof.login;
        visitProfile.href = prof.html_url;
        Userlocation.innerHTML = prof.location;
        bio.innerHTML = prof.bio;
        emailAddress.innerHTML = prof.email;

    }
    
});
    

