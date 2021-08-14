
let box=document.getElementById("box1");
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=f37e7da76ec1400189ca48a345521ef8' ,true);
xhr.getResponseHeader('Content-type','application/json');
xhr.onload = function() {
    if(this.status===200){
        let json =JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let nhtml=" ";
        articles.forEach (function (element,index){
                let news= `
  <div class="card">
    <div class="card-header" id="headingOne" style="background-color: #0c2525;">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="color:wheat;text-decoration: none;">
        ${element["title"]}
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
      </div>
      </div>
    </div>
  </div>`;

                nhtml += news;
            
            });
            box.innerHTML=nhtml;}
        else{
        console.log("error")

    }
}
xhr.send()
