// ... (previous code)

// Function to unlock a technology
function unlockTech(techId) {
  const techElement = document.getElementById(techId);
  techElement.classList.remove("locked");
  techElement.classList.add("unlocked");
}

// Add event listeners to tech elements for user interaction
const techElements = document.querySelectorAll(".tech");
techElements.forEach((tech) => {
  tech.addEventListener("click", () => {
    if (canUnlockTech(tech.id)) {
      unlockTech(tech.id);
    }
  });
});

// Add a function to determine if a technology can be unlocked
function canUnlockTech(techId) {
  // Check if tech is already unlocked
  //  const techElement = document.getElementById();
}

// Define sample cards
const playerCards = [
  {
    id: 1,
    name: "Card 1",
    attack: 3,
    health: 4,
  },
  {
    id: 2,
    name: "Card 2",
    attack: 2,
    health: 5,
  },
  {
    id: 3,
    name: "Card 3",
    attack: 4,
    health: 3,
  },
];

// Initialize playerDeck by copying playerCards
const playerDeck = [...playerCards];

// Wait for DOMContentLoaded event before adding event listeners

document.getElementById("draw-card").addEventListener("click", (e) => {
  e.preventDefault();
  drawCard();
  console.log("Card clicked");
});

// Draw a card from the player's deck and add it to their hand
const drawCard = () => {
  if (playerDeck.length > 0) {
    const card = playerDeck.shift();
    addCardToPlayersHand(card);
  } else {
    console.log("No more cards in the deck!");
  }
};

// Add a card to the player's hand
const addCardToPlayersHand = (card) => {
  const playerHand = document.getElementById("player-hand");
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.innerHTML = `
          <h3>${card.name}</h3>
          <p>Attack: ${card.attack}</p>
          <p>Health: ${card.health}</p>
      `;
  playerHand.appendChild(cardElement);
};
