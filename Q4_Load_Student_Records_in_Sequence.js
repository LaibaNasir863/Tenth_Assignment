
function getStudentData(id) {
    return new Promise(function (resolve, reject) {
        console.log("Loading Student " + id + "...");

        setTimeout(function () {
            if (id === 1) {
                resolve("Student 1: Ali, Age: 20");
            }
            else if (id === 2) {
                resolve("Student 2: Ahmed, Age: 21");
            }
            else if (id === 4) {
                resolve("Student 3: Sara, Age: 19");
            }
            else {
                reject("Student not found!");
            }
        }, 2000);
    });
}

async function loadStudents() {
    let student1 = await getStudentData(1);
    console.log(student1);

    let student2 = await getStudentData(2);
    console.log(student2);

    let student3 = await getStudentData(3);
    console.log(student3);
}

loadStudents().catch(function (error) {
    console.log("Error:", error);
});

// Await current async function ko Promise ka result aane tak pause karta hai.
// Is function ki agli line result milne ke baad execute hoti hai.
// Lekin poora JavaScript program freeze nahi hota.
// Is dauran JavaScript doosre tasks bhi perform kar sakti hai.
