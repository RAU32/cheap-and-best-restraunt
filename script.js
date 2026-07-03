const cityGuides = [
  {
    city: "New Delhi",
    tagline: "Cheap and best picks for chole bhature, kebabs, parathas, South Indian plates, and momo runs.",
    places: [
      {
        name: "Sita Ram Diwan Chand",
        type: "Dhaba-style",
        vibe: "Street Classic",
        cuisine: "Punjabi",
        rating: 4.5,
        budget: "Rs 100-220",
        dish: "Chole bhature",
        review: "Big flavour, fast service, and one of Delhi's most dependable budget plates.",
        source: "https://www.google.com/search?q=Sita+Ram+Diwan+Chand+Delhi"
      },
      {
        name: "Karim's",
        type: "Restaurant",
        vibe: "Heritage",
        cuisine: "Mughlai",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Seekh kebab and mutton korma",
        review: "Old Delhi comfort food when you want strong Mughlai flavour without fine-dining prices.",
        source: "https://www.google.com/search?q=Karim%27s+Delhi"
      },
      {
        name: "Kake Di Hatti",
        type: "Restaurant",
        vibe: "Value Meal",
        cuisine: "North Indian",
        rating: 4.3,
        budget: "Rs 200-450",
        dish: "Stuffed naan and dal makhani",
        review: "Generous portions make it a smart pick for sharing with friends.",
        source: "https://www.google.com/search?q=Kake+Di+Hatti+Delhi"
      },
      {
        name: "Andhra Bhavan Canteen",
        type: "Canteen",
        vibe: "Thali",
        cuisine: "Andhra",
        rating: 4.5,
        budget: "Rs 180-350",
        dish: "Unlimited Andhra thali",
        review: "Spicy, filling, and famous for delivering serious value at lunch.",
        source: "https://www.google.com/search?q=Andhra+Bhavan+Canteen+Delhi"
      },
      {
        name: "Dolma Aunty Momos",
        type: "Street Food",
        vibe: "Snack",
        cuisine: "Tibetan",
        rating: 4.2,
        budget: "Rs 80-180",
        dish: "Steamed momos",
        review: "A quick Lajpat Nagar favourite when the brief is cheap, hot, and satisfying.",
        source: "https://www.google.com/search?q=Dolma+Aunty+Momos+Delhi"
      }
    ]
  },
  {
    city: "Mumbai",
    tagline: "Budget Mumbai through vada pav, misal, Irani cafes, seafood thalis, and street snacks.",
    places: [
      {
        name: "Ashok Vada Pav",
        type: "Street Food",
        vibe: "Street Classic",
        cuisine: "Mumbai Snacks",
        rating: 4.5,
        budget: "Rs 40-120",
        dish: "Vada pav",
        review: "Tiny spend, maximum Mumbai. Ideal for a quick snack stop.",
        source: "https://www.google.com/search?q=Ashok+Vada+Pav+Mumbai"
      },
      {
        name: "Aaswad",
        type: "Restaurant",
        vibe: "Value Meal",
        cuisine: "Maharashtrian",
        rating: 4.4,
        budget: "Rs 150-350",
        dish: "Misal pav and thalipeeth",
        review: "A strong Dadar choice for local vegetarian food at sensible prices.",
        source: "https://www.google.com/search?q=Aaswad+Mumbai"
      },
      {
        name: "Kyani & Co.",
        type: "Cafe",
        vibe: "Heritage",
        cuisine: "Irani Cafe",
        rating: 4.4,
        budget: "Rs 120-300",
        dish: "Bun maska, chai, and kheema pav",
        review: "Old Bombay charm with snacks that still feel accessible.",
        source: "https://www.google.com/search?q=Kyani+and+Co+Mumbai"
      },
      {
        name: "Prakash Upahar Gruha",
        type: "Restaurant",
        vibe: "Breakfast",
        cuisine: "Maharashtrian",
        rating: 4.4,
        budget: "Rs 120-280",
        dish: "Sabudana vada and batata vada",
        review: "A beloved snack house for simple, consistent Maharashtrian bites.",
        source: "https://www.google.com/search?q=Prakash+Upahar+Gruha+Mumbai"
      },
      {
        name: "Gomantak",
        type: "Restaurant",
        vibe: "Seafood",
        cuisine: "Coastal",
        rating: 4.3,
        budget: "Rs 250-550",
        dish: "Fish thali",
        review: "A value seafood thali option when you want coastal food without splurging.",
        source: "https://www.google.com/search?q=Gomantak+Mumbai"
      }
    ]
  },
  {
    city: "Bengaluru",
    tagline: "Pocket-friendly Bengaluru for dosas, idlis, Andhra meals, biryani, and filter coffee.",
    places: [
      {
        name: "CTR",
        type: "Restaurant",
        vibe: "Breakfast",
        cuisine: "South Indian",
        rating: 4.6,
        budget: "Rs 100-250",
        dish: "Benne masala dosa",
        review: "Crisp, buttery, and one of the city's best breakfast values.",
        source: "https://www.google.com/search?q=CTR+Bengaluru"
      },
      {
        name: "Vidyarthi Bhavan",
        type: "Restaurant",
        vibe: "Heritage",
        cuisine: "South Indian",
        rating: 4.5,
        budget: "Rs 100-250",
        dish: "Masala dosa",
        review: "Queues are part of the story, but the dosa still earns the wait.",
        source: "https://www.google.com/search?q=Vidyarthi+Bhavan+Bengaluru"
      },
      {
        name: "Brahmin's Coffee Bar",
        type: "Cafe",
        vibe: "Snack",
        cuisine: "South Indian",
        rating: 4.6,
        budget: "Rs 60-180",
        dish: "Idli, vada, and filter coffee",
        review: "Small menu, quick turnover, and excellent value for breakfast.",
        source: "https://www.google.com/search?q=Brahmin%27s+Coffee+Bar+Bengaluru"
      },
      {
        name: "Nagarjuna",
        type: "Restaurant",
        vibe: "Thali",
        cuisine: "Andhra",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Andhra meals",
        review: "Filling, spicy, and reliable when you want a proper rice meal.",
        source: "https://www.google.com/search?q=Nagarjuna+Bengaluru"
      },
      {
        name: "Shivaji Military Hotel",
        type: "Hotel",
        vibe: "Meat Meal",
        cuisine: "Donne Biryani",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Donne biryani",
        review: "A no-frills favourite for hearty biryani and military-hotel style food.",
        source: "https://www.google.com/search?q=Shivaji+Military+Hotel+Bengaluru"
      }
    ]
  },
  {
    city: "Chennai",
    tagline: "Cheap and best Chennai for idli, meals, pongal, biryani, and seafood comfort.",
    places: [
      {
        name: "Murugan Idli Shop",
        type: "Restaurant",
        vibe: "Breakfast",
        cuisine: "Tamil",
        rating: 4.4,
        budget: "Rs 100-250",
        dish: "Idli, podi, and chutneys",
        review: "Soft idlis and strong chutneys make it a safe, affordable start.",
        source: "https://www.google.com/search?q=Murugan+Idli+Shop+Chennai"
      },
      {
        name: "Rayar's Mess",
        type: "Mess",
        vibe: "Breakfast",
        cuisine: "Tamil",
        rating: 4.5,
        budget: "Rs 80-180",
        dish: "Pongal, vadai, and filter coffee",
        review: "Small, old, and loved for simple morning food at budget prices.",
        source: "https://www.google.com/search?q=Rayar%27s+Mess+Chennai"
      },
      {
        name: "Ratna Cafe",
        type: "Cafe",
        vibe: "Comfort",
        cuisine: "South Indian",
        rating: 4.3,
        budget: "Rs 120-300",
        dish: "Sambar idli",
        review: "A classic Chennai comfort stop with generous sambar and familiar flavours.",
        source: "https://www.google.com/search?q=Ratna+Cafe+Chennai"
      },
      {
        name: "Buhari",
        type: "Hotel",
        vibe: "Meat Meal",
        cuisine: "Biryani",
        rating: 4.2,
        budget: "Rs 250-500",
        dish: "Chicken 65 and biryani",
        review: "An old Chennai name for filling non-veg meals that do not feel precious.",
        source: "https://www.google.com/search?q=Buhari+Chennai"
      },
      {
        name: "Nair Mess",
        type: "Mess",
        vibe: "Seafood",
        cuisine: "Kerala",
        rating: 4.3,
        budget: "Rs 250-550",
        dish: "Fish meals",
        review: "A busy mess-style choice for seafood meals and homely spice.",
        source: "https://www.google.com/search?q=Nair+Mess+Chennai"
      }
    ]
  },
  {
    city: "Kolkata",
    tagline: "Budget Kolkata for rolls, biryani, kochuri, pice hotel meals, and old-school sweets.",
    places: [
      {
        name: "Nizam's",
        type: "Restaurant",
        vibe: "Street Classic",
        cuisine: "Rolls",
        rating: 4.3,
        budget: "Rs 120-300",
        dish: "Kathi roll",
        review: "A historic roll stop that keeps the meal quick and affordable.",
        source: "https://www.google.com/search?q=Nizam%27s+Kolkata"
      },
      {
        name: "Arsalan",
        type: "Restaurant",
        vibe: "Biryani",
        cuisine: "Kolkata Biryani",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Kolkata biryani",
        review: "A dependable biryani pick with the city's famous potato in the pot.",
        source: "https://www.google.com/search?q=Arsalan+Kolkata"
      },
      {
        name: "Mitra Cafe",
        type: "Cafe",
        vibe: "Snack",
        cuisine: "Bengali",
        rating: 4.4,
        budget: "Rs 150-350",
        dish: "Fish fry and kabiraji",
        review: "Crisp, filling Bengali snacks in an old-school cafe format.",
        source: "https://www.google.com/search?q=Mitra+Cafe+Kolkata"
      },
      {
        name: "Adi Haridas Modak",
        type: "Street Food",
        vibe: "Breakfast",
        cuisine: "Bengali",
        rating: 4.4,
        budget: "Rs 80-200",
        dish: "Kochuri and alur dom",
        review: "A heritage breakfast stop for a very Kolkata start to the day.",
        source: "https://www.google.com/search?q=Adi+Haridas+Modak+Kolkata"
      },
      {
        name: "Swadhin Bharat Hindu Hotel",
        type: "Hotel",
        vibe: "Thali",
        cuisine: "Bengali",
        rating: 4.3,
        budget: "Rs 180-400",
        dish: "Bengali rice meal",
        review: "A pice-hotel style place for simple, filling Bengali meals.",
        source: "https://www.google.com/search?q=Swadhin+Bharat+Hindu+Hotel+Kolkata"
      }
    ]
  },
  {
    city: "Hyderabad",
    tagline: "Value Hyderabad for biryani, haleem, kebabs, Irani chai, and old-city hotel food.",
    places: [
      {
        name: "Shah Ghouse",
        type: "Restaurant",
        vibe: "Biryani",
        cuisine: "Hyderabadi",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Mutton biryani and haleem",
        review: "A strong choice for big portions, late meals, and classic Hyderabad flavour.",
        source: "https://www.shahghouse.in/"
      },
      {
        name: "Cafe Bahar",
        type: "Cafe",
        vibe: "Biryani",
        cuisine: "Hyderabadi",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Biryani and kebabs",
        review: "Central, familiar, and satisfying when you want biryani without overspending.",
        source: "https://www.google.com/search?q=Cafe+Bahar+Hyderabad"
      },
      {
        name: "Hotel Shadab",
        type: "Hotel",
        vibe: "Heritage",
        cuisine: "Hyderabadi",
        rating: 4.3,
        budget: "Rs 250-550",
        dish: "Biryani and nihari",
        review: "Old-city atmosphere with rich gravies and proper meat dishes.",
        source: "https://www.google.com/search?q=Hotel+Shadab+Hyderabad"
      },
      {
        name: "Pista House",
        type: "Restaurant",
        vibe: "Street Classic",
        cuisine: "Hyderabadi",
        rating: 4.3,
        budget: "Rs 150-400",
        dish: "Haleem and biryani",
        review: "Especially useful for haleem season, snacks, and quick Hyderabad staples.",
        source: "https://www.pistahouse.in/"
      },
      {
        name: "Nimrah Cafe",
        type: "Cafe",
        vibe: "Snack",
        cuisine: "Irani Cafe",
        rating: 4.5,
        budget: "Rs 50-180",
        dish: "Irani chai and Osmania biscuits",
        review: "A low-cost Charminar classic for chai, biscuits, and people-watching.",
        source: "https://www.google.com/search?q=Nimrah+Cafe+Hyderabad"
      }
    ]
  },
  {
    city: "Jaipur",
    tagline: "Budget Jaipur for kachori, thalis, chai, sweets, and local Rajasthani meals.",
    places: [
      {
        name: "Rawat Misthan Bhandar",
        type: "Street Food",
        vibe: "Street Classic",
        cuisine: "Snacks",
        rating: 4.4,
        budget: "Rs 60-180",
        dish: "Pyaaz kachori",
        review: "The easiest budget answer when you want a famous Jaipur snack.",
        source: "https://www.google.com/search?q=Rawat+Misthan+Bhandar+Jaipur"
      },
      {
        name: "Lassiwala",
        type: "Street Food",
        vibe: "Snack",
        cuisine: "Drinks",
        rating: 4.3,
        budget: "Rs 50-120",
        dish: "Kulhad lassi",
        review: "Cheap, iconic, and perfect between heavier meals.",
        source: "https://www.google.com/search?q=Lassiwala+Jaipur"
      },
      {
        name: "Santosh Bhojanalaya",
        type: "Dhaba-style",
        vibe: "Thali",
        cuisine: "North Indian",
        rating: 4.2,
        budget: "Rs 150-350",
        dish: "Rajasthani and North Indian thali",
        review: "A practical value meal near the station with filling vegetarian plates.",
        source: "https://www.google.com/search?q=Santosh+Bhojanalaya+Jaipur"
      },
      {
        name: "Shri Thaal Village",
        type: "Restaurant",
        vibe: "Thali",
        cuisine: "Rajasthani",
        rating: 4.4,
        budget: "Rs 250-500",
        dish: "Rajasthani thali",
        review: "A good-value thali experience when you want variety on one plate.",
        source: "https://www.google.com/search?q=Shri+Thaal+Village+Jaipur"
      },
      {
        name: "Tapri Central",
        type: "Cafe",
        vibe: "Cafe",
        cuisine: "Tea & Snacks",
        rating: 4.5,
        budget: "Rs 200-450",
        dish: "Masala chai and vada pav",
        review: "A little more polished, still reasonable, and great for snacks with friends.",
        source: "https://www.google.com/search?q=Tapri+Central+Jaipur"
      }
    ]
  },
  {
    city: "Goa",
    tagline: "Value Goa for fish thalis, local curries, bakery breakfasts, and casual coastal meals.",
    places: [
      {
        name: "Ritz Classic",
        type: "Restaurant",
        vibe: "Seafood",
        cuisine: "Goan",
        rating: 4.4,
        budget: "Rs 250-550",
        dish: "Goan fish thali",
        review: "A popular, easygoing choice for a filling seafood thali.",
        source: "https://www.google.com/search?q=Ritz+Classic+Goa"
      },
      {
        name: "Vinayak Family Restaurant",
        type: "Restaurant",
        vibe: "Seafood",
        cuisine: "Goan",
        rating: 4.5,
        budget: "Rs 300-650",
        dish: "Fish thali and recheado seafood",
        review: "A strong value pick for local seafood in a casual setting.",
        source: "https://www.google.com/search?q=Vinayak+Family+Restaurant+Goa"
      },
      {
        name: "Cafe Tato",
        type: "Cafe",
        vibe: "Breakfast",
        cuisine: "Goan",
        rating: 4.3,
        budget: "Rs 100-250",
        dish: "Patal bhaji and puri",
        review: "A simple breakfast favourite for local vegetarian plates.",
        source: "https://www.google.com/search?q=Cafe+Tato+Goa"
      },
      {
        name: "Anand Bar & Restaurant",
        type: "Restaurant",
        vibe: "Seafood",
        cuisine: "Goan",
        rating: 4.4,
        budget: "Rs 250-550",
        dish: "Fish curry rice",
        review: "Casual, popular, and useful when you want Goan seafood without resort pricing.",
        source: "https://www.google.com/search?q=Anand+Bar+Restaurant+Goa"
      },
      {
        name: "Cafe Bhonsle",
        type: "Cafe",
        vibe: "Snack",
        cuisine: "Goan",
        rating: 4.2,
        budget: "Rs 100-250",
        dish: "Goan snacks and tea",
        review: "A budget-friendly Panjim stop for breakfast, snacks, and local cafe food.",
        source: "https://www.google.com/search?q=Cafe+Bhonsle+Goa"
      }
    ]
  }
];

