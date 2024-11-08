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
