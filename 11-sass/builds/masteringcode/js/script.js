function Hamburger(nodeName) {
  var myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: function activate() {
      myNode.addEventListener('click', function (e) {
        myNode.parentNode.querySelector('.navbar').classList.toggle('hidden');
      }, false);
    }, // activate
    hide: function hide() {
      myNode.parentNode.querySelector('.navbar').classList.add('hidden');
    } // hide
    //return
  };
} //Hamburger

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();
//# sourceMappingURL=script.js.map
