(function () {
  var flavors = [
    { name: "Classic Bombay Mixture", tagline: "The everyday namkeen classic — sev, peanuts & spice, Mumbai style.", img: "assets/flavor1.jpg", alt: "Classic Bombay Mixture pack", category: "Everyday Classic", tint: "#1F3F73" },
    { name: "Spicy Masala Mixture", tagline: "Bold masala, big crunch — turned up for the heat-seekers.", img: "assets/flavor2.jpg", alt: "Spicy Masala Mixture pack", category: "Hot & Spicy", tint: "#C81E2A" },
    { name: "Tangy Chana Jor", tagline: "Lime, tamarind & crunch — a zesty chaat-style favourite.", img: "assets/flavor3.jpg", alt: "Tangy Chana Jor pack", category: "Tangy & Zesty", tint: "#6E2A8E" },
    { name: "Masala Peanut Mix", tagline: "A savoury peanut crunch loaded with real roasted peanuts.", img: "assets/flavor4.jpg", alt: "Masala Peanut Mix pack", category: "Peanut Crunch", tint: "#D46A1E" },
    { name: "Cornflake Chivda", tagline: "Light flakes, big crunch — a breezy coastal-style chivda.", img: "assets/flavor5.jpg", alt: "Cornflake Chivda pack", category: "Light & Crunchy", tint: "#1E7FB8" },
    { name: "Bikaneri Sev Mix", tagline: "Fine sev, bold spice — the royal Rajasthani classic.", img: "assets/flavor6.jpg", alt: "Bikaneri Sev Mix pack", category: "Royal Rajasthani", tint: "#B5431E" }
  ];

  var toppers = [
    { name: "Dal Crunch", tagline: "Roasted chana & moong dal, garlic and curry leaves — the perfect crunch for dal & rice.", img: "assets/topper1.jpg", alt: "Dal Crunch pack with bowl", tint: "#C79A1E", pairs: ["Dal", "Khichdi", "Rice"] },
    { name: "Garlic Onion Crunch", tagline: "Roasted garlic flakes and crispy fried onions for irresistible flavour in every meal.", img: "assets/topper2.jpg", alt: "Garlic Onion Crunch pack with bowl", tint: "#8A5A22", pairs: ["Sabzi", "Soups", "Noodles"] },
    { name: "Tadka Crunch", tagline: "Tempered mustard & cumin, roasted dals and a hint of chilli for that authentic tadka kick.", img: "assets/topper3.jpg", alt: "Tadka Crunch pack with bowl", tint: "#D4531E", pairs: ["Khichdi", "Kadhi", "Upma"] },
    { name: "Curry Leaf Crunch", tagline: "Real curry leaves, roasted garlic & chana dal for a South Indian finish.", img: "assets/topper4.jpg", alt: "Curry Leaf Crunch pack with bowl", tint: "#3E7D3A", pairs: ["Curd Rice", "Lemon Rice", "Poha"] },
    { name: "Biryani Crunch", tagline: "Fried onions, roasted cashews and authentic biryani spices for rich aroma.", img: "assets/topper5.jpg", alt: "Biryani Crunch pack with bowl", tint: "#8E2430", pairs: ["Biryani", "Pulao", "Salads"] },
    { name: "Poha Crunch", tagline: "Crispy roasted poha flakes, peanuts and curry leaves with a hint of green chilli.", img: "assets/topper6.jpg", alt: "Poha Crunch pack with bowl", tint: "#B08A1A", pairs: ["Poha", "Upma", "Chivda"] }
  ];

  function renderFlavors() {
    var row = document.getElementById("flavor-row");
    flavors.forEach(function (f) {
      var card = document.createElement("div");
      card.className = "flavor-card";
      card.innerHTML =
        '<div class="flavor-card__img-wrap"><img src="' + f.img + '" alt="' + f.alt + '" /></div>' +
        '<div class="flavor-card__tag" style="background:' + f.tint + '">' + f.category + '</div>' +
        '<div class="flavor-card__name">' + f.name + '</div>' +
        '<div class="flavor-card__tagline">' + f.tagline + '</div>';
      row.appendChild(card);
    });
  }

  function renderToppers() {
    var grid = document.getElementById("topper-grid");
    toppers.forEach(function (t) {
      var card = document.createElement("div");
      card.className = "topper-card";

      var pairsHtml = t.pairs
        .map(function (p) {
          return '<span style="background:' + t.tint + '1A;color:' + t.tint + '">' + p + '</span>';
        })
        .join("");

      card.innerHTML =
        '<div class="topper-card__img-wrap"><img src="' + t.img + '" alt="' + t.alt + '" /></div>' +
        '<div class="topper-card__name">' + t.name + '</div>' +
        '<div class="topper-card__tagline">' + t.tagline + '</div>' +
        '<div class="topper-card__pairs">' + pairsHtml + '</div>';
      grid.appendChild(card);
    });
  }

  renderFlavors();
  renderToppers();
})();
