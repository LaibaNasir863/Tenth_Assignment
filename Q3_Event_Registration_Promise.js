
function registerStudent(studentName, seatAvailable) {
    return new Promise(function (resolve, reject) {
        if (seatAvailable) {
            resolve(studentName + " registered successfully!");
        } else {
            reject(studentName + " registration failed. The class is full.");
        }
    });
}
registerStudent("Ali", true)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
    
registerStudent("Ahmed", false)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
