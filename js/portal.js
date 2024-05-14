let gridApp = document.querySelector('.grid__section');
let gridList = [];

const addData = () => {
    gridApp.innerHTML = '';
    if(gridList.length > 0){
        gridList.forEach(item =>{
            let newItem = document.createElement('div');
            newItem.classList.add('grid-item');
            newItem.classList.add('col');
            // adicionar onclick="loginRef()" na própria div
            newItem.innerHTML = `
                <img width="50" height="50" src="${item.img}"/>
                <div class="app-info" onclick="loginRef()">
                    <p class="app-name">${item.name}</p>
                    <p class="description">${item.description}</p>
                </div>`;
            gridApp.appendChild(newItem);
        })
    }
}

const loginRef = () =>{
    window.location = 'ag-login.html';
}

const initApp = () => {
    fetch('portal.json')
    .then(response => response.json())
    .then(data => {
        gridList = data;
        addData();
    })
}

initApp();