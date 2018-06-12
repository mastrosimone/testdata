/**
 * It should print menu .Header-nav-el elements inside #menu
 *
 * <li class="Header-nav-el">
 *     <a href="#menu1">Menu 1</a>
 * </li>
 * 
 * @param menu
 * 
 * @return {undefined}
 */



function printMenu(menu) { 
    var menuEl = document.getElementById('menuEL');

    menuEL.innerHTML = "";

    var dataLength = menu.data.length;

    for (var i = 0; i < dataLength; i++) {
        var li = document.createElement("li");
        li.classList.add("Header-nav-el");

        var a = document.createElement("a");
        a.setAttribute("href", menu.data[i].href);
        a.textContent = menu.data[i].label;
        
        

        
        li.appendChild(a);

        menuEl.appendChild(li);

    }
    var li = document.getElementById("MenuEL")
    var li = document.createElement("li");
    var login = document.createElement("a");
        login.setAttribute("href", "#");
        login.setAttribute("onclick", "document.getElementById('edit').style.display='block'");
        login.textContent = "Login";
        li.classList.add("Header-nav-el");
        li.appendChild(login);
        menuEl.appendChild(li);
}

/**
 * It should print inside #personalEl
 * 
 * <div class="PersonalInfos-image">
 *     <img src="https://www.placecage.com/500/500" alt="">
 * </div>
 * <div class="PersonalInfos-content">
 *     <h1>Name Surname</h1>
 *     <h2>Job position</h2>
 *     <ul class="PersonalInfos-skills">
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#... n</li>
 *     </ul>
 * </div>
 * 
 * @return {undefined}
 */
function printPersonalInfos(personal) {
    var personalEl = document.getElementById('personalEl');

        personalEl.innerHTML = "";

        var div = document.createElement("div");
        div.classList.add("PersonalInfos-image");
        personalEl.appendChild(div);

        var img = document.createElement("img");
        img.setAttribute("src", personal.data.img);
        img.setAttribute("onclick", "document.getElementById('id01').style.display='block'");
        img.setAttribute("alt", "alternative text!");
        img.setAttribute("id", "profile_photo");
        div.appendChild(img);


        var div = document.createElement("div");
        div.classList.add("PersonalInfos-content");
        personalEl.appendChild(div);

        var h1 = document.createElement("h1");
        h1.textContent = personal.data.firstname + ' ' + personal.data.surname;
        div.appendChild(h1)

        var h2 = document.createElement("h2")
        h2.textContent = personal.data.position
        div.appendChild(h2)

        var ul = document.createElement("ul");
        ul.setAttribute("class", "PersonalInfos-skills");
        div.appendChild(ul);





        var dataLength = personal.data.skills.length;
    
        for (var i = 0; i < dataLength; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "skill")
            li.textContent = personal.data.skills[i];
    
            ul.appendChild(li);
        }


        
    }


/**
 * It should print inside #workEl
 *
 * <h3 class="WorkExperience-title">Work Experience</h3>
 * <div class="WorkExperience-content">
 *     <div class="WorkExperience-row">
 *         <h4>Job Title</h4>
 *         <p>...</p>
 *     </div>
 * </div>
 * 
 * @return {undefined}
 */


function printWorkExperience(works) {
    var workEl = document.getElementById('workEl');

    workEl.innerHTML = "";

    var h3 = document.createElement("h3")
    h3.textContent = works.section.title
    h3.classList.add("WorkExperience-title");
    workEl.appendChild(h3)

    var div = document.createElement("div");
    div.classList.add("WorkExperience-content");
    workEl.appendChild(div);

    var div2 = document.createElement("div");
    div2.classList.add("WorkExperience-row");
    div.appendChild(div2);


    var dataLength = works.data.length;

    for (var i = 0; i < dataLength; i++) {
        var h4 = document.createElement("h4");
        h4.setAttribute("class", "workexperience");
        h4.textContent = works.data[i].title; 
        h4.addEventListener('click', function(){
            document.getElementById('edit').style.display='block';
            placeholder();
        });
        h4.setAttribute("id", i);
        var p = document.createElement("p");
        p.setAttribute("class", "workexperience");
        p.textContent = works.data[i].description;
        p.setAttribute("onclick", "document.getElementById('edit').style.display='block'");

        div2.appendChild(h4);
        div2.appendChild(p);
    }




}

