// selectors
const header = document.querySelector('header');
const cards = document.querySelectorAll('.card');

// functions
const changeBackground = (index) => {
  if (index == 0) {
    header.style.backgroundImage = "url('../assets/images/landscape.jpg')";
  }

  if (index == 1) {
    header.style.backgroundImage =
      "url('../assets/images/pexels-photo-261187.jpeg')";
  }

  if (index == 2) {
    header.style.backgroundImage =
      "url('../assets/images/pexels-photo-27411.jpg')";
  }

  if (index == 3) {
    header.style.backgroundImage =
      "url('../assets/images/food-salad-healthy-lunch.jpg')";
  }

  if (index == 4) {
    header.style.backgroundImage =
      "url('../assets/images/pexels-photo-210019.jpeg')";
  }
};

// listeners
cards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    changeBackground(index);
  });
});
