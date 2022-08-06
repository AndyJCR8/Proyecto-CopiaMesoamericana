const navbar = document.getElementById("navbar");
console.log(navbar);
const dropdownElements = navbar.getElementsByClassName("dropdown");
console.log(dropdownElements);
for(let dropDown of dropdownElements)
{
  dropDown.children[0].addEventListener("mouseenter", (evt) => { 
    let dropdownMenu = dropDown.children[1];
    if(!dropdownMenu.classList.contains("m-enter") && !dropdownMenu.classList.contains("d-block"))
    {
      setTimeout(() => { dropdownMenu.classList.toggle("m-enter"); }, 50);
      dropdownMenu.classList.toggle("d-block");
    }
  });
  dropDown.addEventListener("mouseleave", (evt) => { 
    let dropdownMenu = dropDown.children[1];
    dropdownMenu.classList.toggle("d-block");
    dropdownMenu.classList.toggle("m-enter");
    /*if(dropdownMenu.classList.contains("m-enter") && dropdownMenu.classList.contains("d-block"))
    {
      setTimeout(() => { dropdownMenu.classList.toggle("d-block"); }, 150);
      dropdownMenu.classList.toggle("m-enter");
    }*/
  });
}