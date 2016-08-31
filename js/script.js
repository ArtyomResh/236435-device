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
