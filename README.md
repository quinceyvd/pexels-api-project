# Pexels API project
This is a front-end project I made to practice my JS skills using the Fetch API, and to solidify my CSS skills by creating a responsive design. The web app lets users up- or downvote a picture. The upvoted/liked pictures get stored into a collection users can revisit later. The images are provided by [Pexels' Image & Video API](https://www.pexels.com/api/).

The images get saved to the user's `localStorage`, so there are no back-end techniques used to keep track of liked photos. The Collection page later retrieves the data from localStorage and displays the saved pictures on the webpage.

### Setup
The webapp can be launched by running the project on a local webserver. I personally used both [XAMPP](https://www.apachefriends.org/) and [VS Code Live Server](https://ritwickdey.github.io/vscode-live-server/) during development. 

Before entering the webpage, the placeholder value for the API key must be replaced with a real Pexels API key, otherwise the script has no images to display. The placeholder value is stored on line 3 of [index.js](index.js). Change the string's value from `"PEXELS_API_KEY"` to a string containing the actual key.

### How to use
#### Explore page
Upon entering the webpage, the user is presented with a card featuring an image, along with a "Like" and "Downvote" button. By clicking the "Like" button, the image gets saved to the "Collection" page. The page then automatically refreshes, displaying a new image for the user to evaluate. If the "Downvote" button is clicked, the page similarly refreshes, presenting the user with a new image to view.

![Explore page screenshot](/screenshots/explore-page-screenshot.png)

#### Collection page
When the "Collection" tab is accessed via the navigation bar, the user gets an overview of all the pictures they liked. Each picture is presented in a card containing information about the picture, the name of the photographer and a link to their respective [Pexels](https://www.pexels.com/) profile. The user also has the option to remove photos from their collection using the "bin" button. 

![collection page screenshot](/screenshots/collection-page-screenshot.png)


### Stack
- HTML
- CSS
- JS
