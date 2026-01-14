document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel
    initHeroCarousel();

    // Experience Carousels
    initExperienceCarousels();

    // Lazy load images for performance
    lazyLoadImages();

    // Hero CTA Buttons - Scroll to contact form (desktop and mobile)
    const heroCtaButtons = document.querySelectorAll('.hero-cta-btn, .hero-cta-btn-mobile');
    heroCtaButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                const offsetTop = contactForm.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // PREMIUM HEADER - Scroll Effect
    // ========================================
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add 'scrolled' class when scrolled past 50px
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-cta');
        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';

                // Handle anchor scrolling after menu closes
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        setTimeout(() => {
                            const rect = target.getBoundingClientRect();
                            const offsetTop = rect.top + window.scrollY - 100;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }, 300);
                    }
                }
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // ACTIVE PAGE INDICATOR
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    mobileNavLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links (only for same-page anchors)
    // Exclude hero CTA buttons which have their own handler with correct offset calculation
    document.querySelectorAll('a[href^="#"]:not(.hero-cta-btn):not(.hero-cta-btn-mobile)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default and smooth scroll if the target exists on current page
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.service-card, .client-card, .corporate-card, .feature-card, .mission-card, .timeline-item, .expertise-card, .value-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Form submission handled by Web3Forms - no custom handler needed

    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon i').style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon i').style.transform = 'scale(1) rotate(0)';
        });
    });

    // Event Filters & Custom Dropdown Functionality
    const tabContents = document.querySelectorAll('.tab-content');
    const categoryDropdown = document.getElementById('category-dropdown');
    const typeDropdown = document.getElementById('type-dropdown');
    const monthDropdown = document.getElementById('month-dropdown');

    // Filter options for each category
    const typeOptions = {
        sports: ['All Types', 'Cricket', 'Football', 'Tennis', 'Formula 1'],
        music: ['All Types', 'Concerts', 'Festivals', 'Live Shows']
    };

    // Current filter states
    let currentTypeFilter = 'all';
    let currentMonthFilter = 'all';

    // Custom Dropdown Toggle
    function initCustomDropdowns() {
        const dropdowns = document.querySelectorAll('.custom-dropdown');

        dropdowns.forEach(dropdown => {
            const selected = dropdown.querySelector('.dropdown-selected');
            const options = dropdown.querySelectorAll('.dropdown-option');

            // Toggle dropdown on click
            selected.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('open');
                });
                dropdown.classList.toggle('open');
            });

            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const value = option.dataset.value;
                    const text = option.textContent;

                    // Update selected text
                    selected.querySelector('span').textContent = text;

                    // Update active state
                    options.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');

                    // Close dropdown
                    dropdown.classList.remove('open');

                    // Handle category change
                    if (dropdown.id === 'category-dropdown') {
                        switchCategory(value);
                    }

                    // Handle type filter change
                    if (dropdown.id === 'type-dropdown') {
                        filterEvents(value);
                    }

                    // Handle month filter change
                    if (dropdown.id === 'month-dropdown') {
                        filterByMonth(value);
                    }
                });
            });
        });

        // Close dropdowns on outside click
        document.addEventListener('click', () => {
            dropdowns.forEach(d => d.classList.remove('open'));
        });
    }

    // Switch category
    function switchCategory(category) {
        // Update tab contents
        tabContents.forEach(content => content.classList.remove('active'));
        const targetTab = document.getElementById(`${category}-tab`);
        if (targetTab) targetTab.classList.add('active');

        // Update type dropdown options
        updateTypeOptions(category);

        // Re-apply month filter to new tab
        applyFilters();
    }

    // Update type dropdown options based on category
    function updateTypeOptions(category) {
        if (!typeDropdown) return;
        const options = typeOptions[category] || typeOptions.sports;
        const optionsContainer = typeDropdown.querySelector('.dropdown-options');
        const selectedSpan = typeDropdown.querySelector('.dropdown-selected span');

        optionsContainer.innerHTML = options.map((opt, i) =>
            `<div class="dropdown-option${i === 0 ? ' active' : ''}" data-value="${opt === 'All Types' ? 'all' : opt}">${opt}</div>`
        ).join('');

        // Reset selected to "All Types"
        selectedSpan.textContent = 'All Types';

        // Re-attach click handlers to new options
        optionsContainer.querySelectorAll('.dropdown-option').forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                const text = option.textContent;

                selectedSpan.textContent = text;
                optionsContainer.querySelectorAll('.dropdown-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                typeDropdown.classList.remove('open');
                filterEvents(value);
            });
        });

        // Reset filter
        filterEvents('all');
    }

    // Apply combined type and month filters
    function applyFilters() {
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab) return;

        const rows = activeTab.querySelectorAll('tbody tr');
        rows.forEach(row => {
            let showByType = true;
            let showByMonth = true;

            if (currentTypeFilter !== 'all') {
                const typeCell = row.querySelector('.event-type');
                showByType = typeCell && typeCell.textContent.trim() === currentTypeFilter;
            }

            if (currentMonthFilter !== 'all') {
                const monthCell = row.querySelectorAll('td')[2];
                if (monthCell) {
                    // Simple check: does the date text contain the month abbreviation?
                    showByMonth = monthCell.textContent.includes(currentMonthFilter);
                }
            }

            row.style.display = (showByType && showByMonth) ? '' : 'none';
        });
    }

    // Filter by type
    function filterEvents(selectedType) {
        currentTypeFilter = selectedType;
        applyFilters();
    }

    // Filter by month
    function filterByMonth(selectedMonth) {
        currentMonthFilter = selectedMonth;
        applyFilters();
    }

    // Initialize custom dropdowns
    initCustomDropdowns();

    // Apply filters from URL parameters (for deep linking from homepage cards)
    applyFiltersFromURL();

    // Function to apply filters based on URL parameters
    function applyFiltersFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const type = urlParams.get('type');

        if (category && categoryDropdown) {
            // Switch to the selected category
            switchCategory(category);

            // Update category dropdown UI
            const categoryOptions = categoryDropdown.querySelectorAll('.dropdown-option');
            const categorySelected = categoryDropdown.querySelector('.dropdown-selected span');
            categoryOptions.forEach(opt => {
                opt.classList.remove('active');
                if (opt.dataset.value === category) {
                    opt.classList.add('active');
                    categorySelected.textContent = opt.textContent;
                }
            });
        }

        if (type && typeDropdown) {
            // Apply type filter
            filterEvents(type);

            // Update type dropdown UI
            const typeOptions = typeDropdown.querySelectorAll('.dropdown-option');
            const typeSelected = typeDropdown.querySelector('.dropdown-selected span');
            typeOptions.forEach(opt => {
                opt.classList.remove('active');
                if (opt.dataset.value === type) {
                    opt.classList.add('active');
                    typeSelected.textContent = opt.textContent;
                }
            });
        }
    }

    // Add countdown for upcoming events - DISABLED
    // const eventRows = document.querySelectorAll('.events-table tbody tr');
    // eventRows.forEach(row => {
    //     row.addEventListener('click', function() {
    //         const eventName = this.cells[0].textContent;
    //         const eventDate = this.cells[2].textContent;
    //         alert(`Get ready for ${eventName}! Coming ${eventDate}. Contact us to secure your tickets!`);
    //     });
    // });


    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1) rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Add staggered animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });

    // Add staggered animation to value items
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add counter animation for About section when scrolled into view
    const aboutSection = document.querySelector('.about-us');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger any special animations for about section
                    const storyIcon = document.querySelector('.story-icon');
                    if (storyIcon) {
                        setTimeout(() => {
                            storyIcon.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                storyIcon.style.transform = 'scale(1)';
                            }, 300);
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.2 });

        aboutObserver.observe(aboutSection);
    }

    // Initialize any third-party integrations here (e.g., Google Maps, chat widget, etc.)
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Utility function to handle lazy loading of images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Hero Carousel Functionality
function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.hero-carousel');

    if (!slides.length) return;

    let currentSlide = 0;
    let interval;
    const INTERVAL_TIME = 5000; // 5 seconds

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, INTERVAL_TIME);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    // Arrow click handlers
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Start auto-play
    startAutoPlay();
}

// Experience Carousel Functionality
function initExperienceCarousels() {
    const categories = document.querySelectorAll('.experience-category');

    categories.forEach(category => {
        const grid = category.querySelector('.experience-grid');
        const prevBtn = category.querySelector('.exp-carousel-prev');
        const nextBtn = category.querySelector('.exp-carousel-next');

        if (!grid || !prevBtn || !nextBtn) return;

        const cardWidth = 320 + 25; // card width + gap

        function updateButtonStates() {
            const scrollLeft = grid.scrollLeft;
            const maxScroll = grid.scrollWidth - grid.clientWidth;

            prevBtn.disabled = scrollLeft <= 0;
            nextBtn.disabled = scrollLeft >= maxScroll - 5;
        }

        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        grid.addEventListener('scroll', updateButtonStates);

        // Initial state
        updateButtonStates();

        // Update on resize
        window.addEventListener('resize', updateButtonStates);
    });
}