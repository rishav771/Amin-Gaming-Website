var element = document.getElementsByClassName('chart');
for (var i = 0 ; i < element.length; i++) {
    var percent =  element[i].getAttribute('value');
    var stroke = 5;
    var spanelement = document.createElement('span');
    spanelement.classList.add("rating-number")
    spanelement.textContent = percent/10;
    element[i].appendChild(spanelement);
    var canvaselement = document.createElement('canvas');
    var canvascontext = canvaselement.getContext('2d');
    canvaselement.width = 70 ;
    canvaselement.height = 70 ;
    element[i].appendChild(canvaselement);
    canvascontext.translate(35, 35); 
    canvascontext.rotate(-0.5 * Math.PI);
    var radius = (65) / 2;
    
    var rating = function(color, stroke, p) {
            canvascontext.beginPath();
            canvascontext.arc(0, 0, radius, 0, Math.PI*2*p, false);
            canvascontext.strokeStyle = color;
            canvascontext.lineWidth = stroke;
            canvascontext.stroke();
    };
    rating('#555555', 3, (100 / 100));
    rating('#FF0000', 3, (percent / 100));
}


/*---------------------for hamburger menue----------------*/ 

function toggelHamburger() {
    var menucollection = document.getElementsByClassName('side');
    var hamburger = menucollection[0];
    hamburger.classList.toggle('display-block-class');
    var shadecollection = document.getElementsByClassName('shade');
    var shadedBack = shadecollection[0];
    shadedBack.classList.toggle('display-block-class');
}

// login page.................................

function handelLoginClick() {
    var logincollection = document.getElementsByClassName('temp');
    var login = loginp[0];
    login.classList.toggle('display-block-class');
}

//search bar........................................

function handelSearchClick() {
    var searchcollection = document.getElementsByClassName('temp');
    var searchbar = loginp[1];
    searchbar.classList.toggle('display-block-class');
}
