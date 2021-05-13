
$('#burger').click(function(){
    if($("#menu").css("display") === "none"){
        $("#menu").css("display", "flex");}
    else{$("#menu").css("display", "none");}
});


function setHeroName(){
    
    const arrName = "Малахов Иван".split("");
    const elem = document.querySelector(".hero-name");
    let i = 0;
    setTimeout(ss, 250);
    function ss(){
        elem.append(arrName[i]);
        i++;
        if(arrName.length > i){
            setTimeout(ss, 250);
        }
    }
    
};

setHeroName();

/*************************************/

const color = ["red", "yellow", "green", "blue"];

function createTriangle(){
    let figure = document.createElement("div");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    svg.setAttribute("viewBox", "0 0 15 15");
    polygon.setAttribute("class", "triangle");
    polygon.setAttribute("points", "1,12.5 7.5,1.6 14,12.5");
    polygon.style.fill = "none";
    polygon.style.stroke = color[getRandomInRange(0, 3)];
    svg.appendChild(polygon);
    figure.appendChild(svg);
    return figure;
}

function createRectangle(){
    let figure = document.createElement("div");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    svg.setAttribute("viewBox", "0 0 15 15");
    rectangle.setAttribute("class", "rectangle");
    rectangle.setAttribute("x", "1");
    rectangle.setAttribute("y", "1");
    rectangle.setAttribute("width", "13");
    rectangle.setAttribute("height", "13");
    rectangle.style.fill = "none";
    rectangle.style.stroke = color[getRandomInRange(0, 3)];
    svg.appendChild(rectangle);
    figure.appendChild(svg);
    return figure;
}

function createCircle(){
    let figure = document.createElement("div");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.setAttribute("viewBox", "0 0 15 15");
    circle.setAttribute("class", "circle");
    circle.setAttribute("cx", "7.5");
    circle.setAttribute("cy", "7.5");
    circle.setAttribute("r", "6.5");
    circle.style.fill = "none";
    circle.style.stroke = color[getRandomInRange(0, 3)];
    svg.appendChild(circle);
    figure.appendChild(svg);
    return figure;
}

const box = document.querySelector("header");

function createFigure(number){
    for(let i = 0; i < number; i++){
        let figure;
        switch(getRandomInRange(1, 3)){
            case 1:
                figure = createTriangle();
                break;
            case 2:
                figure = createRectangle();
                break;
            case 3:
                figure = createCircle();
                break;
        }
        figure.setAttribute("class", "figure");
        figure.style.top = Math.floor(Math.random()*90) + 1 +"%";
        figure.style.left = Math.floor(Math.random()*90) + 1 +"%";
        box.appendChild(figure);
      }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveFunc(){
    let figures = document.getElementsByClassName("figure");
    box.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        for(let fg of figures){  
        fg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        }
    });
}

createFigure(12);
moveFunc();

/**********************************************************/

const contacts = document.getElementById("contacts");
contacts.addEventListener('click', function(){
    document.getElementById("contact-box").style.display = "flex";
});

const btnFormClose = document.getElementById("form-btn-close");
btnFormClose.addEventListener('click', function(){
    document.getElementById("contact-box").style.display = "none";
});

const about = document.getElementById("about");
about.addEventListener('click', function(){
    document.getElementById("about-box").style.display = "flex";
});

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener('click', function(){
    document.getElementById("about-box").style.display = "flex";
});

const btnAboutClose = document.getElementById("about-btn-close");
btnAboutClose.addEventListener('click', function(){
    document.getElementById("about-box").style.display = "none";
});

/******************************************************************/
/*********************Форма обратной связи*************************/
/******************************************************************/

const btnSend = document.getElementById("send-btn");
const btnMessageClose = document.getElementById("snd-message-close");
const mesWind = document.querySelector(".send-message");

function messageWindow(text){
    document.querySelector(".snd-message").textContent = text;
    mesWind.style.display = "flex";
}

btnSend.addEventListener("click", function(){

    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-e-mail").value;
    let message = document.getElementById("input-message").value;

    const request = new XMLHttpRequest();
    const url = "post.php";
    const params = JSON.stringify({"name": name,
                    "email": email,
                    "message": message});
    
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("readystatechange", function(){
        if(request.readyState === 4 && request.status === 200){

            let obj = request.responseText;
            if(obj == "true"){
                messageWindow("Сообщение отправлено!");
            }
            else{
                messageWindow("Сообщение НЕ отправлено!");
            }

        }
    });

    request.send(params);

    document.getElementById("input-name").value = "";
    document.getElementById("input-e-mail").value = "";
    document.getElementById("input-message").value = "";
})

btnMessageClose.addEventListener('click', function(){
    document.querySelector(".send-message").style.display = "none";
});