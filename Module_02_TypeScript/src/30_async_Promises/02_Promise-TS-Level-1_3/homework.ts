function firstStep(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success: boolean = false;
            if (success) {
                resolve("Exercise 1 done.");
            } else {
                reject("Error: Exercise 1");
            }
        }, 20000);
    });
}

function secondStep(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes: boolean = true;
            if (succes) {
                resolve("Exercise 2 done.");
            } else {
                reject("Error: Exercise 2");
            }
        }, 30000);
    });
}

function thirdStep(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exercise 3 done.");
        }, 40000);
        reject("Error: Exercise 3");
    });
}
