const buttons = document.querySelectorAll(".welcome button");
const welcomeSection = document.querySelector(".welcome");
const monthParagraph = document.querySelector("p.months");
const dayParagraph = document.querySelector("p.days");
const hourParagraph = document.querySelector("p.hours")
const minuteParagraph = document.querySelector("p.minutes")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    welcomeSection.classList.add("slide");
    document.querySelector(".img").classList.add("show");
  });
});

buttons[0].addEventListener("click", () => {
  document.querySelector("img.ice").classList.add("show")
})

buttons[1].addEventListener("click", () => {
  document.querySelector("img.sing").classList.add("show");
});

buttons[2].addEventListener("click", () => {
  document.querySelector("img.tt").classList.add("show");
});

function timeUpdate() {
  let date = new Date();
  // let date = new Date("2024-02-05T09:00:00")
  let birthday = new Date("2008-02-04T09:00:00");
  let timeDifference = date - birthday;
  let years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  let months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /(30.44 * 24 * 60 * 60 * 1000));
  let days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) /(24 * 60 * 60 * 1000));
  let hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  months == 0 ? monthParagraph.style.display = "none" : monthParagraph.style.display = "block"
  days == 0 ? dayParagraph.style.display = "none" : dayParagraph.style.display = "block"
  hours == 0 ? hourParagraph.style.display = "none" : hourParagraph.style.display = "block"
  minutes == 0 ? minuteParagraph.style.display = "none" : minuteParagraph.style.display = "block"

  let monthWord;
  let dayWord;
  let hourWord;
  let minutesWord;
  let secondWord;

  if(months == 1) {
    monthWord = "miesiąc"
  } else if (months < 4 && months > 0) {
    monthWord = "miesiące"
  } else {
    monthWord = "miesięcy"
  }

  if(days == 1) {
    dayWord = "dzień"
  } else {
    dayWord = "dni"
  }

  if(hours == 1) {
    hourWord = "godzinę"
  } else if ((hours < 5 && hours > 0) || hours > 21) {
    hourWord = "godziny"
  } else {
    hourWord = "godzin"
  }

  if (minutes == 1) {
    minutesWord = "minutę";
  } else if (
    (minutes > 0 && minutes < 5) || 
    (minutes > 21 && minutes < 25) ||
    (minutes > 31 && minutes < 35) ||
    (minutes > 41 && minutes < 45) ||
    (minutes > 51 && minutes < 55)
  ) {
    minutesWord = "minuty";
  } else {
    minutesWord = "minut";
  }

  if (seconds == 1) {
    secondWord = "sekundę";
  } else if (
    (seconds < 5) ||
    (seconds > 21 && seconds < 25) ||
    (seconds > 31 && seconds < 35) ||
    (seconds > 41 && seconds < 45) ||
    (seconds > 51 && seconds < 55)
  ) {
    secondWord = "sekundy";
  } else {
    secondWord = "sekund";
  }

  document.querySelector("p.years").innerText = `${years} lat`;
  document.querySelector("p.months").innerText = `${months + " " + monthWord}`;
  document.querySelector("p.days").innerText = `${days + " " + dayWord}`;
  document.querySelector("p.hours").innerText = `${hours + " " + hourWord}`;
  document.querySelector("p.minutes").innerText = `${minutes + " " + minutesWord}`;
  document.querySelector("p.seconds").innerText = `${seconds == 0 ? "" : seconds + " " + secondWord} temu`;
}

setInterval(timeUpdate, 500);
timeUpdate();