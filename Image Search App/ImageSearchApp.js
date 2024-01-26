function SearchPhoto() {
    let my_id = "UixsqNPFiP_VfxnzZ005M9GcaY2wLUOs3QTXlLsNq-c";

    let query = document.getElementById("input").value;
    let url = "https://api.unsplash.com/search/photos?client_id=" + my_id + "&query=" + query;

    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            let resultsHTML = ""; // Initialize an empty string to store the HTML content

            data.results.forEach(photo => {
                resultsHTML += `
                    <div class="photo-container">
                        <img src="${photo.urls.regular}" alt="${photo.alt_description}">
                        <span class="description">${photo.alt_description}</span>
                    </div>
                `;
            });

            // Update the HTML outside the loop
            document.getElementById("result").innerHTML = resultsHTML;
        });
}
