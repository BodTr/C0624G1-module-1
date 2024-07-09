function convertCurrency() {
    const amount = document.getElementById("amount").value;
    console.log(amount, "amount")
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const rate = fromCurrency/toCurrency;
    const result = amount * rate;
    console.log(result);
    document.getElementById("result").innerText = result
}