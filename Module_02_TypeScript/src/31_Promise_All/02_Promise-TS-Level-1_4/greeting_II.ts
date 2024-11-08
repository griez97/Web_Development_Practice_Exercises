function sayHello(name: string, callbackFn: (message: string) => void): void {
    const greeting = `Hallo, ${name}!`;
    callbackFn(greeting);
}

function greetingCallbackFn(message: string): void {
    console.log(message);
}

sayHello("Max", greetingCallbackFn);
sayHello("Anna", greetingCallbackFn);
sayHello("Peter", greetingCallbackFn);

const promise1 = new Promise<string>((resolve) => setTimeout(() => resolve("First result"), 1000));
const promise2 = new Promise<string>((resolve) => setTimeout(() => resolve("Second result"), 2000));
const promise3 = new Promise<string>((resolve) => setTimeout(() => resolve("Third result"), 3000));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${results.join(" ")} Homework done`;
        document.body.appendChild(paragraph);
    })
    .catch((error) => console.error("Error:", error));
