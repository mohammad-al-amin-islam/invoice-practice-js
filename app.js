document.getElementById('detail-submit-btn').addEventListener('click', function () {
    const buyerInput = document.getElementById('buyer-details-input');
    const displayInput = document.getElementById('buyer-info');
    displayInput.innerText = buyerInput.value;
    buyerInput.value = "";
});
document.getElementById('add-details-btn').addEventListener('click', function () {
    const getName = document.getElementById('item-name-input');
    const getPrice = document.getElementById('item-price-input');
    const getQuantity = document.getElementById('item-quantity-input');

    if(getName.value ==""|| getPrice.value<0 || getQuantity.value<0 || getPrice.value == "" || getQuantity.value == ""){
        alert('please enter correct value');
        return;
    }

    const table = document.getElementById('info-table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th >${getName.value}</th>
    <td>${getPrice.value}</td>
    <td>${getQuantity.value}</td>
    <td class='all-total'>${parseInt(getPrice.value)*parseInt(getQuantity.value)}</td>
    `
    table.appendChild(tr);
    allCaluation();

});
function allCaluation(){
    const subTotal = totalCalculation();

    const subtotalDisplay = document.getElementById('sub-total');
    subtotalDisplay.innerText = subTotal;

    const getTax = document.getElementById('tax');
    const calculateTax = subTotal * 0.2;
    getTax.innerText = calculateTax.toFixed(2);
    const getGranTotal = document.getElementById('grand-total');
    const allTotal = calculateTax + subTotal;
    getGranTotal.innerText = allTotal; 
    document.getElementById('grand-total-2').innerText = allTotal;

}

function totalCalculation(){
    let subTotal = 0;
    const cost = document.getElementsByClassName('all-total');
    for(const one of cost){
        subTotal = subTotal + parseInt(one.innerText);
    }
    return subTotal;
}