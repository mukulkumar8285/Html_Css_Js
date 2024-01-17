function searchEmoji(){ontainer
    let inputvalue = document.getElementById("input_text").value;
    displayResult(inputvalue);
}
function displayResult(searchQuery=""){
    let datafilter = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }
        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

       
    })
    console.log(datafilter);
    let parent = document.getElementById("search");
    console.log(parent);
    parent.innerHTML="";


    datafilter.forEach((e)=>{
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_dese = document.createElement("td");
        
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_dese.innerText= e.description;

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_dese);

        parent.append(new_row);
    });
}
document.getElementById("input_text").addEventListener("keyup" , searchEmoji)
window.onload= ()=>displayResult();