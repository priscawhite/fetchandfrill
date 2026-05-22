const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navigation.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navigation.classList.remove('active');
  });
});
