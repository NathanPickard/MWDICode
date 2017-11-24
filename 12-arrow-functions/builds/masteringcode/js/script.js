var Hamburger = function Hamburger(nodeName) {
  var myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: function activate() {
      return myNode.addEventListener('click', function (e) {
        return myNode.parentNode.querySelector('.navbar').classList.toggle('hidden');
      }, false);
    },
    hide: function hide() {
      return myNode.parentNode.querySelector('.navbar').classList.add('hidden');
    }
  };
};

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();
//# sourceMappingURL=script.js.map
