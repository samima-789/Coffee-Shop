const header = document.querySelector("header");
    window.addEventListener ("scroll", function(){
        header.classList.toggle ("sticky", window.scrollY > 0)
    });
        $(document).ready(function(){
            $(".navigation .navbar .logo-toggle-container .toggle-box").click(function(){
                $(".navigation .menu").slideToggle();
            });
});


