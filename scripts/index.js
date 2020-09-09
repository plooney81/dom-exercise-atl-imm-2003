const container = document.querySelector('.js-link-container');

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

for (let index = 0; index < addresses.length; index++) {
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', addresses[index]);
    newAnchor.setAttribute('target', '_blank')
    newAnchor.textContent = "click here"
    container.appendChild(newAnchor)
}