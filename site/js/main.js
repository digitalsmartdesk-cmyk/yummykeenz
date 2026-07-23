(function () {
  var flavors = [
    { name: "Chatpata Mix", tagline: "Perfect balance of taste, light & crunchy.", img: "assets/yk1.jpg", alt: "Chatpata Mix pack", category: "Light Namkeen", tint: "#2B6E4F" },
    { name: "Corn Crunch Mix", tagline: "Extra crunch, extra munch — made with real corn.", img: "assets/yk2.jpg", alt: "Corn Crunch Mix pack", category: "Extra Crunchy", tint: "#E8720C" },
    { name: "Hing Jeera Mix", tagline: "Hing flavour, jeera goodness — light & digestive.", img: "assets/yk3.jpg", alt: "Hing Jeera Mix pack", category: "Digestive", tint: "#6B4226" },
    { name: "Pudina Mix", tagline: "Cool mint flavour, deliciously refreshing.", img: "assets/yk4.jpg", alt: "Pudina Mix pack", category: "Minty Fresh", tint: "#4E8F3B" },
    { name: "Teekha Mix", tagline: "Bold flavour, irresistible crunch, hot & spicy.", img: "assets/yk5.jpg", alt: "Teekha Mix pack", category: "Hot & Spicy", tint: "#C81E2A" },
    { name: "Indori Mix", tagline: "Sweet & spicy — irresistible taste, anytime.", img: "assets/yk6.jpg", alt: "Indori Mix pack", category: "Sweet & Spicy", tint: "#9E1B22" }
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
