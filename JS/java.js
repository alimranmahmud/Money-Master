
document.getElementById('Taka-Calculate').addEventListener('click', function () {
    const inputFood = document.getElementById('food-box');
    const inputFoodStr = inputFood.value;
    const inputFoodValue = parseInt(inputFoodStr);
    const inputRent = document.getElementById('input-rent');
    const inputRentStr = inputRent.value;
    const inputRentValue = parseInt(inputRentStr);
    const inputClothes = document.getElementById('input-clothes');
    const inputClothesStr = inputClothes.value;
    const inputClothesValue = parseInt(inputClothesStr);
    const Total_taka = inputFoodValue + inputRentValue + inputClothesValue;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = Total_taka;
    const income = document.getElementById('Income');
    const incomeStr = income.innerText;
    const incomeValue = parseInt(incomeStr);
    const BalanceTaka = incomeValue - Total_taka;
    const balance = document.getElementById('balance');
    const balanceStr = balance.innerText;
    const balanceValue = parseInt(balanceStr);
    balance.innerText = BalanceTaka;

})
document.getElementById('save-Btn').addEventListener('click', function () {
    const balance = document.getElementById('balance');
    const balanceStr = balance.innerText;
    const balanceValue = parseInt(balanceStr);


    const discountField = document.getElementById('discountField');
    const discountFieldStr = discountField.value;
    const discountFieldValue = parseInt(discountFieldStr);

    const Discount = balanceValue / 100 * discountFieldValue;


    const savingAmount = document.getElementById('Saving-Amount');
    const savingAmountStr = savingAmount.innerText;
    const savingAmountValue = parseInt(savingAmountStr);
    savingAmount.innerText = Discount;

    const RemainigBalance = document.getElementById('remaineg-balance');
    const RemainigBalanceStr = RemainigBalance.innerText;
    const RemainigBalanceValue = parseInt(RemainigBalanceStr);

    const TotalRemainig = balanceValue - Discount;
    RemainigBalance.innerText = TotalRemainig;




})

