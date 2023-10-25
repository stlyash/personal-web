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

window.addEventListener('scroll', function() {
  var eduframe = document.querySelector('.scroll-container');
  var eduframe3 = document.querySelector('.scroll-container3');
  var recta3 = eduframe3.getBoundingClientRect();
  if (recta3.top <= window.innerHeight && recta3.bottom >= window.innerHeight) {
    eduframe3.classList.add('show');
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



// Drop down of certifications
var cardHeader4 = document.getElementById('headingFour');
cardHeader4.addEventListener('click', function() {
var collapsible4 = document.getElementById('collapseFourButton');
collapsible4.click();
});

var cardHeader3 = document.getElementById('headingThree');
cardHeader3.addEventListener('click', function() {
var collapsible3 = document.getElementById('collapseThreeButton');
collapsible3.click();
});

var cardHeader2 = document.getElementById('headingTwo');
cardHeader2.addEventListener('click', function() {
var collapsible2 = document.getElementById('collapseTwoButton');
collapsible2.click();
});

var cardHeader1 = document.getElementById('headingOne');
cardHeader1.addEventListener('click', function() {
var collapsible1 = document.getElementById('collapseOneButton');
collapsible1.click();
});

// Making the nav bar names bold on scroll
var collapsed = 0;
// Script for bolding the navbar text when corresponding part is scrolled on
window.addEventListener('scroll', function() {

const master = document.querySelector(".fronttopb");
const firstel = document.querySelector(".shadowtopb");
const secondel = document.querySelector(".edgetopb");
const thirdel = document.querySelector(".buttontopb");

firstel.style.width = master.offsetWidth + "px";
secondel.style.width = master.offsetWidth + "px";
thirdel.style.width = master.offsetWidth + "px";





  var textElement1 = document.querySelector('#whole-experience');
  var rect1 = textElement1.getBoundingClientRect();
  var navInd1 = document.getElementById("nav-exp");
  
  if (rect1.top <= window.innerHeight && rect1.bottom >= window.innerHeight) {
    navInd1.style.fontWeight = "bold";
  } else {
    navInd1.style.fontWeight = "normal";
  }
});

window.addEventListener('scroll', function() {
  var textElement2 = document.querySelector('#all-educations');
  var rect2 = textElement2.getBoundingClientRect();
  var navInd2 = document.getElementById("nav-edu");
  if (rect2.top <= window.innerHeight && rect2.bottom >= window.innerHeight-120) {
    navInd2.style.fontWeight = "bold";
  } else {
    navInd2.style.fontWeight = "normal";
  }
});

window.addEventListener('scroll', function() {
  var navInd3 = document.getElementById("nav-home");
  if (window.pageYOffset === 0) {
    navInd3.style.fontWeight = "bold";
  } else {
    navInd3.style.fontWeight = "normal";
  }
});

window.addEventListener('scroll', function() {
  var textElement5 = document.querySelector('#all-projects');
  var rect5 = textElement5.getBoundingClientRect();
  var navInd5 = document.getElementById("nav-project");
  if (rect5.top <= window.innerHeight && rect5.bottom >= window.innerHeight) {
    navInd5.style.fontWeight = "bold";
  } else {
    navInd5.style.fontWeight = "normal";
  }
});

window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#a-resume');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-resume");
  if (rect6.top <= window.innerHeight-400 && rect6.bottom >= window.innerHeight-100) {
    navInd6.style.fontWeight = "bold";
  } else {
    navInd6.style.fontWeight = "normal";
  }
});
window.addEventListener('scroll', function() {
  var textElement7 = document.querySelector('#connect');
  var rect7 = textElement7.getBoundingClientRect();
  var navInd7 = document.getElementById("nav-contact");
  if (rect7.top <= window.innerHeight-200 && rect7.bottom >= 0) {
    navInd7.style.fontWeight = "bold";
  } else {
    navInd7.style.fontWeight = "normal";
  }
});

window.addEventListener('scroll', function() {
  var textElement = document.querySelector('#whole-certifications');
  var rect = textElement.getBoundingClientRect();
  var navInd = document.getElementById("nav-cert");
  
  if (rect.top <= window.innerHeight && rect.bottom >= window.innerHeight-60) {
    navInd.style.fontWeight = "bold";

    
    if(collapsed==0)
    {
    // Code to expand the first collapsible automatically
    // Function to expand the collapsible element
    function expandCollapsible() {
  // Find the button element by its ID
  var button = document.getElementById('collapseOneButton');

  // Programmatically press the button
  button.click();
    }
    // Delay the expansion after 2 seconds
    setTimeout(expandCollapsible, 1000);
    collapsed=1;
    }

  } else {
    navInd.style.fontWeight = "normal";
  }
});


// Scroll to top button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// PDF download try
function downloadPDF() {
  var link = document.createElement('a');
  link.href = 'https://docs.google.com/document/d/1oPHBR7crOcbPcvlmqdAeCYk6LepS2qa9BB-LuHM5ijI/edit?usp=sharing';
  link.target='_blank';
  link.click();
}


// Footer text copying functions
function copyText() {
  /* Select text area by id*/
  var Text = document.getElementById("cont-email").value;
  navigator.clipboard.writeText(Text);
  document.getElementById("em-cpy").src="footer_assets/done.png";
  setTimeout(function() {
    document.getElementById("em-cpy").src="footer_assets/copy.png";
  }, 3000); 
}

function copyText1() {
var Text = document.getElementById("cont-mob").value;
navigator.clipboard.writeText(Text);
document.getElementById("ph-cpy").src="footer_assets/done.png";
setTimeout(function() {
  document.getElementById("ph-cpy").src="footer_assets/copy.png";
}, 3000); 
}