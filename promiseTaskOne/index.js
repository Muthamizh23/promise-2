document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];

// Function to fetch dog breeds from the Dog Api
async function fetchUsers(){
try{
    const response=await fetch("https://api.openbrewerydb.org/v1/breweries");
    users=await response.json();
    renderUsers()}
    catch(error){
        console.log("Error Occured:",error)
    }
}

function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.brewery_type}</td>
        <td>${user.city}</td>
        <td>${user.state_province}</td>
        <td>${user.country}</td>
        <td>${user.website_url}</td> `
        userList.appendChild(row);
    });
}
