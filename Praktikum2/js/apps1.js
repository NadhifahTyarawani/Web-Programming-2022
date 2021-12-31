
function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update price
    const totalCase = document.getElementById(product + '-total');
    totalCase.innerText = productNumber * price;
    // calculate total
    calculateTotal()
}

// phone product
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false)
})

// case product 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true)
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    // console.log(caseNumber1);

});
// phone product
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false)
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;

    // caseInput.value = parseInt(caseNumber) - 1;
});

// 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const texTotal = subTotal / 10;
    const totalPrice = subTotal + texTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = texTotal;
    document.getElementById('total-price').innerText = totalPrice;




}

