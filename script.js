function calculateNextBirthday() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;

    if (!day || !month) {
        document.getElementById("result").innerText = "Please enter a valid date!";
        return;
    }

    let today = new Date();
    let currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, month - 1, day);

    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    let daysLeft = Math.ceil((nextBirthday - today) / 86400000);

    if (daysLeft >= 355) {
        let daysAgo = 365 - daysLeft;
        document.getElementById("result").innerText = `Your birthday just passed ${daysAgo} days ago!`;
    } else {
        document.getElementById("result").innerText = `Your next birthday is in ${daysLeft} days!`;
    }
}


