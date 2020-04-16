const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links-short');
    const navLinks = document.querySelectorAll('.nav-links-short li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
            
        });
        //Burger animation
        burger.classList.toggle('toggle');
    }); 
}

navSlide();



// Calendar

var months = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
window.onload=function() {
    var d = new Date();
    document.getElementById("calendar").getElementsByTagName("h1")[0].innerHTML=months[d.getMonth()];
    document.getElementsByTagName("td")[d.getDate()-1].className="currentA";
}
