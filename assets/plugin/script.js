$('.toggleMenu').click(function(){
    $('.menu-group').toggleClass('open');
});

$('.btn-card').click(function(){
    $('.cart-box').toggleClass('open');
});

$('.btn-login').click(function(){
    $('.login-sibar').toggleClass('open');
});

$('.btn-add-cart').click(function(){
    $(this).closest('.group-production--list-item').find('.select-size-prd').toggleClass('show');
});

$(".group-production--list-item").on("mouseleave", function() {
    $(this).find('.select-size-prd').removeClass("show");
});

$('.btn-action-filter').click(function(){
    $('.filter-box').toggleClass('open');
});

$(document).ready(function () {
    $(".select2").select2();
});

// function initializeSlider(listClass, prevButtonClass, nextButtonClass, itemsPerPage) {
//     const list = document.querySelector(listClass);
//     const prevButton = document.querySelector(prevButtonClass);
//     const nextButton = document.querySelector(nextButtonClass);

//     let currentIndex = 0;
//     const itemWidth = document.querySelector(".image-style-list--item").offsetWidth;

//     function updateButtons() {
//         prevButton.disabled = currentIndex === 0;
//         nextButton.disabled = currentIndex >= list.children.length - itemsPerPage;
//     }

//     nextButton.addEventListener("click", function () {
//         if (currentIndex < list.children.length - itemsPerPage) {
//             currentIndex++;
//             list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//             updateButtons();
//         }
//     });

//     prevButton.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex--;
//             list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//             updateButtons();
//         }
//     });

//     window.addEventListener("resize", function () {
//         currentIndex = 0;
//         list.style.transform = `translateX(0)`;
//         updateButtons();
//     });

//     updateButtons();
// }

// document.addEventListener("DOMContentLoaded", function () {
//     initializeSlider(".list-style-group", ".prev-button", ".next-button", 1); // 1 item per page
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let initialItemsPerPage = window.innerWidth > 768 ? 4 : 1;
//     initializeSlider(".list-style-group-ctgr", ".prev-button-ctgr", ".next-button-ctgr", initialItemsPerPage);
// });


