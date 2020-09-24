$(document).ready(function () {
    let $btn1 = $('<button>GO AWAY</button>')
    $btn1.click(function () {
        alert("Why are you still here?")
    });

    $('body').append($btn1)

    $('#btn2').click(function () {
        let textBoxInput = $('#textBox').val();
        alert(textBoxInput)
    });

    let colorArray = ["red", "blue", "purple", "green"]


    // fix div placement
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

    $p1.click(function () {
        let randomNum = Math.floor(Math.random() * colorArray.length);
        $p1.css({
            color: colorArray[randomNum]
        })
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let $btn3 = $('<button>span</button>')
    $('body').append($btn3)

    let $spanDiv = $('<div></div>')
    $('body').append($spanDiv)

    $btn3.click(function () {
        let $span = $('<span>leroy jankins</span>')
        $spanDiv.append($span)
    });



    let $someFriends = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    let $btn4 = $('#friends');
   
    let count = 0


    $btn4.click(function () {
        if (count < $someFriends.length) {
            let randomFriend = Math.floor(Math.random() * $someFriends.length);
            let $li = $('<li>' + $someFriends[randomFriend] + '</li>');
            $('ul').append($li);
            count++;
        }
    });









});