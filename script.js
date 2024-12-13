document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".offer__slide");
  const slides1 = document.querySelectorAll(".slide_route");
  const prevButton = document.querySelector(".back");
  const nextButton = document.querySelector(".next");
  const prevButton1 = document.querySelector(".back1");
  const nextButton1 = document.querySelector(".next1");
  const btnModal = document.querySelector(".btn_modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  let currentIndex = 0;
  let currentIndex1 = 0;

  function updateSlider() {
    const offset = -currentIndex * 960;
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  function updateSlider1() {
    const offset = -currentIndex1 * 960;
    document.querySelector(
      ".slides1"
    ).style.transform = `translateX(${offset}px)`;
  }

  prevButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + slides1.length) % slides1.length;
    updateSlider1();
  });

  nextButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    updateSlider1();
  });

  btnModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    document.body.classList.add("modal-open"); // Блокировка скролла
});


modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) { 
        modalOverlay.style.display = "none";
        document.body.classList.remove("modal-open"); 
    }
});
});

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > window.innerHeight * 1) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


let token = "7508848164:AAEYN69UxhFy9kCsBrC_toJ8I2xL4ODTTSY";

let chatId = "6011064452";
let urlAPI = `https://api.telegram.org/bot${token}/sendMessage`



document.getElementById("tg").addEventListener("submit",function teleg (e) {
  e.preventDefault();
  
  const message = `<b>Заявка с сайта!</b>\n` +
                  `<b>Отправитель: </b> ${this.name.value}\n` +
                  `<b>Номер: </b> ${this.number.value}\n`;

  const payload = {
      chat_id: chatId,
      parse_mode: "HTML",
      text: message
  };

  fetch(urlAPI, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then((data) => {
      this.name.value = "";
      this.number.value = "";
  })
  .catch((error) => {
      console.error("Error:", error);
  })
  .finally(() => console.log("Successfully processed"));
});
document.getElementById("tg1").addEventListener("submit",function teleg (e) {
  e.preventDefault();
  
  const message = `<b>Заявка с сайта!</b>\n` +
                  `<b>Отправитель: </b> ${this.name.value}\n` +
                  `<b>Номер: </b> ${this.number.value}\n`;

  const payload = {
      chat_id: chatId,
      parse_mode: "HTML",
      text: message
  };

  fetch(urlAPI, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then((data) => {
      this.name.value = "";
      this.number.value = "";
  })
  .catch((error) => {
      console.error("Error:", error);
  })
  .finally(() => console.log("Successfully processed"));
});
