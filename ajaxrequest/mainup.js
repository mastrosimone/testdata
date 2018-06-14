var xhr = new XMLHttpRequest(),
    method = "POST",
    url = "http://192.168.20.173:4000/teams";

xhr.open(method, url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.addEventListener('progress', function (x) {
    console.log('progress', x);
});

xhr.addEventListener('load', function (x) {
    console.log(x.target.response);
});

xhr.addEventListener('error', function (x) {
    console.log('error', x);
});

xhr.addEventListener('abort', function (x) {
    console.log('abort', x);
});

    function Submit(e) {
        
        event.preventDefault()
        console.log(e.target.value)
        var nome = document.querySelector('#name').value
        var city = document.querySelector('#city').value
        var category = document.querySelector('#category').value
        var data = {};
        data.name = nome;
        data.city = city;
        data.category = category;

        var json = JSON.stringify(data);

        xhr.send(json);

    }


    // var nome = document.querySelector('#name')
    // nome.addEventListener('keyup', Nome)
    // var city = document.querySelector('#city')
    // city.addEventListener('keyup', Nome)
    // var category = document.querySelector('#category')
    // category.addEventListener('keyup', Category)
    
    var submit = document.querySelector('#submit')
    submit.addEventListener('click', Submit)
;