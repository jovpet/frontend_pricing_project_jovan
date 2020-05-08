const pricingState = {
  currency: 'USD',
  billingInterval: 'annually'
};

function switchBillingPeriod(ev) {
  const targetEl = ev.currentTarget;
  const billingNamesArr = document.getElementsByClassName('billing-type--name');
  const prices = document.getElementsByClassName('price');
  const billingInterval = rotateSwitcher(billingNamesArr, targetEl);
  if (billingInterval !== pricingState.billingInterval) {
    switchPrice(prices, billingInterval, null);
  }
}

function switchPrice(prices, billingInterval, currency) {
  if (!currency) {
    currency = pricingState.currency;
  } else if (currency !== pricingState.currency) {
    pricingState.currency = currency;
  }
  if (!billingInterval) {
    billingInterval = pricingState.billingInterval;
  } else if (billingInterval !== pricingState.billingInterval) {
    pricingState.billingInterval = billingInterval;
  }
  let innerText = billingInterval === 'annually' ? `per month, paid annually*` : 'per month*';
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
    return 'annually';
  } else {
    targetEl.classList.add('rotate');
    billingNamesArr[1].classList.remove('selected');
    billingNamesArr[0].classList.add('selected');
    return 'monthly';
  }
}

function changeCurrency(ev) {
  const currencyVal = ev.currentTarget.innerHTML;
  if (currencyVal !== pricingState.currency) {
    const prices = document.getElementsByClassName('price');
    switchPrice(prices, null, currencyVal);
  }
}

const switcherElement = document.getElementById('switch-billing-types');
const currencySwitcher = document.getElementsByClassName('currency-holder-button');
switcherElement.addEventListener('click', switchBillingPeriod);
for (let i = 0; i < currencySwitcher.length; i++) {
  currencySwitcher[i].addEventListener('click', changeCurrency);
}
