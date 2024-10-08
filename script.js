// script.js

// Пример статических данных
const mangaAndAnime = [
  { id: 1, title: "Naruto", author: "Masashi Kishimoto", genre: "Action" },
  { id: 2, title: "One Piece", author: "Eiichiro Oda", genre: "Adventure" },
  { id: 3, title: "Attack on Titan", author: "Hajime Isayama", genre: "Action" },
  // Добавьте больше элементов по необходимости
];

// Функция для выполнения поиска
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = mangaAndAnime.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.author.toLowerCase().includes(query) ||
    item.genre.toLowerCase().includes(query)
  );

  displaySearchResults(results);
}

// Функция для отображения результатов поиска
function displaySearchResults(results) {
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';

  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>Ничего не найдено.</p>';
    return;
  }

  const ul = document.createElement('ul');
  results.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - ${item.author} (${item.genre})`;
    ul.appendChild(li);
  });
  resultsDiv.appendChild(ul);
}

// Управление списками желаемого и просмотренного с использованием localStorage
document.addEventListener('DOMContentLoaded', () => {
  loadLists();

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
});

function loadLists() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const watched = JSON.parse(localStorage.getItem('watched')) || [];

  const wishlistList = document.getElementById('wishlistList');
  const watchedList = document.getElementById('watchedList');

  wishlistList.innerHTML = wishlist.map(item => `<li>${item}</li>`).join('');
  watchedList.innerHTML = watched.map(item => `<li>${item}</li>`).join('');
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Простая имитация входа
  if (email === "test@example.com" && password === "password123") {
    document.getElementById('loginMessage').textContent = "Вход выполнен успешно!";
    // Здесь можно добавить дополнительные действия после входа
  } else {
    document.getElementById('loginMessage').textContent = "Неверный email или пароль.";
  }
}
