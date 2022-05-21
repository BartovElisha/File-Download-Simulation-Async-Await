
const fruits = ['Banana','Apple','Papaya','Avocado','Orange','Lemon'];

let text = "";

function delayMs(msec) {
    //console.log("Starting Delay...");
    return new Promise(response => {
        setTimeout(() => response(),msec);
    });
}

// Test delayMs function
//delayMs(5000).then(() => {console.log("5 sec")});  

function checkValue(value) {
    if(value < 10)
        return '0'+ value;
    else
        return value;    
}

async function startDownloadFile(num, duration) {

    let startTime = new Date();
    let hours;
    let minutes;
    let seconds;

    hours = checkValue(startTime.getHours());    
    minutes = checkValue(startTime.getMinutes());    
    seconds = checkValue(startTime.getSeconds());   
        
    document.getElementById(`downloading-status${num}`).innerHTML = `Downloading started: ${hours}:${minutes}:${seconds}<br>`;

    try {
        // Downloading file simulation by delayMs function
        console.log(`Downloading File ${num} Started...`);
        await delayMs(duration);

        let endTime = new Date();
        hours = checkValue(endTime.getHours());    
        minutes = checkValue(endTime.getMinutes());    
        seconds = checkValue(endTime.getSeconds());   

        document.getElementById(`downloading-status${num}`).innerHTML += `Downloading finished: ${hours}:${minutes}:${seconds}<br>`; 

        let totalTime = endTime - startTime;  

        document.getElementById(`downloading-status${num}`).innerHTML +=`Total time: ${totalTime/1000} seconds<br>`;

        fruits.forEach(myFunction);
        document.getElementById(`fruits-list${num}`).innerHTML = text;
        text = "";
    }
    catch (error) {
        console.log(`Downloading File ${num} error: ${error}`);
    }
    finally {
        console.log(`Downloading File ${num} compleated successfully`);
    }    
}

function myFunction(item, index) {
    text += index + ": " + item + "<br>"; 
}