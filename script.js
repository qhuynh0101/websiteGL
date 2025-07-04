document.addEventListener('DOMContentLoaded', () => {

    // --- ## DATA & TRANSLATIONS ## ---
    const translations = {
        en: {
            logo_text: "Evergreen Clean",
            nav_home: "Home", nav_services: "Services", nav_process: "Our Process", nav_about: "About", nav_testimonials: "Testimonials", nav_contact: "Contact",
            hero_title: "The Gold Standard in Commercial Cleaning",
            hero_subtitle: "We deliver more than just a clean workspace. We provide a pristine, healthy, and productive environment that reflects the quality of your brand. Meticulous, reliable, and always on schedule.",
            hero_cta: "Request a Premium Quote",
            services_title: "Our Premium Services",
            service1_title: "Daily Maintenance", service1_desc: "Trash removal, floor sweeping, restroom restocking, and surface dusting for a consistently clean environment.",
            service2_title: "Deep Cleaning", service2_desc: "Detailed cleaning including carpet shampooing, floor polishing, and comprehensive sanitization.",
            service3_title: "Office Sanitization", service3_desc: "Targeted disinfection of high-touch surfaces like doorknobs, light switches, and phones to ensure a healthy space.",
            process_title: "Our 4-Step Professional Process",
            process1_title: "Consultation", process1_desc: "We start with a thorough consultation to understand your unique needs, space, and schedule.",
            process2_title: "Custom Plan", process2_desc: "We develop a customized cleaning plan and quote, tailored specifically for your facility.",
            process3_title: "Execution", process3_desc: "Our trained professionals execute the plan flawlessly using top-tier equipment and products.",
            process4_title: "Quality Check", process4_desc: "We conduct regular quality checks and seek your feedback to ensure 100% satisfaction.",
            about_title: "Our Commitment to Excellence",
            about_desc: "Founded on principles of reliability and trust, Evergreen Clean provides top-tier commercial cleaning. We believe a clean office is the foundation of a successful business, and we are committed to helping you achieve that with a professional, seamless experience.",
            testimonials_title: "Trusted By Top Companies",
            testimonial1_text: `"The team at Evergreen is professional, reliable, and incredibly thorough. Our office has never looked better. Highly recommend!"`,
            testimonial1_author: "- Sarah L., CEO of Innovate Inc.",
            testimonial2_text: `"Their attention to detail is unmatched. We trust them completely with our medical facility, and they've always exceeded expectations."`,
            testimonial2_author: "- Dr. Michael Chen, Clinic Director",
            testimonial3_text: `"Flexible scheduling and consistently high-quality work. They are an essential partner in our operations. A truly 5-star service!"`,
            testimonial3_author: "- David R., Operations Manager, TechCorp",
            featured_tag: "Featured",
            contact_title: "Get In Touch",
            form_name: "Your Full Name", form_email: "Company Email Address", form_message: "Please describe your cleaning requirements...", form_submit: "Send Your Inquiry",
            footer_text: "© 2025 Evergreen Commercial Cleaning. A Higher Standard of Clean."
        },
        // Thêm các ngôn ngữ khác ở đây...
        vi: {
            logo_text: "Evergreen Sạch",
            nav_home: "Trang Chủ", nav_services: "Dịch Vụ", nav_process: "Quy Trình", nav_about: "Về Chúng Tôi", nav_testimonials: "Đánh Giá", nav_contact: "Liên Hệ",
            hero_title: "Tiêu Chuẩn Vàng Trong Vệ Sinh Thương Mại",
            hero_subtitle: "Chúng tôi không chỉ mang đến một không gian làm việc sạch sẽ. Chúng tôi tạo ra một môi trường trong lành, lành mạnh và hiệu quả, phản ánh chất lượng thương hiệu của bạn. Tỉ mỉ, đáng tin cậy và luôn đúng tiến độ.",
            hero_cta: "Yêu Cầu Báo Giá Cao Cấp",
            services_title: "Dịch Vụ Cao Cấp Của Chúng Tôi",
            service1_title: "Bảo Trì Hàng Ngày", service1_desc: "Dọn rác, quét sàn, bổ sung vật dụng nhà vệ sinh, và lau bụi bề mặt để giữ môi trường luôn sạch sẽ.",
            service2_title: "Vệ Sinh Chuyên Sâu", service2_desc: "Làm sạch chi tiết bao gồm giặt thảm, đánh bóng sàn và khử trùng toàn diện.",
            service3_title: "Khử Trùng Văn Phòng", service3_desc: "Khử trùng các bề mặt tiếp xúc nhiều như tay nắm cửa, công tắc đèn và điện thoại.",
            process_title: "Quy Trình Chuyên Nghiệp 4 Bước",
            process1_title: "Tư Vấn", process1_desc: "Chúng tôi bắt đầu bằng việc tư vấn kỹ lưỡng để hiểu nhu cầu, không gian và lịch trình riêng của bạn.",
            process2_title: "Kế Hoạch Riêng", process2_desc: "Chúng tôi xây dựng một kế hoạch vệ sinh và báo giá được tùy chỉnh riêng cho cơ sở của bạn.",
            process3_title: "Thực Thi", process3_desc: "Đội ngũ chuyên nghiệp của chúng tôi thực thi kế hoạch một cách hoàn hảo với thiết bị và sản phẩm hàng đầu.",
            process4_title: "Kiểm Tra Chất Lượng", process4_desc: "Chúng tôi tiến hành kiểm tra chất lượng định kỳ và lắng nghe phản hồi để đảm bảo sự hài lòng 100%.",
            about_title: "Cam Kết Về Sự Ưu Việt",
            about_desc: "Được thành lập dựa trên các nguyên tắc về sự tin cậy, Evergreen Sạch chuyên cung cấp dịch vụ vệ sinh thương mại hàng đầu. Chúng tôi tin rằng một văn phòng sạch sẽ là nền tảng của một doanh nghiệp thành công và cam kết giúp bạn đạt được điều đó.",
            testimonials_title: "Được Các Công Ty Hàng Đầu Tin Tưởng",
            testimonial1_text: `"Đội ngũ tại Evergreen rất chuyên nghiệp, đáng tin cậy và cực kỳ kỹ lưỡng. Văn phòng của chúng tôi chưa bao giờ sạch đẹp hơn thế. Rất khuyến khích!"`,
            testimonial1_author: "- Sarah L., Giám đốc điều hành Innovate Inc.",
            testimonial2_text: `"Sự chú ý đến từng chi tiết của họ không đâu sánh bằng. Chúng tôi hoàn toàn tin tưởng họ với cơ sở y tế của mình và họ luôn vượt trên cả mong đợi."`,
            testimonial2_author: "- Bác sĩ Michael Chen, Giám đốc Phòng khám",
            testimonial3_text: `"Lịch làm việc linh hoạt và chất lượng công việc luôn ở mức cao. Họ là một đối tác không thể thiếu trong hoạt động của chúng tôi. Dịch vụ 5 sao thực sự!"`,
            testimonial3_author: "- David R., Quản lý Vận hành, TechCorp",
            featured_tag: "Tiêu biểu",
            contact_title: "Liên Hệ Với Chúng Tôi",
            form_name: "Họ và Tên", form_email: "Địa chỉ Email Công ty", form_message: "Vui lòng mô tả yêu cầu vệ sinh của bạn...", form_submit: "Gửi Yêu Cầu",
            footer_text: "© 2025 Evergreen Commercial Cleaning. Một Tiêu Chuẩn Sạch Cao Hơn."
        },
    };

    // --- ## DYNAMIC CONTENT POPULATION ## ---
    const servicesData = [
        { icon: '🧹', title_key: 'service1_title', desc_key: 'service1_desc' },
        { icon: '✨', title_key: 'service2_title', desc_key: 'service2_desc' },
        { icon: '🏢', title_key: 'service3_title', desc_key: 'service3_desc' }
    ];
    const testimonialsData = [
        { text_key: 'testimonial1_text', author_key: 'testimonial1_author', stars: 5, featured: true },
        { text_key: 'testimonial2_text', author_key: 'testimonial2_author', stars: 5, featured: false },
        { text_key: 'testimonial3_text', author_key: 'testimonial3_author', stars: 5, featured: false }
    ];
    const servicesContainer = document.querySelector('.services-container');
    if (servicesContainer) {
        servicesContainer.innerHTML = servicesData.map(s => `<div class="service-card animate-on-scroll"><div class="service-icon">${s.icon}</div><h3 data-key="${s.title_key}"></h3><p data-key="${s.desc_key}"></p></div>`).join('');
    }
    const testimonialTrack = document.querySelector('.testimonial-carousel-track');
    if (testimonialTrack) {
        testimonialTrack.innerHTML = testimonialsData.map(t => `<div class="testimonial-card"><div class="testimonial-header"><div class="star-rating">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>${t.featured ? `<div class="featured-tag" data-key="featured_tag"></div>` : ''}</div><p class="testimonial-text" data-key="${t.text_key}"></p><p class="testimonial-author" data-key="${t.author_key}"></p></div>`).join('');
    }

    // --- ## CORE LOGIC & ANIMATIONS ## ---
    
    // --- Logic cho hiệu ứng gõ chữ ---
    const typingHeadline = document.getElementById('typing-headline');
    function typeWriter(element, text, i = 0) {
        if (!element) return;
        element.innerHTML = text.substring(0, i) + '<span aria-hidden="true">|</span>';
        if (i < text.length) {
            setTimeout(() => typeWriter(element, text, i + 1), 70);
        } else {
             // Ẩn con trỏ sau khi gõ xong
            element.querySelector('span').style.display = 'none';
        }
    }

    // --- Logic cho các hiệu ứng khác ---
    const langDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelector('.language-options');
    langDropdown.addEventListener('click', e => { e.stopPropagation(); langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block'; });
    document.addEventListener('click', () => { langOptions.style.display = 'none'; });
    window.setLanguage = function(lang) {
        if (!translations[lang]) lang = 'en';
        document.documentElement.lang = lang;
        const selectedLangText = document.getElementById('selected-lang-text');
        const langName = langOptions.querySelector(`a[onclick="setLanguage('${lang}')"]`).textContent;
        selectedLangText.textContent = langName;
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) elem.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
            const key = elem.getAttribute('data-key-placeholder');
            if (translations[lang] && translations[lang][key]) elem.placeholder = translations[lang][key];
        });
        langOptions.style.display = 'none';
        
        // Chạy lại hiệu ứng gõ chữ với ngôn ngữ mới
        const headlineText = translations[lang]['hero_title'];
        typeWriter(typingHeadline, headlineText);

        if (window.Tawk_API && window.Tawk_API.setAttributes) { window.Tawk_API.setAttributes({ 'language': lang }, () => {}); }
    }

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if (link.style.animation) { link.style.animation = '' } 
            else { link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; }
        });
        hamburger.classList.toggle('toggle');
    });

    // --- Slider & Carousel Logic ---
    const aboutSliderDotsContainer = document.querySelector('.about-container .slider-dots');
    const aboutImages = document.querySelectorAll('.about-container .slider-img');
    if (aboutSliderDotsContainer && aboutImages.length > 0) {
        aboutImages.forEach((_, i) => {
            const dot = document.createElement('span'); dot.classList.add('dot'); dot.dataset.index = i; if (i === 0) dot.classList.add('active'); aboutSliderDotsContainer.appendChild(dot);
        });
        const aboutDots = document.querySelectorAll('.about-container .dot'); let currentAboutIndex = 0;
        let aboutSliderInterval = setInterval(() => { currentAboutIndex = (currentAboutIndex + 1) % aboutImages.length; updateAboutSlider(currentAboutIndex); }, 4000);
        function updateAboutSlider(index) {
            currentAboutIndex = index; aboutImages.forEach(img => img.classList.remove('active')); aboutImages[index].classList.add('active'); aboutDots.forEach(d => d.classList.remove('active')); aboutDots[index].classList.add('active');
        }
        aboutDots.forEach(dot => {
            dot.addEventListener('click', (e) => { const index = parseInt(e.target.dataset.index); updateAboutSlider(index); clearInterval(aboutSliderInterval); aboutSliderInterval = setInterval(() => { currentAboutIndex = (currentAboutIndex + 1) % aboutImages.length; updateAboutSlider(currentAboutIndex); }, 6000); });
        });
    }
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) { let currentHeroSlide = 0; setInterval(() => { heroSlides[currentHeroSlide].classList.remove('active'); currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length; heroSlides[currentHeroSlide].classList.add('active'); }, 5000); }
    const testimonialTrackEl = document.querySelector('.testimonial-carousel-track');
    if (testimonialTrackEl && testimonialTrackEl.children.length > 0) { let testimonialIndex = 0; setInterval(() => { testimonialIndex = (testimonialIndex + 1) % testimonialTrackEl.children.length; testimonialTrackEl.style.transform = `translateX(-${testimonialIndex * 100}%)`; }, 6000); }

    // --- Animation on Scroll & Number Counter ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Logic cho hiệu ứng đếm số
                if (entry.target.classList.contains('stat-number')) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 giây
                    const stepTime = Math.abs(Math.floor(duration / target));
                    let currentNumber = 0;
                    const timer = setInterval(() => {
                        currentNumber += 1;
                        counter.innerText = currentNumber;
                        if (currentNumber == target) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                    observer.unobserve(counter); // Chạy 1 lần duy nhất
                }
            }
        });
    }, { threshold: 0.5 }); // Bắt đầu khi thấy 50% phần tử
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => { observer.observe(element); });
    document.querySelectorAll('.stat-number').forEach(element => { observer.observe(element); });

    // --- ## INITIAL PAGE SETUP ## ---
    setLanguage('en');
});

