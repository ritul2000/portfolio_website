const artworks = [
  {
    src: 'images/art1.jpg',
    title: 'mordern art',
    description: 'girl.'
  },
  {
    src: 'images/art2.jpg',
    title: 'Urban Rush',
    description: 'The chaotic beauty of a modern city.'
  },
  {
    src: 'images/art3.jpg',
    title: 'Mystic Forest',
    description: 'A magical forest with glowing trees.'
  }
  // Add more artworks
];

const gallery = document.getElementById('galleryContainer');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');

artworks.forEach(art => {
  const card = document.createElement('div');
  card.className = 'art-card';
  card.innerHTML = `<img src="${art.src}" alt="${art.title}" />`;
  card.onclick = () => showPopup(art);
  gallery.appendChild(card);
});

function showPopup(art) {
  popupImg.src = art.src;
  popupTitle.textContent = art.title;
  popupDesc.textContent = art.description;
  popup.style.display = 'flex';
}

function closePopup() {
  popup.style.display = 'none';
}
