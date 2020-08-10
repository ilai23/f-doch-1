const fetch = require('node-fetch');
require('dotenv').config()
async function fetchDochOne(){
    const COOKIE = process.env.COOKIE;
    const randomBoundary = generateBoundary();
	const mainCode = '01';
	const secondaryCode = '01';
	const reportBody = `------WebKitFormBoundary${randomBoundary}\r\nContent-Disposition: form-data; name=\"MainCode\"\r\n\r\n${mainCode}\r\n------WebKitFormBoundary${randomBoundary}\r\nContent-Disposition: form-data; name=\"SecondaryCode\"\r\n\r\n${secondaryCode}\r\n------WebKitFormBoundary${randomBoundary}--\r\n`;
    await fetch("https://one.prat.idf.il/api/Attendance/InsertPersonalReport", {
        "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
        "access-control-allow-origin": "*",
        "content-type": `multipart/form-data; boundary=----WebKitFormBoundary${randomBoundary}`,
        "crossdomain": "true",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": COOKIE,
        "user-agent": "Mozilla/5.0"
        },
        "referrer": "https://one.prat.idf.il/finish",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": reportBody,
        "method": "POST",
        "mode": "cors"
        }).then( response =>{
            console.log('responseStatus: ' + response.status);
            console.log('responseText: ' + response.statusText);
        });
}

function generateBoundary(){
    const randomSize = 16
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < randomSize; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

fetchDochOne();