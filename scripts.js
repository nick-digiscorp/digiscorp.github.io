document.addEventListener('DOMContentLoaded', () => {
    // Get all the buttons and slides
    const buttons = document.querySelectorAll('.pagination__btn');
    const slides = document.querySelectorAll('.carouselSlide');
    const leftArrow = document.querySelector('.carousel__arrow--left');
    const rightArrow = document.querySelector('.carousel__arrow--right');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    let currentSlideIndex = 0;
    const slideInterval = 6000; // 6 seconds
    let autoSlideInterval;

    // Function to show the slide based on the index
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));

        if (slides[index]) {
            slides[index].classList.add('active');
            if (buttons[index]) {
                buttons[index].classList.add('active');
            }
        }

        // Remove any text labels indicating slide numbers
        const slideLabel = document.querySelector('.slide-label');
        if (slideLabel) {
            slideLabel.remove(); // Remove slide label if it exists
        }
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Function to reset the auto-slide interval
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, slideInterval);
    }

    // Set an interval to automatically move to the next slide every 6 seconds
    autoSlideInterval = setInterval(nextSlide, slideInterval);

    // Add click event listeners to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentSlideIndex = index;
            showSlide(index);
            resetAutoSlide(); // Reset the auto-slide timer
        });
    });

    // Add click event listeners to arrows
    leftArrow.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide(); // Reset the auto-slide timer
    });

    rightArrow.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide(); // Reset the auto-slide timer
    });

    // Initialize the first slide as active, if it exists
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    if (buttons.length > 0) {
        buttons[0].classList.add('active');
    }

    // Get all the game cards and modals
    const gameCards = document.querySelectorAll('.game__card');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal__close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Function to close the modal
    function closeModal(modal) {
        if (modal) {
            const video = modal.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0; // Reset the video to the beginning
            }
            modal.style.transform = 'translate(-50%, -50%) scale(0.5)';
            setTimeout(() => {
                modal.style.display = 'none';
                modalOverlay.style.display = 'none';
            }, 300);
        }
    }

    // Open the corresponding modal when a game card is clicked
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modalElement = document.getElementById(modalId);
            if (modalElement && modalOverlay) {
                modalElement.style.display = 'block';
                modalOverlay.style.display = 'block';

                requestAnimationFrame(() => {
                    modalElement.style.transform = 'translate(-50%, -50%) scale(1)';
                });

                const video = modalElement.querySelector('video');
                if (video) {
                    video.play();
                }
            }
        });
    });

    // Close the modal when the close button is clicked
    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            const modal = close.closest('.modal');
            closeModal(modal);
        });
    });

    // Close the modal when clicking on the overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                closeModal(openModal);
            }
        });
    };

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle (only if hamburger element exists)
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
});