$(document).ready(function() {
    function initializeSlider(listClass, prevButtonClass, nextButtonClass, itemsPerPage) {
        const list = $(listClass);
        const prevButton = $(prevButtonClass);
        const nextButton = $(nextButtonClass);

        let currentIndex = 0;
        const itemWidth = $(".image-style-list--item").outerWidth();

        function updateButtons() {
            prevButton.prop("disabled", currentIndex === 0);
            nextButton.prop("disabled", currentIndex >= list.children().length - itemsPerPage);
        }

        nextButton.click(function() {
            if (currentIndex < list.children().length - itemsPerPage) {
                currentIndex++;
                list.css("transform", `translateX(-${currentIndex * itemWidth}px)`);
                updateButtons();
            }
        });

        prevButton.click(function() {
            if (currentIndex > 0) {
                currentIndex--;
                list.css("transform", `translateX(-${currentIndex * itemWidth}px)`);
                updateButtons();
            }
        });

        $(window).resize(function() {
            currentIndex = 0;
            list.css("transform", "translateX(0)");
            updateButtons();
        });

        updateButtons();
    }

    initializeSlider(".list-style-group", ".prev-button", ".next-button", 1); // 1 item per page

    let initialItemsPerPage = window.innerWidth > 768 ? 4 : 1;
    initializeSlider(".list-style-group-ctgr", ".prev-button-ctgr", ".next-button-ctgr", initialItemsPerPage);


    const slider = $(".slider");
            const slides = $(".slide");
            const dotsContainer = $(".dots-container");

            let currentIndex = 0;
            let interval; // Biến để lưu trữ interval tự động chuyển slide

            // Tạo các dots tương ứng với số lượng slide
            slides.each(function(index) {
                const dot = $("<div></div>").addClass("dot");
                dotsContainer.append(dot);

                dot.click(function() {
                    goToSlide(index);
                });
            });

            // Hiển thị slide đầu tiên
            slides.eq(currentIndex).addClass('active');
            dotsContainer.children().eq(currentIndex).addClass('active');

            function goToSlide(index) {
                slides.eq(currentIndex).removeClass('active');
                dotsContainer.children().eq(currentIndex).removeClass('active');
                currentIndex = index;
                slides.eq(currentIndex).addClass('active');
                dotsContainer.children().eq(currentIndex).addClass('active');
                updateSliderPosition();
            }

            function updateSliderPosition() {
                slider.css("transform", `translateX(-${currentIndex * 100}%)`);
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
            interval = setInterval(autoSlide, 4000); // 4000ms (4 giây) cho mỗi lần chuyển slide

            // Xử lý khi người dùng hover chuột lên slider
            slider.mouseenter(function() {
                clearInterval(interval); // Dừng tự động chuyển slide khi hover
            });

            // Xử lý khi người dùng rời chuột ra khỏi slider
            slider.mouseleave(function() {
                interval = setInterval(autoSlide, 4000); // Khởi động lại tự động chuyển slide sau khi rời chuột
            });

            // // Xử lý nút Next và Prev
            // $(".next").click(function() {
            //     if (currentIndex < slides.length - 1) {
            //         goToSlide(currentIndex + 1);
            //     }
            // });

            // $(".prev").click(function() {
            //     if (currentIndex > 0) {
            //         goToSlide(currentIndex - 1);
            //     }
            // });

            const sliderList = $(".slider-list");
            const prevButton = $(".prev-button");
            const nextButton = $(".next-button");
            const itemWidth = $(".item").outerWidth();

            function updateButtons() {
                prevButton.prop("disabled", currentIndex === 0);
                nextButton.prop("disabled", currentIndex >= sliderList.children().length - 4); // Hiển thị 4 item mỗi lần
            }

            nextButton.click(function() {
                if (currentIndex < sliderList.children().length - 4) {
                    currentIndex++;
                    sliderList.css("transform", `translateX(-${currentIndex * itemWidth}px)`);
                    updateButtons();
                }
            });

            prevButton.click(function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    sliderList.css("transform", `translateX(-${currentIndex * itemWidth}px)`);
                    updateButtons();
                }
            });

            updateButtons();
});


// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slide');
//     const dotsContainer = document.querySelector('.dots-container');

//     let currentIndex = 0;
//     let interval; // Biến để lưu trữ interval tự động chuyển slide

//     // Tạo các dots tương ứng với số lượng slide
//     slides.forEach((_, index) => {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         dotsContainer.appendChild(dot);

//         dot.addEventListener('click', () => {
//             goToSlide(index);
//         });
//     });

//     // Hiển thị slide đầu tiên
//     slides[currentIndex].classList.add('active');
//     dotsContainer.children[currentIndex].classList.add('active');

//     function goToSlide(index) {
//         slides[currentIndex].classList.remove('active');
//         dotsContainer.children[currentIndex].classList.remove('active');
//         currentIndex = index;
//         slides[currentIndex].classList.add('active');
//         dotsContainer.children[currentIndex].classList.add('active');
//         updateSliderPosition();
//     }

//     function updateSliderPosition() {
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Tự động chuyển slide sau một khoảng thời gian
//     function autoSlide() {
//         if (currentIndex < slides.length - 1) {
//             goToSlide(currentIndex + 1);
//         } else {
//             goToSlide(0); // Quay lại slide đầu tiên nếu đang ở slide cuối cùng
//         }
//     }

//     // Bắt đầu tự động chuyển slide
//     interval = setInterval(autoSlide, 4000); // 4000ms (4 giây) cho mỗi lần chuyển slide

//     // Xử lý khi người dùng hover chuột lên slider
//     slider.addEventListener('mouseenter', () => {
//         clearInterval(interval); // Dừng tự động chuyển slide khi hover
//     });

//     // Xử lý khi người dùng rời chuột ra khỏi slider
//     slider.addEventListener('mouseleave', () => {
//         interval = setInterval(autoSlide, 4000); // Khởi động lại tự động chuyển slide sau khi rời chuột
//     });

