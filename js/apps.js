// get input value 
function getInnputInnerValue(input){
    const inputFild = document.getElementById(input);
    const inputText = inputFild.value;
    const value = parseFloat(inputText);
    inputFild.value = '';
    return value;
}
function getInnputInnerText(input){
    const inputFild = document.getElementById(input);
    const inputText = inputFild.innerText;
    const value = parseFloat(inputText);

    return value;
}
// get Total deposit and widthdraw 
function getTotalBalance (input, amount ){
    // const inputTotalFild = document.getElementById(input);
    // const inputTotalFildText = inputTotalFild.innerText;
    // const preValue = parseFloat(inputTotalFildText);

    const preValue =getInnputInnerText(input);
    const toatlBalance = preValue + amount;
    document.getElementById(input).innerText= toatlBalance;
}

// Total balance update 
function getUpdateBalance (amount, issIncrease){
    // const balanceFild =  document.getElementById('balance-total');
    // const balanceFildText = balanceFild.innerText;
    // const balanceValue = parseFloat(balanceFildText);
    const balanceValue = getInnputInnerText('balance-total');

    let balanceUpdate;
    if(issIncrease == true){
        balanceUpdate = balanceValue + amount;
    }
    else{
        balanceUpdate = balanceValue - amount;
    }
    document.getElementById('balance-total').innerText = balanceUpdate;

    // if(issIncrease == true){
    //     const balavceUpdate = balanceValue + amount;
    //     balanceFild.innerText = balavceUpdate;
    // }
    // else{
    //     const balavceUpdate = balanceValue - amount;
    //     balanceFild.innerText = balavceUpdate;
    // }
    
    
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const newBalance = getInnputInnerValue('diposit-input');
    if (newBalance > 0) {
        getTotalBalance('diposit-total', newBalance);
        getUpdateBalance(newBalance, true);
    }
});
document.getElementById('widthdraw-button').addEventListener('click', function(){
    const newBalance = getInnputInnerValue('widthdraw-input');
    const toatlBalanceUpdate = getInnputInnerText('balance-total');
    if (newBalance> 0 && newBalance < toatlBalanceUpdate) {
        getTotalBalance('widthdraw-total', newBalance);
        getUpdateBalance(newBalance,false)
    }
});

// console.log('Hellow')