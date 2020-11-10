$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .intro__info__inner').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function selectTab(num) {
    for (var i=1; i <= 16; i++) {
      document.getElementById("tab" + i).className = "";
      document.getElementById("box" + i).className = "infobox";
    }
    document.getElementById("tab" + num).className = "selected";
    document.getElementById("box" + num).className = "infobox enabled";
};