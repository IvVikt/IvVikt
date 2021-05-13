/**********************************************************************/
/******************Создание карусели разработчиков*********************/
/**********************************************************************/

const arrDev = [
    {name : "Md. Khalil Uddin", post : "Head of Ideas", photo : "uddin.png"},
    {name : "Rubel Miah", post : "Lead WordPress Developer", photo : "miah.png"},
    {name : "Shamim Mia", post : "Sr. Web Developer", photo : "mia.png"},
    {name : "John Doe", post : "Front-end Developer", photo : "doe.png"},
    {name : "Miah", post : "Lead WordPress Developer", photo : "miah.png"},
    {name : "Doe", post : "Front-end Developer", photo : "doe.png"},
    {name : "Md. Uddin", post : "Head of Ideas", photo : "uddin.png"},
    {name : "Shamim", post : "Sr. Web Developer", photo : "mia.png"},
];

function setDev(array){
    let gallery = document.getElementById("gallery");
    let list = document.createElement("ul");
    list.setAttribute("class", "dev-list");
    for(let item of array){

        let image = document.createElement("img");
        image.setAttribute("src", `img/${item.photo}`);
        image.setAttribute("alt", `img/${item.photo}`);

        let heading = document.createElement("h4");
        heading.textContent = item.name;

        let paragraph = document.createElement("p");
        paragraph.textContent = item.post;

        let social = document.createElement("div");
        social.setAttribute("class", "social");

        let soc = ["facebook", "twitter", "google", "in"];

        for(let elem of soc){
            let div = document.createElement("div");
            div.setAttribute("class", elem);
            social.appendChild(div);
        }

        let bg = document.createElement("div");
        bg.setAttribute("class", "bg-photo");
        bg.appendChild(social);

        let li = document.createElement("li");
        li.appendChild(image);
        li.appendChild(heading);
        li.appendChild(paragraph);
        li.appendChild(bg);

        list.appendChild(li);
    };

    gallery.appendChild(list);
};

setDev(arrDev);

/*******************************************************************/
/********************Движение карусели******************************/
/*******************************************************************/

const width = 293; // ширина картинки
let count = 2; // видимое количество изображений
let visible = 4;

const carousel = document.getElementById("carousel");

const list = carousel.querySelector("ul");
const listElems = carousel.querySelectorAll("li");

console.log(listElems.length);

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    
    if(list.style.marginLeft === "0px"){
        position = -width * (listElems.length - visible);
        list.style.marginLeft = position + "px";
    }
    else{
        list.style.marginLeft = position + "px";
    }
};

carousel.querySelector(".next").onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));

    if(list.style.marginLeft === (-width * (listElems.length - visible) + "px")){
        position = 0;
        list.style.marginLeft = position + "px";
    }
    else{
        list.style.marginLeft = position + "px";
    }

    
};

/*******************************************************************/
/********************Создание галереи работ*************************/
/*******************************************************************/

    const branding = [
        {section: "Branding", name: "Hair Dresser", img: "work_1"},
        {section: "Branding", name: "Photo Camera", img: "work_4"},
        {section: "Branding", name: "Bicycle", img: "work_5"}];

    const design = [
        {section: "Design", name: "Design Work 1", img: "work_2"},
        {section: "Design", name: "Design Work 2", img: "work_9"}];

    const development = [
        {section: "Development", name: "Mobile Application", img: "work_3"},
        {section: "Development", name: "Desktop Application", img: "work_7"}];

    const strategy = [
        {section: "Strategy", name: "Strategy A", img: "work_6"},
        {section: "Strategy", name: "Strategy B", img: "work_8"}];

    const all = [branding, design, development, strategy];

    let gallery = document.querySelector(".gallery-works");

function createWork(name, section, img){
    let heading = document.createElement("h3");
    heading.textContent = name;

    let p = document.createElement("p");
    p.textContent = section;

    let button = document.createElement("button");
    button.textContent = "View";

    let bgWork = document.createElement("div");
    bgWork.setAttribute("class", "bg-work");
    bgWork.appendChild(heading);
    bgWork.appendChild(p);
    bgWork.appendChild(button);

    let image = document.createElement("img");
    image.setAttribute("src", `img/${img}.jpg`);
    image.setAttribute("alt", `img/${img}.jpg`);

    let work = document.createElement("div");
    work.setAttribute("class", "work");
    work.appendChild(image);
    work.appendChild(bgWork);

    return work;
};

function createGallerySection(array){
    for(let elem of array){
        createWork(elem.name, elem.section, elem.img);
        gallery.appendChild(createWork(elem.name, elem.section, elem.img));
    }
};

function createGalleryWork(array){
    for(let section of array){
        createGallerySection(section);
    }
    document.querySelector(".section-work").style.color = "var(--color-dark-red)";
};

function choiseSectionWork(){
    let sectionWork = document.getElementsByClassName("section-work");
    for(let section of sectionWork){
        section.addEventListener("click", function(e){
            for(let section of sectionWork){
                section.removeAttribute("style");
            }
            switch(e.target.textContent){
                case "All":
                    gallery.innerHTML = "";
                    createGalleryWork(all);
                    e.target.style.color = "var(--color-dark-red)"
                    break;
                case "Branding":
                    gallery.innerHTML = "";
                    createGallerySection(branding);
                    e.target.style.color = "var(--color-dark-red)"
                    break;
                case "Design":
                    gallery.innerHTML = "";
                    createGallerySection(design);
                    e.target.style.color = "var(--color-dark-red)"
                    break;
                case "Development":
                    gallery.innerHTML = "";
                    createGallerySection(development);
                    e.target.style.color = "var(--color-dark-red)"
                    break;
                case "Strategy":
                    gallery.innerHTML = "";
                    createGallerySection(strategy);
                    e.target.style.color = "var(--color-dark-red)"
                    break;
            };
        });
    };
};

createGalleryWork(all);
choiseSectionWork();

