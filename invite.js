var buttons = document.getElementsByClassName('uiButton _1sm');
for(var invite=0; invite<buttons.length;invite++) {
	(function(invite) {
       setTimeout(function(){
           buttons[invite].click();
       }, 1000 + (3000 * invite));
   })(invite);
}
