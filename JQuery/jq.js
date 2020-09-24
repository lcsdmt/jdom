$(document).ready(function () {
    let $btn1 = $('<button>GO AWAY</button>')
    $btn1.click(function () {
        alert("Why are you still here?")
    });

    $('body').append($btn1)

    $('#btn2').click(function () {
        let textBoxInput = $('#textBox').value;
        alert(textBoxInput)
    });

    let colorArray = ["red", "blue", "purple", "green"]
    let $div1 = $('#div1')

    
    $div1.mouseover(function () {
        let randomNum = Math.floor(Math.random() * colorArray.length);
        $div1.css({
            backgroundColor: colorArray[randomNum]
        })
    });

    $div1.mouseout(function () {
        $div1.css({
            backgroundColor: "transparent"
        })
    });

let $p1 = $('<p>maya hee maya hi maya ho maya ha ha </p>')
$('body').append($p1)

$p1.click(function(){
    $p1.css({color: getRandomColor()
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

});