const input = document.querySelector('.input');

function focusFunc() {
	this.classList.add('focus');
}

function blurFunc() {
	if(this.value == "") {
		this.classList.remove('focus');
	}
}


input.addEventListener('focus', focusFunc);
input.addEventListener('blur', blurFunc);