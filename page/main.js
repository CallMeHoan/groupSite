const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//read more
let btn = document.querySelectorAll('.detail');
for(let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
		btn[i].parentNode.classList.toggle('show-more')
		if(btn[i].innerText === 'DETAILS')
		{
			btn[i].innerText = "LESS DETAILS"
		}
		else
		{
			btn[i].innerText = "DETAILS"
		}
	})
}