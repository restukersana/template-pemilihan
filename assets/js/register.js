const inputs = document.querySelectorAll('input');

function focusFunc() {
	this.classList.add('focus');
}

function blurFunc() {
	if(this.value == ""){
		this.classList.remove('focus');
	}
}

inputs.forEach(input => {
	input.addEventListener('focus', focusFunc);
	input.addEventListener('blur', blurFunc);
});