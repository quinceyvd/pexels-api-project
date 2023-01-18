// Storing localStorage data in valid JSON variable
const localstorageJSON = JSON.stringify(localStorage);
let readableStorage = localstorageJSON.replaceAll('\\', '');
readableStorage = readableStorage.replaceAll('"["', '');
readableStorage = readableStorage.replaceAll('"]"', '');
readableStorage = JSON.parse(readableStorage);

// For each item in localStorage, create a new card displaying the collection items
const contents = document.getElementById("contents");
Object.values(readableStorage).forEach(value => {
    let photographerUppercase = value.photographer.toUpperCase();
    contents.innerHTML +=
        `<div class="content">
            <div class="item1">
                <img src="${value.url}">
            </div>
            <div class="item2">
                <a id="name" href="${value.photographer_url}">${photographerUppercase}</a>
                <p id="description">${value.category}</p>
                <button class="binBtn" id="${value.id}" onclick="window.location.reload();">🗑️</button>
            </div>
        </div>`;

    // Select all bin buttons and add eventListener
    const binBtns = document.getElementsByClassName("binBtn");
    for (let i = 0; i < binBtns.length; i++) {
        binBtns[i].addEventListener("click", () => {
            if (localStorage.getItem((binBtns[i]).id)) {
                localStorage.removeItem((binBtns[i]).id);
            }
        });
    }
});