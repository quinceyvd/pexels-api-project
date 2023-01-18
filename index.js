// API fetch preparations
const query = "City";
const apiKey = "PEXELS_API_KEY";
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
};

getData(query);

// Refresh when clicking downvote button
const downvoteBtn = document.getElementById("downvoteBtn");
downvoteBtn.addEventListener("click", () => {
});