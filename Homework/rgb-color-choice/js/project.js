document.getElementById('color-button').onclick = changeColor;

function changeColor (){

    //variables
    var one = document.getElementById('red').value;
    var two = document.getElementById('green').value;
    var three = document.getElementById('blue').value;
    var bg = 'rgb' + '(' + one + ',' + two + ',' + three + ')';
    var backgroundWrapper = document.getElementById('wrapper').style.background = bg;
    var white = 'rgb(255,255,255)';

    // Method to change #colorful-text
    document.getElementById('colorful-text').innerHTML = bg;

    // Conditional loop for text color
    if (backgroundWrapper === white){
        document.querySelector('body').style.color = 'black';
    }
}