const state = {
  city: cityGuides[0].city,
  vibe: "All",
  query: "",
  sort: "rating"
};

const cityFilters = document.querySelector("#cityFilters");
const cuisineFilters = document.querySelector("#cuisineFilters");
const restaurantGrid = document.querySelector("#restaurantGrid");
const featuredList = document.querySelector("#featuredList");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resetButton = document.querySelector("#resetButton");
const emptyState = document.querySelector("#emptyState");
const resultTitle = document.querySelector("#resultTitle");
const activeCity = document.querySelector("#activeCity");
const activeCuisine = document.querySelector("#activeCuisine");

function allPlaces() {
  return cityGuides.flatMap((guide) => guide.places.map((place) => ({ ...place, city: guide.city })));
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

const cities = cityGuides.map((guide) => guide.city);
const vibes = uniqueValues(allPlaces().map((item) => item.vibe));

document.querySelector("#cityCount").textContent = cities.length;
document.querySelector("#restaurantCount").textContent = "5";
document.querySelector("#cuisineCount").textContent = vibes.length;

function currentGuide() {
  return cityGuides.find((guide) => guide.city === state.city) || cityGuides[0];
}

function createChip(label, group) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chip";
  button.textContent = label;
  button.setAttribute("aria-pressed", String(state[group] === label));
  button.addEventListener("click", () => {
    state[group] = label;
    render();
  });
  return button;
}

