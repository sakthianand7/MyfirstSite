var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/111.jpg') {
      myImage.setAttribute ('src','images/222.jpg');
    } else {
      myImage.setAttribute ('src','images/111.jpg');
    }
}
function setUserName() {
  var myName = prompt('Tyyyyy');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Tyrion lannister ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'sakthi orton' + storedName;
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}