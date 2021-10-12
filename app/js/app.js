// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {
	
	const testBtn = document.querySelector('#test');
	const testBtn2 = document.querySelector('#test2');
	const content = document.querySelector('.content');

	console.log(content);
	testBtn.addEventListener('click', function(e) {
		if (!e.isTrusted) return;
		// console.log(e);
		content.innerHTML = `<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div> `;
	})
	testBtn2.addEventListener('click', function(e) {
		if (!e.isTrusted) return;
		// console.log(e);
		content.innerHTML = ``;
	})
	
	
})
