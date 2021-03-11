// Instructions:

// 1. Add the functionality to exchange one currency to another
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨 ----  Do this Please!!!!!

const exchangeBtn = document.getElementById('exchange-btn');
const orginalCurrAmount = document.getElementById('original-currency-amount');
const fromCurrency = document.getElementById('original-currency-unit');
const toCurrency = document.getElementById('new-currency-unit');
const exchangeRate = document.getElementById('exchange-rate');
const outputText = document.getElementById('output-text');

exchangeBtn.onclick = function (e) {
	let fromCurrencyValue = fromCurrency.value;
	let toCurrencyValue = toCurrency.value;
	let quantity = orginalCurrAmount.value;
	let exchangeValue = exchangeRate.value;
	if (fromCurrencyValue && toCurrencyValue && quantity && exchangeValue) {
		// We will do a conversion here...
		let outputCurrencyAmount = quantity * exchangeValue;
		outputText.innerHTML = `Your ${quantity} ${fromCurrencyValue} will be ${outputCurrencyAmount} ${toCurrencyValue}`;
	}
};
