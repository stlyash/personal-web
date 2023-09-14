window.onload = function() {
  setTimeout(function() {
document.getElementById('circ').style.display='none';
document.getElementById('rest').style.display='block';
document.body.style.overflowY = "visible";
}, 3000); //there was 3000
};
  // Get a reference to the iframe
  var iframe = document.getElementById('contform');

  // Check if the iframe has loaded
  iframe.addEventListener('load', function () {
    // Access the iframe's content document
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Get the form element within the iframe
    var form = iframeDoc.getElementById('contact-form'); // Replace with your form's ID
    var thank = document.getElementById('thank');
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      iframe.style.display='none';
      thank.removeAttribute("hidden");
    });
  });






window.addEventListener('scroll', function() {
  var eduframe = document.querySelector('.scroll-container');
  var eduframe2 = document.querySelector('.scroll-container2');
  var recta = eduframe.getBoundingClientRect();
  if (recta.top <= window.innerHeight && recta.bottom >= window.innerHeight) {
    eduframe.classList.add('show');
    eduframe2.classList.add('show');
  }
});

window.addEventListener('scroll', function() {
  var eduframe = document.querySelector('.scroll-container');
  var eduframe2 = document.querySelector('.scroll-container2');
  var recta2 = eduframe2.getBoundingClientRect();
  if (recta2.top <= window.innerHeight && recta2.bottom >= window.innerHeight) {
    eduframe2.classList.add('show');
    eduframe.classList.add('show');
  }
});



var imge = document.getElementById("res");

if (/Mobi/.test(navigator.userAgent)) {
    // Code to run if the page is being viewed on a phone
    imge.height=400;
  } else {
    // Code to run if the page is being viewed on a non-phone device
    imge.height=1100;
  }

var salTransx = 24;

function zoomInd()
{
    var img = document.getElementById("cover-image");
    img.style.transform='scale('+4+') translate('+-17+'%, '+15+'%)';

    var sal = document.getElementById("salutation");
    sal.style.transform='scale('+0.8+') translate('+(-1*salTransx)+'%, '+0+'%)';
    sal.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    
}
function zoomoInd()
{
    
    var img = document.getElementById("cover-image");
    img.style.transform='scale('+1+')';

    var sal = document.getElementById("salutation");
    sal.style.transform='scale('+1+') translate('+(salTransx-24)+'%, '+0+'%)';
    sal.style.backgroundColor='rgba(0, 0, 0, 0.3)';
    
}
