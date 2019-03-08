function convertation(text_array, dictionary) {
	let output = "";

	for (let l of text_array) {
		output += l in dictionary ? dictionary[l] : l;
	}

	return output;
}

function convert() {
	let text_array = document.getElementById('input').value.split('');

	document.getElementById('output').value = convertation(text_array, DICT);
}

function convertReverse() {
	let text = document.getElementById('input').value;
	for (let i in DICT_REVERSED_DOUBLE) {
		while (text.indexOf(i) != -1) {
			text = text.replace(i, DICT_REVERSED_DOUBLE[i]);
		}
	}

	text_array = text.split('');

	document.getElementById('output').value = convertation(text_array, DICT_REVERSED);
}

function work() {
	let radio = document.getElementsByName('choice');

	if (radio[0].checked) {
		convert();
	} else {
		convertReverse();
	}
}

document.getElementById('convert').addEventListener('click', work);