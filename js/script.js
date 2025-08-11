document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    // Active link highlighting on scroll
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    const highlightNav = () => {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
        highlightNav();
    });

    // Initial check
    handleScrollAnimation();
    highlightNav();

    // Random Image Loader
    const randomImageElements = document.querySelectorAll('.random-image');
    if (randomImageElements.length > 0) {
        const imageCount = 8; // Total number of images
        randomImageElements.forEach(el => {
            const randomIndex = Math.floor(Math.random() * imageCount) + 1;
            el.src = `images/1 (${randomIndex}).png`;
        });
    }

    // Copy email to clipboard
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(function() {
                alert('이메일 주소가 복사되었습니다: ' + email);
            }, function(err) {
                console.error('이메일 복사 실패: ', err);
                alert('이메일 복사에 실패했습니다.');
            });
        });
    }
});
