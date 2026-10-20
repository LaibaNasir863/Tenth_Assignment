//First Version Nested CallBack
function prepareOrder(callback) {
    console.log("Order preparation started...");

    setTimeout(function () {
        console.log("Order preparation finished.");

        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Order packing started...");

    setTimeout(function () {
        console.log("Order packing finished.");

        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Customer notification started...");

    setTimeout(function () {
        console.log("Customer notified. Order completed.");
    }, 1000);
}

prepareOrder(function () {
    packOrder(function () {
        notifyCustomer();
    });
});

//Second Version Promise-based approach or async/await.
function prepareOrder() {
    console.log("Order preparation started...");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Order preparation finished.");
            resolve();
        }, 1000);
    });
}

function packOrder() {
    console.log("Order packing started...");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Order packing finished.");
            resolve();
        }, 1000);
    });
}

function notifyCustomer() {
    console.log("Customer notification started...");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Customer notified. Order completed.");
            resolve();
        }, 1000);
    });
}

async function processOrder() {
    await prepareOrder();
    await packOrder();
    await notifyCustomer();
}

processOrder();

// Comparison:
// Nested callbacks mein code samajhna mushkil hota hai kyun ke
// har step doosre callback ke andar likhna parta hai.
// Is se code deeply nested ho jata hai, jise callback hell kehte hain.
//
// Async/await mein code clean aur parhne mein easy hota hai
// kyun ke har step sequence mein likha jata hai.
// Is se code ko samajhna aur maintain karna asaan hota hai.

