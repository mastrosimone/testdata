var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://192.168.20.173:8888/data.json";

xhr.open(method, url, true);


// function getUrl()
// {  
//     var result = 0;
    
//     for(x = 0;x < xhr.length;x++)
//         {
//         result += xhr[x].html_url
        
//         }
//     return result
// }


function List(data) {

        var result =[]
        var index = document.getElementById('index')
        index.innerHTML = ""

        console.log(index)
        var div = document.createElement("div")
        index.appendChild(div)
        for(i = 0;i < data.length;i++){
        url = result.push(data[i].url)
    }
        for(i = 0;i < data.length;i++)
        url = result.push(data[i].url)
        var div = document.createElement("div")
        div.classList.add("div_img");
        var img = document.createElement("img")
        img.classList.add("img");
        div.appendChild.img
        var a = document.createElement("a")
        a.textContent = result.push(url)
        index.appendChild(a)
        div.classList.add("div_img");
        index.appendChild(div)
        

        {
            
        }
        // console.log(data[i].owner.login)
        // console.log(data.length)
};
    


xhr.addEventListener('progress', function (x) {
    // console.log('progress', x);  
    
});

xhr.addEventListener('load', function (x) {
    // console.log(x.target.response);
    var response = JSON.parse(x.target.response)
    console.log(response)
    List(response)
});

xhr.addEventListener('error', function (x) {
    console.log('error', x);
});

xhr.addEventListener('abort', function (x) {
    console.log('abort', x);
});

xhr.send();