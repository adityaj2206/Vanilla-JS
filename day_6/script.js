let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date(userInput.value);
    console.log(birthDate);

    let bd = birthDate.getDate();
    let bm = birthDate.getMonth() + 1;
    let by = birthDate.getFullYear();

    console.log(`${bd} ${bm} ${by}`);

    let today = new Date();

    let td = today.getDate();
    let tm = today.getMonth()+1;
    let ty = today.getFullYear();

    console.log(`${td} ${tm} ${ty}`);


    let years = ty - by;
    let months;
    if(tm >= bm){
        months = tm - bm;
    }
    else{
        years--;
        months = 12 + tm - bm;
    }
    let days;
    if(td >= bd){
        days = td - bd;
    }
    else{
       months--;
       days =  getDaysInMonth(by, bm) + td - bd;
    }
    if(months < 0){
        months = 11;
        years--;
    }
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }
    let age = document.getElementById("result");
    age.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`;
}

