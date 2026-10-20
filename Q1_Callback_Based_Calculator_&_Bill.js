function calculate(num1, num2, callback) {
    callback(num1, num2);
}

function addNumbers(a, b) {
    console.log("Sum:", a + b);
}

calculate(10, 20, addNumbers);

function calculateBill(price1, price2, price3, callback) {
    callback(price1, price2, price3);
}

function showTotal(p1, p2, p3) {
    console.log("Total Bill:", p1 + p2 + p3);
}

calculateBill(200, 300, 500, showTotal);

let balance = 10000;

function withdrawMoney(amount, callback) {
    setTimeout(function () {
        balance = balance - amount;
        callback(balance);
    }, 2000);
}

withdrawMoney(3000, function (remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});
