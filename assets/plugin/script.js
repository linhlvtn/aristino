$('.toggleMenu').click(function(){
    $('.menu-group').toggleClass('open');
});

function initializeSlider(listClass, prevButtonClass, nextButtonClass, itemsPerPage) {
    const list = document.querySelector(listClass);
    const prevButton = document.querySelector(prevButtonClass);
    const nextButton = document.querySelector(nextButtonClass);

    let currentIndex = 0;
    const itemWidth = document.querySelector(".image-style-list--item").offsetWidth;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= list.children.length - itemsPerPage;
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < list.children.length - itemsPerPage) {
            currentIndex++;
            list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    window.addEventListener("resize", function () {
        currentIndex = 0;
        list.style.transform = `translateX(0)`;
        updateButtons();
    });

    updateButtons();
}

document.addEventListener("DOMContentLoaded", function () {
    initializeSlider(".list-style-group", ".prev-button", ".next-button", 1); // 1 item per page
});

document.addEventListener("DOMContentLoaded", function () {
    let initialItemsPerPage = window.innerWidth > 768 ? 4 : 1;
    initializeSlider(".list-style-group-ctgr", ".prev-button-ctgr", ".next-button-ctgr", initialItemsPerPage);
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    let interval; // Biến để lưu trữ interval tự động chuyển slide

    // Tạo các dots tương ứng với số lượng slide
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Hiển thị slide đầu tiên
    slides[currentIndex].classList.add('active');
    dotsContainer.children[currentIndex].classList.add('active');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
        updateSliderPosition();
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Tự động chuyển slide sau một khoảng thời gian
    function autoSlide() {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // Quay lại slide đầu tiên nếu đang ở slide cuối cùng
        }
    }

    // Bắt đầu tự động chuyển slide
    interval = setInterval(autoSlide, 5000); // 5000ms (5 giây) cho mỗi lần chuyển slide

    // Xử lý khi người dùng hover chuột lên slider
    slider.addEventListener('mouseenter', () => {
        clearInterval(interval); // Dừng tự động chuyển slide khi hover
    });

    // Xử lý khi người dùng rời chuột ra khỏi slider
    slider.addEventListener('mouseleave', () => {
        interval = setInterval(autoSlide, 3000); // Khởi động lại tự động chuyển slide sau khi rời chuột
    });

    // Xử lý nút Next và Prev
    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });
});

$(document).ready(function () {
    // Lắng nghe sự kiện cuộn trang
    $(window).scroll(function () {
        // Kiểm tra vị trí cuộn (scroll position)
        if ($(this).scrollTop() > 200) {
            // Nếu cuộn xuống dưới 200px, thêm class 'scrolled' vào header
            $('.header').addClass('scrolled');
        } else {
            // Nếu cuộn lên trên 200px, loại bỏ class 'scrolled' khỏi header
            $('.header').removeClass('scrolled');
        }
    });
});


$('#btn-search').click(function(){
    $('.header').toggleClass('open-search');
});