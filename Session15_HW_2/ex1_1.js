let $modal = document.getElementById('myModal');
let $modalBtn = document.getElementById('modalBtn');
let $modalClose = document.getElementsByClassName('modalx')[0];

$modalBtn.onclick = (event) => {
  $modal.style.display = "block";
}

$modalClose.onclick = (event) => {
  $modal.style.display = "none";
}
