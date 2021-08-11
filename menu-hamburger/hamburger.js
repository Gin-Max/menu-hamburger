'use strict';

function dropdown_menu() {
  console.log('Dropdown');
  let mainmenu = document.getElementById('mainmenu');
  let icon = document.querySelector('.btnHamburger i');
  // Afficher / cacher le menu
  if (mainmenu.classList.contains('close')) {
    // On affiche le Menu
    mainmenu.classList.replace('close','open');
    // On remplace l'icône du hamburger
    icon.classList.replace('fa-bars', 'fa-times');
  }
  else {
    // On cache le Menu
    mainmenu.classList.replace('open','close');
    // On remet l'icône du hamburger
    icon.classList.replace('fa-times', 'fa-bars');
  }
}

//
// CODE PRINCIPAL
//

document.addEventListener('DOMContentLoaded', function()
{
  // Installation d'un gestionnaire d'évènement clic sur le bouton.
  document.querySelector('.btnHamburger').addEventListener('click', dropdown_menu);
});
