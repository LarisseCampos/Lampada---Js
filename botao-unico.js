const turnOn = document.getElementById('turOn');
const lampada = document.getElementById('lamp');


function isLampBroken (){
    return lampada.src.indexOf( 'quebrada' ) > -1;
}

function lampOn (){
    if ( !isLampBroken () ){
        lampada.src = './img/ligada.jpg';
    }
}

function lampOff (){
    if ( !isLampBroken () ){
        lampada.src = './img/desligada.jpg';
    }
}

function changeButton(){

}

turnOn.addEventListener ( 'click', lampOn );
turnOn.addEventListener (' onclick', changeButton );
turnOff.addEventListener ( 'click',lampOff );
lampada.addEventListener('dblclick', lampBroken);