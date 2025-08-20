document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    let day = parseInt(document.getElementById("day").value)
    let month = parseInt(document.getElementById("month").value)
    let year = parseInt(document.getElementById("year").value)

    // input validation
    if(!day || !month || !year){
        document.getElementById("result").innerText = "⚠️ Please enter a valid date!";
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month-1, day);
    
    if(birthDate > today){
        document.getElementById("result").innerText = "⚠️ Birth date cannot be in future!";
        return;
    }


    let ageYears = today.getFullYear() - birthDate.getFullYear()
    let ageMonths = today.getMonth() - birthDate.getMonth()
    let ageDays = today.getDate() - birthDate.getDate()

    // adjust months and days
    if(ageDays < 0){
        ageMonths--
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        ageDays += prevMonth.getDate()
    }

    if(ageMonths < 0){
        ageYears--
        ageMonths += 12
    }

    document.getElementById("result").innerText = `🎉 You are ${ageYears} years, ${ageMonths} months and ${ageDays} days old.`

})