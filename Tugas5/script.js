const burgerMenu = document.getElementById("burger");
const sideMenu = document.getElementById("sidenav");
const closeBtn = document.getElementById("close-btn");
burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.toggle("active");
});

$(document).ready(function () {
  $(".form").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    let errorMessage = "";

    $('.form input[type="text"]').each(function () {
      const val = $(this).val().trim();
      if (val.length < 4) {
        isValid = false;
        errorMessage = "Semua input harus diisi minimal 4 karakter.";
        return false;
      }
    });

    if (isValid) {
      const message = $("textarea").val().trim();
      const wordCount = message
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      if (wordCount > 20) {
        isValid = false;
        errorMessage = "Pesan tidak boleh lebih dari 20 kata.";
      } else if (message.length < 4) {
        isValid = false;
        errorMessage = "Pesan minimal harus 4 karakter.";
      }
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      alert("Form valid! Data siap dikirim.");
    }
  });
});