//     // // Xử lý nút Next và Prev
//     // document.querySelector('.next').addEventListener('click', () => {
//     //     if (currentIndex < slides.length - 1) {
//     //         goToSlide(currentIndex + 1);
//     //     }
//     // });

//     // document.querySelector('.prev').addEventListener('click', () => {
//     //     if (currentIndex > 0) {
//     //         goToSlide(currentIndex - 1);
//     //     }
//     // });
// });

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

$(document).ready(function () {
    let isSearchIcon = true;
    $('#btn-search').click(function(){
        $('.header').toggleClass('open-search');
        $('.search-box').toggleClass('open');
    
        const img = $(this).find('img');
        if (isSearchIcon) {
            img.attr('src', 'assets/images/close.png');
        } else {
            img.attr('src', 'assets/images/search.png');
        }
    
        // Đảo ngược trạng thái của biến
        isSearchIcon = !isSearchIcon;
    
    });
})


// Get references to the modals, backdrop, and buttons
const modals = document.querySelectorAll(".modal-custom");
const modalBackdrops = document.querySelectorAll(".modal-backdrop");
const showModalButtons = document.querySelectorAll(".show-modal-button");
const closeModalButtons = document.querySelectorAll(".close");

// Function to open the modal
function openModal() {
    // const modal = this.nextElementSibling; // Get the next element, which is the modal
    // modal.style.display = "block";
    $(modals).show();
    modalBackdrop.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = this.closest(".modal-custom");
    // modal.style.display = "none";
    $(modal).hide();
    modalBackdrop.style.display = "none";
}

// Event listeners to open the modals when the buttons are clicked
showModalButtons.forEach(button => {
    button.addEventListener("click", openModal);
});

// Event listeners to close the modals when the close buttons are clicked
closeModalButtons.forEach(button => {
    button.addEventListener("click", closeModal);
});

// Event listeners to close the modals when the backdrop is clicked
modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener("click", closeModal);
});



// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider-list");
//     const prevButton = document.querySelector(".prev-button");
//     const nextButton = document.querySelector(".next-button");

//     let currentIndex = 0;
//     const itemWidth = document.querySelector(".item").offsetWidth;

//     function updateButtons() {
//         prevButton.disabled = currentIndex === 0;
//         nextButton.disabled = currentIndex >= slider.children.length - 4; // Hiển thị 4 item mỗi lần
//     }

//     nextButton.addEventListener("click", function () {
//         if (currentIndex < slider.children.length - 4) {
//             currentIndex++;
//             slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//             updateButtons();
//         }
//     });

//     prevButton.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex--;
//             slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//             updateButtons();
//         }
//     });

//     updateButtons();
// });


$(document).ready(function () {
    $(".input-field").on("input", function () {
        var $input = $(this);
        var $label = $("label[for='" + $input.attr("id") + "']");

        if ($input.val().trim() !== "") {
            $label.addClass("active");
        } else {
            $label.removeClass("active");
        }
    });
});




//filter
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider-range .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
        var fomartPriceMinVal = minVal;
        var fomartPriceMaxVal = maxVal;
        fomartPriceMinVal = fomartPriceMinVal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        fomartPriceMaxVal = fomartPriceMaxVal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

      priceInput[0].value = fomartPriceMinVal;
      priceInput[1].value = fomartPriceMaxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});




// Xử lý sự kiện khi lựa chọn trong dropdown được click
$(".dropdown-item").click(function () {
    const selectedValue = $(this).data("value");
    $("#dropdownSort").text(selectedValue);
});



// Kiểm tra kích thước màn hình
function checkWindowSize() {
    if (window.innerWidth >= 768) {
      // Nếu màn hình lớn hơn hoặc bằng 768px, sử dụng trạng thái hover
      $('.btn-sort-group').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
      });
    } else {
      // Nếu màn hình nhỏ hơn 768px, sử dụng trạng thái click
      $('.btn-sort-group').off('mouseenter mouseleave');
    }
  }
  
  // Gọi hàm kiểm tra kích thước màn hình khi tải trang và khi thay đổi kích thước màn hình
  $(document).ready(function() {
    checkWindowSize();
    $(window).resize(checkWindowSize);
  });