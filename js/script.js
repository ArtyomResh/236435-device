var linkWu = document.querySelector(".btn-wu");
var linkMap = document.querySelector("a.map");
var modalMap = document.querySelector(".modal-content-map");
var modalClose = document.querySelector(".modal-content-close");
var modalOverlay = document.querySelector(".modal-overlay");
var modalWuContent = document.querySelector(".modal-content-wu");

var wuForm = modalWuContent.querySelector("form");
var userName = modalWuContent.querySelector("[name=user-name]");
var userEmail = modalWuContent.querySelector("[name=e-mail]");
var userMessage = modalWuContent.querySelector("[name=message]");
var storageUserName = localStorage.getItem("userName");
var storageUserEmail = localStorage.getItem("userEmail");


var promoSlider = document.querySelector(".slider.promo");
var promoSlide1 = promoSlider.querySelector(".js-slideP-1");
var promoSlide2 = promoSlider.querySelector(".js-slideP-2");
var promoSlide3 = promoSlider.querySelector(".js-slideP-3");
var promoSlideCtrl1 = promoSlider.querySelector(".slider-control li:nth-child(1) a");
var promoSlideCtrl2 = promoSlider.querySelector(".slider-control li:nth-child(2) a");
var promoSlideCtrl3 = promoSlider.querySelector(".slider-control li:nth-child(3) a");

var servicesSlider = document.querySelector(".slider.services");
var servicesSlide1 = servicesSlider.querySelector(".services-slideDelivery");
var servicesSlide2 = servicesSlider.querySelector(".services-slideWarranty");
var servicesSlide3 = servicesSlider.querySelector(".services-slideCredit");
var servicesSlideCtrl1 = servicesSlider.querySelector(".services-nav li:nth-child(1) a");
var servicesSlideCtrl2 = servicesSlider.querySelector(".services-nav li:nth-child(2) a");
var servicesSlideCtrl3 = servicesSlider.querySelector(".services-nav li:nth-child(3) a");

linkWu.addEventListener("click", function(event) {
  event.preventDefault();
  modalWuContent.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");

  if (storageUserName && storageUserEmail) {
    userName.value = storageUserName;
    userEmail.value = storageUserEmail;
    userMessage.focus();
  } else if (storageUserName && !storageUserEmail) {
    userName.value = storageUserName;
    userEmail.focus();
  } else if (!storageUserName && storageUserEmail) {
    userEmail.value = storageUserEmail;
    userName.focus();
  } else {
    userName.focus();
  }
});

linkMap.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("modal-content-close")) {
    event.preventDefault();
    if (!modalWuContent.classList.contains("hidden")) {
      wuForm.classList.remove("modal-error");
      modalWuContent.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    } else if (!modalMap.classList.contains("hidden")) {
      modalMap.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!modalWuContent.classList.contains("hidden")) {
      wuForm.classList.remove("modal-error");
      modalWuContent.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    } else if (!modalMap.classList.contains("hidden")) {
      modalMap.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    }
  }
});

wuForm.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    event.preventDefault();
    wuForm.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
  }
})

///////////////// СЛАЙДЕР-ПРОМО

promoSlideCtrl1.addEventListener("click", function(event) {
  event.preventDefault();
  if (promoSlide1.classList.contains("hidden") && (!promoSlide2.classList.contains("hidden") || !promoSlide3.classList.contains("hidden"))) {
    promoSlide1.classList.remove("hidden");
    promoSlideCtrl1.classList.add("current");
    if (!promoSlide2.classList.contains("hidden")) {
      promoSlide2.classList.add("hidden");
      promoSlideCtrl2.classList.remove("current");
    } else if (!promoSlide3.classList.contains("hidden")) {
        promoSlide3.classList.add("hidden");
        promoSlideCtrl3.classList.remove("current");
    }
  }
});

promoSlideCtrl2.addEventListener("click", function(event) {
  event.preventDefault();
  if (promoSlide2.classList.contains("hidden") && (!promoSlide1.classList.contains("hidden") || !promoSlide3.classList.contains("hidden"))) {
    promoSlide2.classList.remove("hidden");
    promoSlideCtrl2.classList.add("current");
    if (!promoSlide1.classList.contains("hidden")) {
      promoSlide1.classList.add("hidden");
      promoSlideCtrl1.classList.remove("current");
    } else if (!promoSlide3.classList.contains("hidden")) {
        promoSlide3.classList.add("hidden");
        promoSlideCtrl3.classList.remove("current");
    }
  }
});

promoSlideCtrl3.addEventListener("click", function(event) {
  event.preventDefault();
  if (promoSlide3.classList.contains("hidden") && (!promoSlide1.classList.contains("hidden") || !promoSlide2.classList.contains("hidden"))) {
    promoSlide3.classList.remove("hidden");
    promoSlideCtrl3.classList.add("current");
    if (!promoSlide1.classList.contains("hidden")) {
      promoSlide1.classList.add("hidden");
      promoSlideCtrl1.classList.remove("current");
    } else if (!promoSlide2.classList.contains("hidden")) {
        promoSlide2.classList.add("hidden");
        promoSlideCtrl2.classList.remove("current");
    }
  }
});

///////////////// СЛАЙДЕР СЕРВИСОВ

servicesSlideCtrl1.addEventListener("click", function(event) {
  event.preventDefault();
  if (servicesSlide1.classList.contains("hidden") && (!servicesSlide2.classList.contains("hidden") || !servicesSlide3.classList.contains("hidden"))) {
    servicesSlide1.classList.remove("hidden");
    servicesSlideCtrl1.classList.add("btn-active");
    if (!servicesSlide2.classList.contains("hidden")) {
      servicesSlide2.classList.add("hidden");
      servicesSlideCtrl2.classList.remove("btn-active");
    } else if (!servicesSlide3.classList.contains("hidden")) {
        servicesSlide3.classList.add("hidden");
        servicesSlideCtrl3.classList.remove("btn-active");
    }
  }
});

servicesSlideCtrl2.addEventListener("click", function(event) {
  event.preventDefault();
  if (servicesSlide2.classList.contains("hidden") && (!servicesSlide1.classList.contains("hidden") || !servicesSlide3.classList.contains("hidden"))) {
    servicesSlide2.classList.remove("hidden");
    servicesSlideCtrl2.classList.add("btn-active");
    if (!servicesSlide1.classList.contains("hidden")) {
      servicesSlide1.classList.add("hidden");
      servicesSlideCtrl1.classList.remove("btn-active");
    } else if (!servicesSlide3.classList.contains("hidden")) {
        servicesSlide3.classList.add("hidden");
        servicesSlideCtrl3.classList.remove("btn-active");
    }
  }
});

servicesSlideCtrl3.addEventListener("click", function(event) {
  event.preventDefault();
  if (servicesSlide3.classList.contains("hidden") && (!servicesSlide1.classList.contains("hidden") || !servicesSlide2.classList.contains("hidden"))) {
    servicesSlide3.classList.remove("hidden");
    servicesSlideCtrl3.classList.add("btn-active");
    if (!servicesSlide1.classList.contains("hidden")) {
      servicesSlide1.classList.add("hidden");
      servicesSlideCtrl1.classList.remove("btn-active");
    } else if (!servicesSlide2.classList.contains("hidden")) {
        servicesSlide2.classList.add("hidden");
        servicesSlideCtrl2.classList.remove("btn-active");
    }
  }
});
