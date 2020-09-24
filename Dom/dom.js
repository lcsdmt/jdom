document.addEventListener("DOMContentLoaded", function (event) {

    let btn = document.createElement('button')
    let btnText = document.createTextNode("Click Me")

    document.body.appendChild(btn);
    btn.appendChild(btnText);

    btn.addEventListener('click', function () {

        alert("you're pretty");

    });

    let btn2 = document.getElementsByClassName('btn2')[0]
    //name returns an array so you need to specifiy where in the array.
    //only 1 class name so [0]

    btn2.addEventListener('click', function () {
        let textBoxInput = document.getElementById("textBox").value;
        alert(textBoxInput);
    });

    let getDiv1 = document.getElementById('div1')

    getDiv1.addEventListener("mouseover", function (element) {
        element.target.style.backgroundColor = "red";
    })

    getDiv1.addEventListener("mouseout", function (element) {
        element.target.style.backgroundColor = "transparent";
    })

    let p1 = document.createElement('p')
    let p1Text = document.createTextNode("im blue da ba dee da ba die")
    document.body.appendChild(p1)
    p1.appendChild(p1Text)

    p1.addEventListener("click", function () {
        p1.style.color = getRandomColor()
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let btn3 = document.createElement('button')
    let btn3Text = document.createTextNode('Lucas Domit')
    let newDiv = document.createElement('div')
    document.body.appendChild(btn3)
    btn3.appendChild(btn3Text)
    document.body.appendChild(newDiv)

    btn3.addEventListener('click', function () {
        let myNameSpan = document.createElement('span')
        let myNameSpanText = document.createTextNode('Lucas Domit')
        newDiv.appendChild(myNameSpan)
        myNameSpan.appendChild(myNameSpanText)
    })

    let btn4 = document.getElementById("btn4")

    //     let friends = [document.createTextNode('imaginery1'),
    //     document.createTextNode('imaginery2'),
    //     document.createTextNode('imaginery3'),
    //     document.createTextNode('imaginery4'),
    //     document.createTextNode('imaginery5'),
    //     document.createTextNode('imaginery6'),
    //     document.createTextNode('imaginery7'),
    //     document.createTextNode('imaginery8'),
    //     document.createTextNode('imaginery9'),
    //     document.createTextNode('imaginery10')
    // ]



    let friends = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    let count = 0
    btn4.addEventListener('click', function () {
        if (count<friends.length) {
         let randomFriend = Math.floor(Math.random() * friends.length);
         //i read random when it wasnt there and just ran with it
         let ul = document.getElementById('ul');
         let li = document.createElement('li');
         ul.appendChild(li);
         li.appendChild(document.createTextNode(friends[randomFriend]));
        count ++;
        }
    })

});