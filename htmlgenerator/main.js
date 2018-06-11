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
        img.setAttribute("alt", "alternative text!");
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
        h4.textContent = works.data[i].title;
        var p = document.createElement("p")
        p.textContent = works.data[i].description;

        div2.appendChild(h4);
        div2.appendChild(p);
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

document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', function(e) {
        var value = e.target.value;
        render(value);
    })
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

for (var i = 0; i < dataLength; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i);
    option.textContent = api.en.works.data[i].title;
    select.appendChild(option);
}

var mod_form = document.querySelector('#mod_work')

var exp_lavorativa = document.querySelector("#exp_lavorativa");
var exp_lavorativa_descr = document.querySelector("#exp_lavorativa_descr");


//da completare
mod_form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (select.value == 'new')
    {

    } else {
    api.en.works.data[select.value].title = exp_lavorativa.value;
    api.en.works.data[select.value].description = exp_lavorativa_descr.value;
    printWorkExperience(api.en.works);
}

});









// var name = nome.nome;
// var cognome = cognome.cognome;

});  
