// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Rose Smilden',
    job: 'web developer',
    img: './Assets/person-6.jfif',
    text: 'Thanks to Social Proofy, especially to FRANCESCA,Who was very patient and so helpful to get me started. What a truly wonderful experience. Thanks again,Lee Gomez Chicago, IL',
  },
  {
    id: 2,
    name: 'Yaren Morgan',
    job: 'web designer',
    img: './Assets/person-2.jfif',
    text: `We achieved a 15% conversion increase within 72 hours using the Latest Conversion and Random Review widgets. You'd be surprised how much updates the app gets from the team at Social Proofy. They care a lot about their customers.`,
  },
  {
    id: 3,
    name: 'Abbass Fahran',
    job: 'intern',
    img: './Assets/person-8.jfif',
    text: 'Users who interacted with our Social Proofy notifications had an 82% higher conversion rate.',
  },
  {
    id: 4,
    name: 'Mark Cole',
    job: 'the boss',
    img: './Assets/person-7.jfif',
    text: 'People have told us firsthand that Social Proofy impacted their buying decision.',
  },
];

// Select Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 1;

// Whenever the document is load, item from the review array is loaded and DOMContentLoaded is used.

window.addEventListener('DOMContentLoaded', function () {
  showContent(currentItem);
});

function showContent(reviewer) {
  const item = reviews[reviewer];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Add EventListners to the next and prev buttons

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showContent(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showContent(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showContent(currentItem);
});
