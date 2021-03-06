// IIFE


/* var api = {
    en: {},
    it: {}
}; */

var api = {
    data: [
        {
            "interactions": {
                "reactions": 1,
                "comments": 0,
                "shares": 0
            },
            "q25": 74,
            "q50": 26,
            "q75": 14,
            "q100": 3,
            "q_complete": 3,
            "clicks": 1,
            "unique_views": 172,
            "reach": 1376,
            "platform": "instagram",
            "impressions": 1490,
            "coins": 230300,
            "earned_views": {
                "desktop": 0,
                "mobile": 171
            },
            "paid_views": {
                "desktop": 55631,
                "mobile": 55555
            },
            "date": "2018-03-14T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 22,
                "comments": 0,
                "shares": 0
            },
            "q25": 3918,
            "q50": 1267,
            "q75": 494,
            "q100": 269,
            "q_complete": 269,
            "clicks": 35,
            "unique_views": 7396,
            "reach": 18360,
            "platform": "facebook",
            "impressions": 21007,
            "coins": 0,
            "earned_views": {
                "desktop": 0,
                "mobile": 4847
            },
            "paid_views": {
                "desktop": 44,
                "mobile": 2853
            },
            "date": "2018-03-15T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 0,
                "comments": 0,
                "shares": 0
            },
            "q25": 390,
            "q50": 131,
            "q75": 90,
            "q100": 77,
            "q_complete": 77,
            "clicks": 12,
            "unique_views": 840,
            "reach": 912,
            "platform": "facebook",
            "impressions": 1576,
            "coins": 700,
            "earned_views": {
                "desktop": 0,
                "mobile": 1039
            },
            "paid_views": {
                "desktop": 48,
                "mobile": 388
            },
            "date": "2018-03-16T00:00:00.000Z"
        }
    ]
};
 
/* var Language = (function() {
    var currentLanguage = null;
    var languageElement = document.querySelector('#language-choice');

    languageElement.addEventListener('change', function(e) {
        currentLanguage = e.target.value;
    })

    return {
        get: function() {
            return currentLanguage;
        }
    };
})(document);

var Api = (function(api, language) {
    
    return {
        getApi: function()  {
            return api[language.get()];
        }
    };
})(api, Language);  */



var Platform = (function(api) {
    
    function getAllPlatforms() {
    
        var result = []
    
        for(x = 0;x < api.data.length;x++)
        {
            result.push(api.data[x].platform)
        }
        return result
    }
    
    return { 
       getAll: getAllPlatforms
    };
})(api);

console.log(Platform.getAll());



var Impressions = (function(api) {
    
    function getTotalImpressions() {
    
        var result = 0
    
        for(x = 0;x < api.data.length;x++){
        result += api.data[x].impressions
        }
        return result
    }
    
    return { 
       getAll: getTotalImpressions
    };
})(api);

console.log(Impressions.getAll());



var Clicks = (function(api) {
    
    function getTotalClicks(){
    
    var result = 0;
    
        for(x = 0;x < api.data.length;x++){
        result += api.data[x].clicks
        }
        return result
    }
    
    return { 
       getAll: getTotalClicks
    };
})(api);

console.log(Clicks.getAll());




var Render = (function() {
    // stampa sul dom
    
    return {
        
    };
})(api);

var Editor = (function() {
    // Creazione dom e stampa update dom

    return {
        
    };
})(api, Render);

var App = (function(doc) {
    document.addEventListener("DOMContentLoaded", function() {

        var workEl = doc.getElementById('workEl');

        workEl.innerHTML = "";

        var h3 = doc.createElement("h3");
        h3.textContent = Platform;
        h3.classList.add("WorkExperience-title");
        workEl.appendChild(h3);

        var div = doc.createElement("div");
        div.classList.add("WorkExperience-content");
        workEl.appendChild(div);

        var div2 = doc.createElement("div");
        div2.classList.add("WorkExperience-row");
        div.appendChild(div2);

        return console.log(workEl)
        {
        
        }
        
    });

})(document);

/* var App = (function(document, render, editor) {
    document.addEventListener("DOMContentLoaded", function() {
        
    });

})(document, Render, Editor); */