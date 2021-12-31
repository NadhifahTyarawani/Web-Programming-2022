// console.log('I am in a separate file')
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculatorTotal();

}
// phone details 
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// handle case increse deccres event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;

    // caseInput.value = parseInt(caseNumber) + 1;
    // console.log('click button');
})

// for minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
})

// sub total 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function calculatorTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = caseTotal + phoneTotal;
    const textAmount = subTotal / 10;
    const totalPrice = subTotal + textAmount;
    // console.log(subTotal);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = textAmount;
    document.getElementById('total-price').innerText = totalPrice;
}
