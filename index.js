var sidenav=document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"
}

function CloseNavbar()
{
    sidenav.style.left="-60%" 
}

document.getElementById('sub').addEventListener('click', function() {
    this.innerHTML = 'Subscribed<i class="fa-solid fa-check"></i>';
});