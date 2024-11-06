const date01 = new Date("September 2, 2019 09:00:00");

const date02 = new Date(0);

const date03 = new Date(31556908800);

const date04 = new Date(86400000);

function printDates(date: any) {
    return date.toLocaleString("de-DE");
}

document.body.innerHTML += `
    <h2>Datum</h2>
    <h3>.toLocaleString</h3>
    <p><strong>new Date("September 2, 2019 09:00:00"):</strong> ${printDates(date01)}</p>
    <p><strong>new Date(0):</strong> ${printDates(date02)}</p>
    <p><strong>new Date(31556908800):</strong> ${printDates(date03)}</p>
    <p><strong>new Date(86400000):</strong> ${printDates(date04)}</p>
    <h3> Without .toLocaleString</h3>
    <p>${date01}</p>
    <p>${date02}</p>
    <p>${date03}</p>
    <p>${date04}</p>
`;
