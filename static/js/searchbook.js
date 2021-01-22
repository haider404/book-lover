/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}

function filterFunction() {
  var isbn, filter, ul, li, a, i;
  isbn = document.getElementById("isbn");
  filter = isbn.value.toUpperCase();
   div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter1) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}