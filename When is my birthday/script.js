function calculateNextBirthday() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (!day || !month || !year) {
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

    createBalloons();
}

function createBalloons() {
    let container = document.querySelector(".container");
    let colors = ["red", "yellow", "green", "lightgreen", "pink"]; // Set of colors
    
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color from set
        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove(); // Remove balloons after animation
        }, 5000);
    }
}
