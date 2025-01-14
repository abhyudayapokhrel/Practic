const APIURL = 'https://api.github.com/users';
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

getUser('abhyudayapokhrel');

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username);
        createUserCard(data);

    } catch(err){
        console.log(err);
    }
}

createUserCard = (user) => {
    const cardHTML = `<div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" srcset="">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repo">
                    
                </div>
            </div>
        </div>`
        main.innerHTML = cardHTML;
}  

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const user = search.value;
    if(user){
        getUser(user);
        search.value = '';
    }
})