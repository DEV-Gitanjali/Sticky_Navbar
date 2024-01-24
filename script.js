// this method capture all the element 
const nav=document.querySelector('.nav')
// this method for when you scroll the window navbar is fixed now
window.addEventListener('scroll',fixNav)
// this method for if scroll  the window  on  greater than offsetheight it will be active
function fixNav()
{
    if(window.scrollY>nav.offsetHeight+150)
    {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}