function placeholder() {
    // var dataLength = api.en.works.data.length;
    document.getElementById("modifica").value = api.en.works.data[0].title;
    document.getElementById("modifica_descr").value = api.en.works.data[0].description;
}


function blur() {

    var blur = document.getElementById('blur');

    blur.classList.add("blur");

}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV DON'T TOUCH THIS VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV


function render(locale) {
    if ({}.hasOwnProperty.call(api, locale)) {
        if ({}.hasOwnProperty.call(api[locale], 'menu')) {
            printMenu(api[locale].menu);
        }

        if ({}.hasOwnProperty.call(api[locale], 'personal')) {
            printPersonalInfos(api[locale].personal);
        }

        if ({}.hasOwnProperty.call(api[locale], 'works')) {
            printWorkExperience(api[locale].works);
        }
    } else {
        alert('Please fill api data with the ' + locale.toUpperCase() + ' object');
    }
}

function change(e) {
    var value = e.target.value;
        render(value);
};

document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', change)

// inizio modifiche
    // var el = document.querySelector("button");

// el.addEventListener("click", function(e) {
//     console.log(e.targer);
//     console.log(e.type);
    
//     e.preventDefault();
// });

var form = document.querySelector("form");

form.addEventListener("keyup", function(e) {
    e.preventDefault();
    api[lang.value].personal.data.surname = cognome.value;
    api[lang.value].personal.data.firstname = nome.value;
    api[lang.value].personal.data.position = position.value;
    printPersonalInfos(api[lang.value].personal);
});

var nome = document.querySelector("#nome");
var cognome = document.querySelector("#cognome");

// inizio workexprerience

var dataLength = api.en.works.data.length;
var select = document.getElementById('select');
var i = 0;

for (i; i < dataLength; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i);
    option.textContent = api.en.works.data[i].title;
    select.appendChild(option);
}

var mod_form = document.querySelector('#mod_work')

var exp_lavorativa = document.querySelector("#exp_lavorativa");
var exp_lavorativa_descr = document.querySelector("#exp_lavorativa_descr");

//test modifica con modal unico
var modifica = document.querySelector("#modifica");
var modifica_descr = document.querySelector("#modifica_descr");
var form = document.querySelector('#edit_form');
var span = document.querySelector('.close');


span.addEventListener("click", function(e) {
    
    document.getElementById('edit').style.display='none';
});


form.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        document.getElementById('edit').style.display='none';
        return false;
    }
});

// da definire



modifica.addEventListener("keyup", function(e) {
    e.preventDefault();
    api[lang.value].works.data[0].title = modifica.value;
    printWorkExperience(api[lang.value].works);
    
})
modifica_descr.addEventListener("keyup", function(e) {
    e.preventDefault();
    api[lang.value].works.data[0].description = modifica_descr.value;
    printWorkExperience(api[lang.value].works);
    
}

// mod_form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if (select.value == 'new'){
//         var element = {}, data = [];
//         element.title = exp_lavorativa.value;
//         element.description = exp_lavorativa_descr.value;
//         data.push(element);
//         api[lang.value].works.data.push(element);
//         printWorkExperience(api[lang.value].works);

//     } else {
//     api[lang.value].works.data[select.value].title = exp_lavorativa.value;
//     api[lang.value].works.data[select.value].description = exp_lavorativa_descr.value;
//     printWorkExperience(api[lang.value].works);
// }}

);

});  