const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memImage = document.querySelector(".meme-generator img");
const memTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url,title,author) => {
    memImage.setAttribute("src",url);
    memTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then(
        (Response) => Response.json()).then(data => {
            updateDetails(data.url, data.title, data.author )

        })
};

generateMemeBtn.addEventListener("click", generateMeme)