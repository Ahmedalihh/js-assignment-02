var tableVale = +prompt("Enter Your Table Number ");
var start = +prompt("Enter Start Number ");

var end = +prompt("Enter End Number ");
if (start >= end) {
  alert("Your Start Number Is Greater than End Number");
} else {
  for (var a = start; a <= end; a++) {
    document.write(tableVale + "x" + a + "=" + tableVale * a + " </br>");
  }
}