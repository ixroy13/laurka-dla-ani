const buttons = document.querySelectorAll(".welcome button");
const welcomeSection = document.querySelector(".welcome");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    welcomeSection.classList.add("slide");
    document.querySelector(".img").classList.add("show");
  });
});

document.querySelector("#one").addEventListener("click", () => {
  document.querySelector(".ice").classList.add("show");
});

document.querySelector("#two").addEventListener("click", () => {
  document.querySelector(".sing").classList.add("show");
});

document.querySelector("#three").addEventListener("click", () => {
  document.querySelector(".tt").classList.add("show");
});

const span = document.querySelector(".calc");

function timeUpdate() {
  let date = new Date();
  let birthday = new Date("2008-02-04T09:00:00");
  let timeDifference = date - birthday;
  let years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  let months = Math.floor(
    (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  let days = Math.floor(
    (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
      (12 * 24 * 60 * 60 * 1000)
  );
  let hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  let minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
  document.querySelector("p.years").innerText = `${years} lat`;
  document.querySelector("p.months").innerText = `${months} miesięcy`;
  document.querySelector("p.days").innerText = `${days} dni`;
  document.querySelector("p.hours").innerText = `${hours} godzin`;
  document.querySelector("p.minutes").innerText = `${minutes} minut`;
  document.querySelector("p.seconds").innerText = `${seconds} sekund`;
}

setInterval(timeUpdate, 500);
timeUpdate();
