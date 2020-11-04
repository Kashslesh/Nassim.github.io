var btn = document.getElementById("themebutton");
var link = document.getElementById("fichestyle");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "./CSS/style.css";
    let darkTheme = "./CSS/darlstyle.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);
}

jQuery(document).ready(function(){
    var typed = new Typed('.hero', {
        strings: ['Développeur web.', 'Développeur Js.' ,'Développeur PHP.', 'Designer'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
    });
    });
