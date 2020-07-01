let locale = "en";
    now = new Date();
    month = now.toLocaleDateString(locale, {
        month: "long"
    });
    dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = dayNames[now.getDay()];
    day = now.toLocaleDateString(locale, {
        day: "2-digit"
    });
    year = now.getFullYear();
    
    displayMonth = document.querySelector(".month");
    displayDayName = document.querySelector(".day-name");
    displayDay = document.querySelector(".day");
    displayYear = document.querySelector(".year");

displayMonth.innerHTML = month;
displayDayName.innerHTML = dayName;
displayDay.innerHTML = day;
displayYear.innerHTML = year;