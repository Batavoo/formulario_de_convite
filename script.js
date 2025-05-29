const input = document.getElementById("background-photo");
const fileName = document.getElementById("file-name");

input.addEventListener("change", function () {
  if (input.files.length > 0) {
    fileName.textContent = input.files[0].name;
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
  }
});
