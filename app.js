document.addEventListener("DOMContentLoaded", function() {
      document.getElementById('circ').style.display='none';
      document.getElementById('rest').style.display='block';
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

