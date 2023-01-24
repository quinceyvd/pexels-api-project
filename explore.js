// API fetch preparations
const query = "City";
const apiKey = localStorage.getItem("api-key");
const randPageNum = Math.floor(Math.random() * 995) + 1;

// Fetch API data from Pexels
const getData = async () => {
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${randPageNum}&per_page=1`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apiKey,
        },
    });
    const response = await data.json();

    if (!response.photos) {
        console.log("No results found");
        let errorDiv = document.createElement("div");
        errorDiv.style.width = "100vw";
        errorDiv.style.height = "100vh";
        errorDiv.style.position = "absolute";
        errorDiv.style.top = "0";
        errorDiv.style.left = "0";
        errorDiv.style.backgroundColor = "rgb(22, 22, 22)";
        errorDiv.style.paddingTop = "200px";

        let par = document.createElement("p");
        par.style.textAlign = "center";
        par.style.color = "rgb(202, 30, 30)";
        let message = document.createTextNode("Images could not be loaded");
        par.appendChild(message);

        let par2 = document.createElement("p");
        par2.style.textAlign = "center";
        par2.style.color = "white";
        let message2 = document.createTextNode("Please re-enter your  API key");
        par2.appendChild(message2);

        let link = document.createElement("a");
        link.href = "index.html";
        link.style.marginTop = "50px";
        link.style.display = "block";
        link.style.textAlign = "center";
        link.style.color = "white";
        let message3 = document.createTextNode("← Back");
        link.appendChild(message3);

        let link2 = document.createElement("a");
        link2.href = "collection.html";
        link2.style.display = "block";
        link2.style.textAlign = "center";
        link2.style.color = "white";
        link2.style.marginTop = "10px";

        let message4 = document.createTextNode("← View collection");
        link2.appendChild(message4);
        

        errorDiv.appendChild(par);
        errorDiv.appendChild(par2);
        errorDiv.appendChild(link);
        errorDiv.appendChild(link2);

        document.body.appendChild(errorDiv);

    } else {

        let photoData = [];
        (response.photos).forEach(photo => {
            photoData.push({
                url: photo.src.large,
                photographer: photo.photographer,
                photographer_url: photo.photographer_url,
                category: photo.alt,
                id: photo.id.toString(),
            });
        });

        // Modify HTML placeholders
        document.getElementById('img').src = photoData[0].url;
        document.getElementById("name").innerText = photoData[0].photographer.toUpperCase();
        document.getElementById("name").href = photoData[0].photographer_url;
        document.getElementById("description").innerText = photoData[0].category;

        const favoriteBtn = document.getElementById("favoriteBtn");
        favoriteBtn.addEventListener("click", () => {
            // Saving photoData to localStorage
            let favoriteData = [];
            let favoriteObj = {
                url: photoData[0].url,
                photographer: photoData[0].photographer,
                photographer_url: photoData[0].photographer_url,
                category: photoData[0].category,
                id: photoData[0].id,
            };
            favoriteData.push(JSON.stringify(favoriteObj));
            localStorage.setItem(photoData[0].id, JSON.stringify(favoriteData));
        });
    }
};

getData(query);

// Refresh when clicking downvote button
const downvoteBtn = document.getElementById("downvoteBtn");
downvoteBtn.addEventListener("click", () => {
});