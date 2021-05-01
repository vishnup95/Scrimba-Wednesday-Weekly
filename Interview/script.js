let arr = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 4, 2, 3, 3, 5, 6, 4, 4, 3, 7, 6, 4, 4];

let maxCount = 1;
let maxValue = arr[0];
let obj = {};

arr.forEach((ele) => {
	if (!obj[ele]) {
		obj[ele] = 1;
	} else {
		obj[ele]++;
	}

	if (obj[ele] > maxCount) {
		maxCount = obj[ele];
		maxValue = ele;
	}
});

console.log(maxValue);
///

function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

function saveInput(arg) {
	console.log(arg);
}

function processChange(arg) {
	debounce((args) => saveInput(args)).call(undefined, arg)
}
