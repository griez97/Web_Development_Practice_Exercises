import { format } from "date-fns";

const date = new Date();

const localTime = date.toLocaleTimeString();

const utcTime = date.toUTCString();

document.body.innerHTML += `
<p>${format(date, "dd-MM-yyyy")} </p>
<p>${format(date, "dd/MM/yyyy")} </p>
<p><strong>.getDate:</strong> ${date.getDate()}</p>
<p><strong>.getMonth:</strong> ${date.getMonth()}</p>
<p><strong>.getFullYear:</strong> ${date.getFullYear()}</p>
<p><strong>Local time: </strong>${localTime}</p>
<p><strong>UTC time: </strong>${utcTime}</p>
`;
