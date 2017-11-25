var Hamburger = (nodeName) => {
  var myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false),
    hide: () => myNode.parentNode.querySelector('.navbar').classList.add('hidden')
  }
}

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();