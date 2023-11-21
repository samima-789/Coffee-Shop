/*let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}*/
            const header = document.querySelector("header");
            window.addEventListener ("scroll", function(){
            header.classList.toggle ("sticky", window.scrollY > 0)
            });

            $(document).ready(function(){
                $(".navigation .navbar .logo-toggle-container .toggle-box").click(function(){
                    $(".navigation .menu").slideToggle();
                });
            });