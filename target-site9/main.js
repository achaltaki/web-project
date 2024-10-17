let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration =true;
let runnerAge=18;
if(runnerAge >18 && earlyRegistration ){
    raceNumber+=1000;
}
if(runnerAge>18 && earlyRegistration ){
    console.log(`Race number ${raceNumber}:you will race at 9:30 am`);
}
else if(runnerAge>18 && !earlyRegistration ){
    console.log(`Race number ${raceNumber} : you will race at 11:00 am`);
}
else if(runnerAge >18){
    console.log(`Race number ${raceNumber} : you will race at 12:30 pm`);
} else{
    console.log(`Race number ${raceNumber} :please check registration desk`);
}
