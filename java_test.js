function scriptLoad() {
  alert('Script Loaded');
}

function addition() {
  var num1 = 5;
  var num2 = 6;
  var num3 = num1 + num2;

  alert(num3);
}



function print5() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
}

print5();
print5();

function myClickFunction() {
  var element = document.getElementById('pageheading');
  element.firstChild.nodeValue = 'New Heading';
  var element = document.getElementById('myinput');
  var div = document.getElementById('result');
  div.firstChild.nodeValue = element.value;
}

function updateP() {
  var element = document.getElementById('paragraph');
  element.firstChild.nodeValue = 'New Paragraph Text';
}

function myLoadFunction() {
  var element = document.getElementById('pageheading');
  element.addEventListener('click', myClickFunction);

  var element = document.getElementById('paragraph');
  element.addEventListener('click', updateP);

var element = document.getElementById('mybutton');
element.addEventListener('click', myClickFunction);

}


document.addEventListener('DOMContentLoaded', myLoadFunction);

function displayName() {
  var element = document.getElementById('myinput');
  alert(element.value);
}
