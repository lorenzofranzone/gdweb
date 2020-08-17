$(document).ready(function(){

	if ($('.navbar').length) {

		var navbar = $('.navbar');
		var navicon = navbar.find('.navbar__navicon');
		var menu = $('.navbar__menu > ul');
		var submenu = $('.navbar__menu ul li:has(ul)');
		
		navicon.on("click", function(){
			$(this).toggleClass('menu-open');
			menu.slideToggle(300);
		});
		
		submenu.each(function(){
			$(this).append( '<span class="dropdown-plus"></span>' );
			$(this).addClass('dropdown_menu');
		});
		
		$('.dropdown-plus').on("click", function(){
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('dropdown-open');
		});
		
		$('.dropdown_menu a').append('<span></span>');

	}

});