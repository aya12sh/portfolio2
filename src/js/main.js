const menuButton = document.querySelector('.po-menu__btn')
const megaMenu = document.querySelector('.po-mega_menu')
let open = false;


menuButton.addEventListener('click', () => {
open = !open
console.log(open)
if (open)  {
  megaMenu.style.transform = "translateY(0)"
  menuButton.style.transform = "rotate(90deg)"
  megaMenu.style.display= "block"
} else {
  megaMenu.style.transform = "translateY(-400px)"
  menuButton.style.transform = "rotate(0)"
  megaMenu.style.display= "none"

}
})