const names = ["Alice", "Bob", "Carol", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
  ];  

const averagePriceElement = document.querySelector("#average-price");
const freelancersList = document.querySelector("#freelancers-list");

function renderFreelancers() {
    freelancersList.innerHTML = "";

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
        freelancersList.appendChild(li);
    });
}

function calculateAveragePrice() {
    const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);
    const averagePrice = totalStartingPrice / freelancers.length || 0;
    averagePriceElement.textContent = averagePrice.toFixed(2);
}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 20;

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice
    };

    freelancers.push(newFreelancer);
    renderFreelancers();
    calculateAveragePrice();
}

generateRandomFreelancer();
calculateAveragePrice();

setInterval(generateRandomFreelancer, 5000);
