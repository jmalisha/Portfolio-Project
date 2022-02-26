function toggleMenu() {
  var menu = document.getElementById('mainNav');
  if (menu.className === 'hidden') {
    menu.className = 'show';
  } else {
    menu.className = 'hidden';
  }
}
