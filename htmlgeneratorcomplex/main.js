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
        login.setAttribute("onclick", "document.getElementById('id01').style.display='block'");
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
        var p = document.createElement("p");
        p.setAttribute("class", "workexperience");
        p.textContent = works.data[i].description;

        div2.appendChild(h4);
        div2.appendChild(p);
    }




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

document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', function(e) {
        var value = e.target.value;
        render(value);
    })
});  
