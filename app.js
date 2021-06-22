
const ul = document.getElementById('user-list');
const page1 = document.getElementById('btn-page-1');
const page2 = document.getElementById('btn-page-2');

page1.addEventListener('click',()=>{
    fetchUserList(1);
});
page2.addEventListener('click',()=>{
    fetchUserList(2);
});
async function  fetchUserList(page)
{
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);    
    //console.log(response);
    const jResponse = await response.json();
    const data = jResponse.data;
    ul.innerHTML = '';    
    data.forEach(element => {
        var node = document.createElement("LI");                 
        var textnode = document.createTextNode(`${element.first_name} ${element.last_name}`);         
        node.appendChild(textnode);                                      
        // console.log(element.first_name,element.last_name);
        ul.appendChild(node);
    });
}

fetchUserList(1);
