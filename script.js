// Data set for the search engine
const searchData = [
    { title: "Messenger", description: "A messaging app by Meta, formerly Facebook.", url: "https://www.messenger.com" },
    { title: "Facebook", description: "A social networking platform to connect with friends and family.", url: "https://www.facebook.com" },
    { title: "ChatGPT", description: "An AI language model by OpenAI.", url: "https://www.openai.com/chatgpt" },
    { title: "YouTube", description: "A video sharing platform.", url: "https://www.youtube.com" },
    { title: "Spotify", description: "A music sharing platform", url: "https://www.Spotify.com"},
    { title: "Roblox", description: "Kid's Game", url: "Https://Roblox.com"},
    { title: "Instagram", description: "An app where you can meet the huzz", url: "Https://Instagram.com"},
    { title: "X(formerly known as Twitter)", description: "Brainrot arguments and debates", url: "Https//www.x.com"},
    { title: "Tiktok", description: "Brainrot 2.0", url: "Https//www.tiktok.com"},
    { title: "Netflix", description: "A form of entertainment used by the masses", url: "Https//www.netflix.com"},
    { title: "Amazon", description: "For your shopping needs", url: "Https//www.amazon.com"},
    { title: "Reddit", description: "For pretentious people", url: "Https//www.reddit.com"},
    { title: "Discord", description: "Discord Kittens, I see", url: "Https//www.discord.com"},
    { title: "Twitch", description: "Watching Amouranth again?", url: "Https//www.twitch.com"},
    { title: "Steam", description: "Buy the Witcher, you won't regret it.", url: "Https//www.steam.com"},
   

];

// Search function
function search(query) {
    return searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Display Results
function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `<a href="${result.url}" target="_blank"><h3>${result.title}</h3><p>${result.description}</p></a>`;
        resultsContainer.appendChild(resultItem);
    });
}

// Event Listener for search input
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
    const query = searchBar.value;
    const results = search(query);
    displayResults(results);
});

// Handle Enter key press
searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const query = searchBar.value;
        const results = search(query);
        if (results.length > 0) {
            window.open(results[0].url, "_blank");
        }
    }
});

// Handle Create Account Form Submission
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Redirect to RedCart.html after successful account creation
    alert("Account created successfully!");
    window.location.href = "RedCart.html";
});

document.addEventListener("DOMContentLoaded", function() {
    const users = [
        { username: "Vidar", accountInfo: "Account info for user1" },
        { username: "user2", accountInfo: "Account info for user2" }
    ];

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", function() {
            const query = document.getElementById("searchBar").value;
            const loggedInUser = localStorage.getItem("loggedInUser");
            const user = users.find(u => u.username === loggedInUser);

            if (user && user.username.includes(query)) {
                document.getElementById("results").innerHTML = user.accountInfo;
            } else {
                document.getElementById("results").innerHTML = "No results found.";
            }
        });
    }
});

//login

const users = [
    { username: "user1", password: "pass2" },
    { username: "user2", password: "pass2" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "RedCart.html"; // Redirect to RedCart
    } else {
        alert("Invalid username or password!");
    }
});
