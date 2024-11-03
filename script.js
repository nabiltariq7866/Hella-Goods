//burger menu sclick and cut
function showburgermenu() {
  let burger = document.querySelector(".fa-bars");
  let xmark = document.querySelector(".fa-xmark");
  let nav = document.querySelector("nav");
  burger.addEventListener("click", function () {
    gsap.to(nav, {
      width: "50%",
      duration: 0.5,
    });
  });
  xmark.addEventListener("click", function () {
    gsap.to(nav, {
      width: "0%",
      duration: 0.5,
    });
  });
}
//shop menu show and cloase
function showShop() {
  let shopmenu = document.querySelector(".shopmenu");
  let shoplistitem = document.querySelector("#shoplistitem");
  let headerbgc = document.querySelector("#headerBorderWrap");
  let faSolid = document.querySelector("#fa-solid");
  let shopmenuopenclose = 1;
  shoplistitem.addEventListener("click", () => {
    if (shopmenuopenclose === 1) {
      gsap.to(shopmenu, {
        height: "60vh",
        opacity: 1,
        duration: 0.5,
      });
      headerbgc.classList.add("whitecolorbkg");
      faSolid.classList.add("fa-chevron-up");
      faSolid.classList.remove("fa-chevron-down");

      shopmenuopenclose = 2;
    } else if (shopmenuopenclose === 2) {
      gsap.to(shopmenu, {
        height: "0vh",
        opacity: 0,
        duration: 0.5,
      });
      shopmenuopenclose = 1;
      faSolid.classList.remove("fa-chevron-up");
      faSolid.classList.add("fa-chevron-down");
      headerbgc.classList.remove("whitecolorbkg");
    }
  });
}
function chilianimation() {
  let tl = gsap.timeline(
    {
      scrollTrigger: {
        trigger: "#main",
        start: "50% 90%",
        end: "150% 90%",
        scrub: true,
      },
    },
    "mirch"
  );
  tl.to(
    ".redmirch",
    {
      rotate: "660deg",
    },
    "mirch"
  );
  tl.to(
    ".green_1mirch",
    {
      rotate: "660deg",
    },
    "mirch"
  );
}
function GliderSlider() {
  new Glider(document.querySelector(".glider"), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: "#resp-dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "auto",
          slidesToScroll: "auto",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
}
let currentIndex = 0;
const cardsContainer = document.getElementById("cardsContainer");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

// Function to update visibility and opacity of cards
function updateCardVisibility() {
  cards.forEach((card, index) => {
    card.classList.remove("active");
    card.style.opacity = "0.5";
  });

  // Central card
  cards[currentIndex].classList.add("active");
  cards[currentIndex].style.opacity = "1";

  // Previous and next cards for partial view
  const previousIndex = (currentIndex - 1 + totalCards) % totalCards;
  const nextIndex = (currentIndex + 1) % totalCards;

  cards[previousIndex].style.opacity = "0.5";
  cards[nextIndex].style.opacity = "0.5";
}

// Function to move left in the gallery
function moveLeft() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateGalleryPosition();
}

// Function to move right in the gallery
function moveRight() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateGalleryPosition();
}

// Function to update the position of the cards container
function updateGalleryPosition() {
  const cardWidth = cards[0].offsetWidth + 20; // Includes margin
  const offset =
    -currentIndex * cardWidth + (cardsContainer.offsetWidth - cardWidth) / 2;
  cardsContainer.style.transform = `translateX(${offset}px)`;
  updateCardVisibility();
}
function whiteRedButtonClick() {
  let whitebutton = document.querySelector("#whitebutton");
  let redbutton = document.querySelector("#redbutton");
  let WildGarlicRub1 = document.querySelector(".WildGarlicRub1");
  let WildGarlicRub3 = document.querySelector(".WildGarlicRub3");
  whitebutton.addEventListener("click", () => {
    console.log("White Button Clicking");
    WildGarlicRub3.style.opacity = 0;
  });
  redbutton.addEventListener("click", () => {
    console.log("Red Button Clicking");
    WildGarlicRub3.style.opacity = 1;
  });
}
// Initialize by setting the first card as active and positioning the gallery
updateCardVisibility();
updateGalleryPosition();
showburgermenu();
showShop();
chilianimation();
GliderSlider();
whiteRedButtonClick();
