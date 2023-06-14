function differenceDates(date1, date2){
    let diffTime = Math.abs(date1 - date2);
    let diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * n));
    diffTime -= diffWeeks * (1000 * 60 * 60 * 24 * 7);
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    diffTime -= diffDays * (1000 * 60 * 60 * 24); 
    let diffSeconds = Math.floor(diffTime / (1000)); 
     
    console.log(diffWeeks + " Weeks " + diffDays + " Days " + diffSeconds + " Seconds");
}

let date1 = new Date(2023, 9, 1, 10);
let date2 = new Date(2023, 9, 10, 11);
differenceDates(date1, date2);