function renderChips() {
  cityFilters.replaceChildren(...cities.map((city) => createChip(city, "city")));
  cuisineFilters.replaceChildren(...["All", ...vibes].map((vibe) => createChip(vibe, "vibe")));
  activeCity.textContent = state.city;
  activeCuisine.textContent = state.vibe === "All" ? "All vibes" : state.vibe;
}

function matchesQuery(item) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  return [item.name, item.city, item.dish, item.review, item.cuisine, item.type, item.vibe, item.budget]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function filteredRestaurants() {
  const guide = currentGuide();
  return guide.places
    .map((place) => ({ ...place, city: guide.city }))
    .filter((item) => state.vibe === "All" || item.vibe === state.vibe)
    .filter(matchesQuery)
    .sort((a, b) => {
      if (state.sort === "city") return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
      if (state.sort === "dish") return a.dish.localeCompare(b.dish);
      return b.rating - a.rating || a.name.localeCompare(b.name);
    });
}

function restaurantCard(item, index) {
  const article = document.createElement("article");
  article.className = "restaurant-card";
  article.innerHTML = `
    <div class="card-top">
      <div class="card-meta">
        <span class="pill">#${index + 1}</span>
        <span class="pill">${item.type}</span>
        <span class="pill price">${item.budget}</span>
      </div>
      <h3>${item.name}</h3>
      <div class="card-meta">
        <span class="pill rating">${item.rating.toFixed(1)} review signal</span>
        <span class="pill">${item.cuisine}</span>
        <span class="pill">${item.vibe}</span>
      </div>
    </div>
    <div class="card-body">
      <span class="dish-label">Cheap and best order</span>
      <strong class="signature">${item.dish}</strong>
      <p>${item.review}</p>
      <a class="card-link" href="${item.source}" target="_blank" rel="noreferrer">Check source</a>
    </div>
  `;
  return article;
}

function renderRestaurants() {
  const guide = currentGuide();
  const items = filteredRestaurants();
  restaurantGrid.replaceChildren(...items.map(restaurantCard));
  emptyState.hidden = items.length > 0;
  resultTitle.textContent = `${guide.city}: 5 cheap and best places`;
  document.querySelector("#cityTagline").textContent = guide.tagline;
}

function renderFeatured() {
  featuredList.replaceChildren(
    ...cityGuides.slice(0, 3).map((guide) => {
      const cheapestBest = [...guide.places].sort((a, b) => b.rating - a.rating)[0];
      const card = document.createElement("article");
      card.className = "feature-card";
      card.innerHTML = `
        <strong>${guide.city}</strong>
        <h3>${cheapestBest.name}</h3>
        <p>${cheapestBest.budget} · ${cheapestBest.dish}</p>
      `;
      return card;
    })
  );
}

function render() {
  renderChips();
  renderRestaurants();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderRestaurants();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderRestaurants();
});

resetButton.addEventListener("click", () => {
  state.city = cityGuides[0].city;
  state.vibe = "All";
  state.query = "";
  state.sort = "rating";
  searchInput.value = "";
  sortSelect.value = "rating";
  render();
});

renderFeatured();
render();
