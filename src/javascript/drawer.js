window.addEventListener('load', () => {

    menuButton();
    appDrawer();
    setLink();

});

function appDrawer() {

    const drawer = document.createElement('div');
    drawer.classList.add('sidenav');

    drawer.setAttribute('id', 'mySidenav');


    document.body.appendChild(drawer);


}

function menuButton() {
    const menuBtn = document.createElement('span');
    menuBtn.innerHTML = "&#9776;";
    Object.assign(menuBtn.style, {
        cursor: "pointer",
        color: "black",
        left: 0,
        top: 0,
        position: "absolute",
        padding: "2rem",
        fontSize: "calc(20px + 2vmin)"
    })
    menuBtn.setAttribute('onclick', 'openNav()');
    document.body.appendChild(menuBtn);
}

function setLink() {

    const closeButton = document.createElement('a')
    closeButton.setAttribute('class', 'closebtn');
    closeButton.setAttribute('id', 'closebtn');
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute('onclick', 'closeNav()');
    closeButton.setAttribute('href', 'javascript:void(0)');

    //=============HomeLink===================================

    const home = document.createElement('a');
    home.setAttribute('onclick','homeRouteChange()');
    home.innerHTML = "Home";

    const htmlBasic = document.createElement('a');
    htmlBasic.setAttribute('onclick','routeChange()');
    htmlBasic.innerHTML = "Basic Html";
    
    //console.log(window.location.pathname)
  

    //============ChildAppend=================================
    document.querySelector('#mySidenav').appendChild(closeButton);
    document.querySelector('#mySidenav').appendChild(home);
    document.querySelector('#mySidenav').appendChild(htmlBasic);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function homeRouteChange(){
    window.location.replace(`/`)
}
function routeChange(){

    window.location.replace('/src/views/');
  
}