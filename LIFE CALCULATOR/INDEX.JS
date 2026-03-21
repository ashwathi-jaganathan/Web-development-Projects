let lifeTimer;

function show(id) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function Proceed() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;

  if (!name || !dob) {
    alert("Please enter your name and DOB");
    return;
  }

  document.getElementById("displayName").textContent = name;
  show("screen2");

  setTimeout(startCountdown, 1500);
}

function startCountdown() {
  show("screen3");
  let num = 3;

  const timer = setInterval(() => {
    num--;
    document.getElementById("count").textContent = num;

    if (num === 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function showResult() {
  show("screen4");
  clearInterval(lifeTimer);

  lifeTimer = setInterval(() => {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput + "T00:00:00");
    const now = new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("displayName2").textContent =
      document.getElementById("name").value;

    document.getElementById("y").textContent = years;
    document.getElementById("mo").textContent = months;
    document.getElementById("d").textContent = days;
    document.getElementById("h").textContent = hours;
    document.getElementById("mi").textContent = minutes;
    document.getElementById("s").textContent = seconds;

  }, 1000);
}

function press(value) {
  const display = document.getElementById("calcDisplay");

  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearCalc() {
  document.getElementById("calcDisplay").value = "0";
}

function backspace() {
  const display = document.getElementById("calcDisplay");
  display.value =
    display.value.length > 1
      ? display.value.slice(0, -1)
      : "0";
}

function calculate() {
  const display = document.getElementById("calcDisplay");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "0";
  }
}