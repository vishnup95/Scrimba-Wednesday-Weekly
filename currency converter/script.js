// Add an API integration..
import { currencyList } from './util.js';

const exchangeBtn = document.getElementById('exchange-btn');
const orginalCurrAmount = document.getElementById('original-currency-amount');
const fromCurrency = document.getElementById('original-currency-unit');
const toCurrency = document.getElementById('new-currency-unit');
const exchangeRateEle = document.getElementById('exchange-rate');
const outputText = document.getElementById('output-text');

const API_URI = 'https://api.exchangeratesapi.io';

const addOptions = (value, innerText, selectElement) => {
	let optionEle = document.createElement('option');
	optionEle.value = value;
	optionEle.innerText = innerText;
	selectElement.appendChild(optionEle);
};

const init = () => {
	//loop through the list of currencies and add it as an option?
	// adding a default seems good.
	addOptions('', 'Please Select One', fromCurrency);
	addOptions('', 'Please Select One', toCurrency);
	currencyList.forEach((currency) => {
		addOptions(currency.symbol, currency.name, fromCurrency);
		addOptions(currency.symbol, currency.name, toCurrency);
	});
};

const getExchangeData = async (fromCurrency, toCurrency) => {
	const exchangeRequest = await fetch(
		`${API_URI}/latest?base=${fromCurrency}&symbols=${toCurrency}`
	);
	const exchangeData = await exchangeRequest.json();
	return exchangeData;
};

const calculateFinalAmount = (rate) => {
	let finalAmount = orginalCurrAmount.value * rate;
	outputText.innerHTML = `Your ${orginalCurrAmount.value} of ${fromCurrency.value} will be ${finalAmount.toFixed(2)} of ${toCurrency.value}`;
};

exchangeBtn.onclick = function () {
	if (fromCurrency.value && toCurrency.value) {
		//call the API
		getExchangeData(fromCurrency.value, toCurrency.value).then((data) => {
			let exchangeRateData = data.rates[toCurrency.value];
			exchangeRateEle.value = exchangeRateData.toFixed(2);
			calculateFinalAmount(exchangeRateData);
		});
	}
};

init();
