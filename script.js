function switchBillingPeriod(ev) {
  const targetEl = ev.currentTarget;
  const billingNamesArr = document.getElementsByClassName('billing-type--name');
  const prices = document.getElementsByClassName('price');
  const billingInterval = rotateSwitcher(billingNamesArr, targetEl);
  const currency = $(ev.currentTarget).data('currency')
  switchPrice(prices, billingInterval, currency);
}

function switchPrice(prices, billingInterval, currency) {
  console.log(prices, billingInterval, currency);
  let innerText = billingInterval === 'annual' ? `per month, paid annually*` : 'per month*';
  const infos = document.getElementsByClassName('info');
  for (let i = 0; i < infos.length; i++) {
    infos[i].innerHTML = innerText;
  }
  for (let i = 0; i < prices.length; i++) {
    prices[i].classList.remove('active');
    $(`[data-type=${billingInterval}-${currency}]`).addClass('active');
  }
}

function rotateSwitcher(billingNamesArr, targetEl) {
  if (billingNamesArr[0].classList.contains('selected')) {
    targetEl.classList.remove('rotate');
    billingNamesArr[0].classList.remove('selected');
    billingNamesArr[1].classList.add('selected');
    return 'annual';
  } else {
    targetEl.classList.add('rotate');
    billingNamesArr[1].classList.remove('selected');
    billingNamesArr[0].classList.add('selected');
    return 'monthly';
  }
}

function changeCurrency(ev) {
  const currencyVal = ev.currentTarget.innerHTML;
  let billingSwitcherEl = $('#switch-billing-types');
  const currentCurrency = billingSwitcherEl.data('currency');
  if (currentCurrency !== currencyVal) {
    console.log('set data to: ' + currencyVal);
    billingSwitcherEl.data('currency', currencyVal);
    const prices = document.getElementsByClassName('price');
    const billingInterval = $('.billing-type--name.selected').text().toLowerCase();



    switchPrice(prices, billingInterval, currencyVal);

    // TODO check on this later!!
  }
  console.log(currencyVal, currentCurrency);
}

const switcherElement = document.getElementById('switch-billing-types');
const currencySwitcher = document.getElementsByClassName('currency-holder-button');
switcherElement.addEventListener('click', switchBillingPeriod);
for (let i = 0; i < currencySwitcher.length; i++) {
  currencySwitcher[i].addEventListener('click', changeCurrency);
}
