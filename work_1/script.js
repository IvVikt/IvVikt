/**********************************************************************/
/************************Создание карусели*****************************/
/**********************************************************************/

const arrFriends = [
    {id : 0, name : "Katrine", breed : "Pooch", age : "1 year"},
    {id : 1, name : "Jennifer", breed : "Pooch", age : "2 months"},
    {id : 2, name : "Woody", breed : "Pooch", age : "3 year"},
    {id : 3, name : "Charly", breed : "Pooch", age : "4 months"},
    {id : 4, name : "Sophia", breed : "Pooch", age : "2 months"},
    {id : 5, name : "Timmy", breed : "Pooch", age : "1 year"},
    {id : 6, name : "Scarlett", breed : "Pooch", age : "2 months"},
    {id : 7, name : "Freddie", breed : "Pooch", age : "3 months"}
];

function setPets(array){
    const list = document.getElementById("friends-list");
    for(let item of array){

        let span = document.createElement("span");
        span.setAttribute("id", "idPet");
        span.textContent = item.id;

        let image = document.createElement("img");
        image.setAttribute("src", `img/${item.name}.png`);
        image.setAttribute("alt", `img/${item.name}.png`);

        let heading = document.createElement("h4");
        heading.textContent = item.name;

        let button = document.createElement("button");
        button.setAttribute("class", "btn more");
        button.textContent = "Learn More";

        let box = document.createElement("div");
        box.setAttribute("class", "carousel-box");
        box.appendChild(span);
        box.appendChild(image);
        box.appendChild(heading);
        box.appendChild(button);

        let listItem = document.createElement("li");
        listItem.appendChild(box);

        list.appendChild(listItem);
    };
};

setPets(arrFriends);

/*******************************************************************/
/********************Движение карусели******************************/
/*******************************************************************/

const width = 320; 
let count = 1; 
let visible = 3;

const carousel = document.getElementById("carousel");

const list = carousel.querySelector("ul");
const listElems = carousel.querySelectorAll("li");

let position = 0; 

carousel.querySelector(".prev").addEventListener("click", function(){
    position += width * count;
    
    position = Math.min(position, 0)
    if(!list.style.marginLeft || list.style.marginLeft === "0px"){
        position = -width * (listElems.length - visible);
        list.style.marginLeft = position + "px";
    }
    else{
        list.style.marginLeft = position + "px";
    };
});

carousel.querySelector(".next").addEventListener("click", function() {
    position -= width * count;
    
    position = Math.max(position, -width * (listElems.length - count));
    if(list.style.marginLeft === (-width * (listElems.length - visible) + "px")){
        position = 0;
        list.style.marginLeft = position + "px";
    }
    else{
        list.style.marginLeft = position + "px";
    }
});

/************************Создание pop-up****************************/

function openPopUp(id){
    document.getElementById("petPhoto").setAttribute("src", `img/${arrFriends[id].name}.png`);
    document.getElementById("petPhoto").setAttribute("alt", `img/${arrFriends[id].name}.png`);
    document.getElementById("name").textContent = arrFriends[id].name;
    document.getElementById("breed").textContent = arrFriends[id].breed;
    document.getElementById("age").innerHTML = "<span>Age: </span>" + arrFriends[id].age;
};

/*******************************************************************/

/*******************************************************************/

const btnMore = document.getElementsByClassName("more");
const btnClose = document.querySelector(".pop-up-close");

for(let more of btnMore){
    more.addEventListener("click", function(e){   
    let id = parseInt(e.target.parentElement.querySelector("span").textContent);
    openPopUp(id); 
    document.querySelector(".pop-up-window").style.display = "block";  
    });
}

btnClose.addEventListener("click", function(){
    document.querySelector(".pop-up-window").style.display = "none";
});


