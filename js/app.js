'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
	hamburger('.hamburger', '.header__nav', '.header');
	
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
      navigation: {
        nextEl: ".recomend__next",
        prevEl: ".recomend__prev",
		},
			breakpoints: {
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
				},
			767: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	});
	

// Обработчик клика на категорию
var categories = document.getElementsByClassName("category");
for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function() {
        var subcategories = this.querySelector(".subcategories");
        if (subcategories.style.display === "none") {
            subcategories.style.display = "block";
        } else {
            subcategories.style.display = "none";
        }
    });
}});
  
 document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 12; // Количество товаров на одной странице
    const items = document.querySelectorAll(".shop__item");
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Функция для отображения нужной страницы
    function showPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = page * itemsPerPage;

      items.forEach(function (item, index) {
        if (index >= startIndex && index < endIndex) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    // Функция для создания ссылок пагинации
    function createPaginationLinks() {
      const pagination = document.querySelector(".pagination");

      for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = i;

        // Добавляем обработчик события для переключения страницы
        link.addEventListener("click", function (event) {
          event.preventDefault();
          showPage(i);
        });

        pagination.appendChild(link);
      }
    }

    // Показываем первую страницу по умолчанию
    showPage(1);

    // Создаем ссылки пагинации
    createPaginationLinks();
 });

