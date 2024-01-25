function SearchPhoto(){
let my_id = "UixsqNPFiP_VfxnzZ005M9GcaY2wLUOs3QTXlLsNq-c";

let query  =document.getElementById("input").value;
let url = "https://api.unsplash.com/search/photos?client_id=" + my_id + "&query="+query;

fetch(url)
    .then(function(data){
        return data.json();
    })
.then(function(data){
    console.log(data);
    data.results.forEach(photo => {
        let result = `
        <img src = "${photo.urls.regular}"> `;
        $("#result").append(result);
        
    });
});

}