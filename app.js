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
