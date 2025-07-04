document.addEventListener('DOMContentLoaded', () => {

    // --- ## DATA & TRANSLATIONS ## ---
    const translations = {
        // ... (All languages fully translated)
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
            footer_text: "© 2025 Evergreen Commercial Cleaning. Bản quyền đã được bảo hộ."
        },
        ko: {
            logo_text: "에버그린 클린",
            nav_home: "홈", nav_services: "서비스", nav_process: "프로세스", nav_about: "소개", nav_testimonials: "추천글", nav_contact: "문의",
            hero_title: "상업용 청소의 황금 표준",
            hero_subtitle: "단순히 깨끗한 작업 공간 이상을 제공합니다. 귀하의 브랜드 품질을 반영하는 깨끗하고 건강하며 생산적인 환경을 제공합니다. 꼼꼼하고 신뢰할 수 있으며 항상 일정을 준수합니다.",
            hero_cta: "프리미엄 견적 요청",
            services_title: "프리미엄 서비스",
            service1_title: "매일 유지보수", service1_desc: "쓰레기 처리, 바닥 청소, 화장실 비품 보충 및 표면 먼지 제거로 일관되게 깨끗한 환경 유지.",
            service2_title: "정밀 청소", service2_desc: "카펫 샴푸, 바닥 광택 및 포괄적인 살균 소독을 포함한 상세한 청소.",
            service3_title: "사무실 소독", service3_desc: "문 손잡이, 전등 스위치 등 접촉이 잦은 표면을 집중 소독하여 건강한 공간 보장.",
            process_title: "4단계 전문 프로세스",
            process1_title: "상담", process1_desc: "귀하의 고유한 요구 사항, 공간 및 일정을 이해하기 위해 철저한 상담부터 시작합니다.",
            process2_title: "맞춤 계획", process2_desc: "귀하의 시설에 특별히 맞춰진 맞춤형 청소 계획 및 견적을 개발합니다.",
            process3_title: "실행", process3_desc: "훈련된 전문가들이 최고 수준의 장비와 제품을 사용하여 계획을 완벽하게 실행합니다.",
            process4_title: "품질 검사", process4_desc: "100% 만족을 보장하기 위해 정기적인 품질 검사를 수행하고 귀하의 피드백을 구합니다.",
            about_title: "우수성을 향한 우리의 약속",
            about_desc: "신뢰와 믿음의 원칙을 바탕으로 설립된 에버그린 클린은 최고 수준의 상업용 청소 서비스를 제공하기 위해 최선을 다하고 있습니다. 우리는 깨끗한 사무실이 성공적인 비즈니스의 기초라고 믿으며, 전문적이고 원활한 경험으로 이를 달성할 수 있도록 돕기 위해 최선을 다하고 있습니다.",
            testimonials_title: "최고 기업들의 신뢰",
            testimonial1_text: `"에버그린 팀은 전문적이고 신뢰할 수 있으며 믿을 수 없을 정도로 철저합니다. 우리 사무실이 이렇게 좋아 보인 적이 없었습니다. 적극 추천합니다!"`,
            testimonial1_author: "- 사라 L., Innovate Inc. CEO",
            testimonial2_text: `"세부 사항에 대한 그들의 관심은 타의 추종을 불허합니다. 우리는 의료 시설을 그들에게 완전히 신뢰하며, 그들은 항상 기대를 뛰어넘었습니다."`,
            testimonial2_author: "- 마이클 첸 박사, 클리닉 디렉터",
            testimonial3_text: `"유연한 일정과 일관되게 높은 품질의 작업. 그들은 우리 운영에 필수적인 파트너입니다. 진정한 5성급 서비스입니다!"`,
            testimonial3_author: "- 데이비드 R., TechCorp 운영 관리자",
            featured_tag: "추천",
            contact_title: "문의하기",
            form_name: "성함", form_email: "회사 이메일 주소", form_message: "청소 요구 사항을 설명해주세요...", form_submit: "문의 보내기",
            footer_text: "© 2025 에버그린 상업 클리닝. 더 높은 수준의 청결."
        },
        zh: {
            logo_text: "长青清洁",
            nav_home: "首页", nav_services: "服务", nav_process: "我们的流程", nav_about: "关于我们", nav_testimonials: "客户评价", nav_contact: "联系我们",
            hero_title: "商业清洁的黄金标准",
            hero_subtitle: "我们提供的不仅仅是一个干净的工作空间。我们提供一个原始、健康、高效的环境，以反映您的品牌质量。一丝不苟，可靠，并且总是按时完成。",
            hero_cta: "请求高级报价",
            services_title: "我们的高级服务",
            service1_title: "日常维护", service1_desc: "清除垃圾、清扫地板、补充卫生间用品和擦拭表面灰尘，以保持持续整洁的环境。",
            service2_title: "深度清洁", service2_desc: "详细清洁，包括地毯清洗、地板抛光和全面消毒。",
            service3_title: "办公室消毒", service3_desc: "对门把手、电灯开关和电话等高频接触表面进行有针对性的消毒，确保健康空间。",
            process_title: "我们的四步专业流程",
            process1_title: "咨询", process1_desc: "我们从彻底的咨询开始，以了解您的独特需求、空间和时间安排。",
            process2_title: "定制计划", process2_desc: "我们为您的设施量身定制清洁计划和报价。",
            process3_title: "执行", process3_desc: "我们训练有素的专业人员使用顶级设备和产品完美地执行计划。",
            process4_title: "质量检查", process4_desc: "我们进行定期的质量检查并征求您的反馈，以确保100%的满意度。",
            about_title: "我们对卓越的承诺",
            about_desc: "长青清洁建立在可靠和信任的原则之上，提供顶级的商业清洁服务。我们相信，一个干净的办公室是成功企业的基础，我们致力于通过专业、无缝的体验帮助您实现这一目标。",
            testimonials_title: "深受顶尖公司信赖",
            testimonial1_text: `"长青团队专业、可靠，而且非常彻底。我们的办公室从未如此出色。强烈推荐！"`,
            testimonial1_author: "- 莎拉·L.，Innovate Inc. 首席执行官",
            testimonial2_text: `"他们对细节的关注是无与伦比的。我们完全信任他们处理我们的医疗设施，他们总是超出预期。"`,
            testimonial2_author: "- 迈克尔·陈博士，诊所主任",
            testimonial3_text: `"灵活的日程安排和始终如一的高质量工作。他们是我们运营中不可或缺的合作伙伴。真正的五星级服务！"`,
            testimonial3_author: "- 大卫·R.，TechCorp 运营经理",
            featured_tag: "推荐",
            contact_title: "联系我们",
            form_name: "您的全名", form_email: "公司邮箱地址", form_message: "请描述您的清洁要求...", form_submit: "发送您的查询",
            footer_text: "© 2025 长青商业清洁。版权所有。"
        },
        es: {
            logo_text: "Limpieza Evergreen",
            nav_home: "Inicio", nav_services: "Servicios", nav_process: "Nuestro Proceso", nav_about: "Sobre Nosotros", nav_testimonials: "Testimonios", nav_contact: "Contacto",
            hero_title: "El Estándar de Oro en Limpieza Comercial",
            hero_subtitle: "Ofrecemos más que un simple espacio de trabajo limpio. Proporcionamos un entorno prístino, saludable y productivo que refleja la calidad de su marca. Meticulosos, confiables y siempre puntuales.",
            hero_cta: "Solicitar Cotización Premium",
            services_title: "Nuestros Servicios Premium",
            service1_title: "Mantenimiento Diario", service1_desc: "Recogida de basura, barrido de pisos, reposición de suministros de baño y desempolvado de superficies para un ambiente consistentemente limpio.",
            service2_title: "Limpieza Profunda", service2_desc: "Limpieza detallada que incluye champú para alfombras, pulido de pisos y desinfección integral.",
            service3_title: "Desinfección de Oficinas", service3_desc: "Desinfección específica de superficies de alto contacto como pomos de puertas, interruptores de luz y teléfonos para garantizar un espacio saludable.",
            process_title: "Nuestro Proceso Profesional de 4 Pasos",
            process1_title: "Consulta", process1_desc: "Comenzamos con una consulta exhaustiva para comprender sus necesidades únicas, su espacio y su horario.",
            process2_title: "Plan Personalizado", process2_desc: "Desarrollamos un plan de limpieza y una cotización personalizados, diseñados específicamente para su instalación.",
            process3_title: "Ejecución", process3_desc: "Nuestros profesionales capacitados ejecutan el plan sin problemas utilizando equipos y productos de primer nivel.",
            process4_title: "Control de Calidad", process4_desc: "Realizamos controles de calidad regulares y buscamos su retroalimentación para garantizar una satisfacción del 100%.",
            about_title: "Nuestro Compromiso con la Excelencia",
            about_desc: "Fundada en los principios de confiabilidad y confianza, Limpieza Evergreen se dedica a proporcionar servicios de limpieza comercial de primer nivel. Creemos que una oficina limpia es la base de un negocio exitoso y nos comprometemos a ayudarlo a lograrlo con una experiencia profesional y sin fisuras.",
            testimonials_title: "Con la Confianza de las Mejores Empresas",
            testimonial1_text: `"El equipo de Evergreen es profesional, confiable e increíblemente minucioso. Nuestra oficina nunca se ha visto mejor. ¡Muy recomendable!"`,
            testimonial1_author: "- Sarah L., CEO de Innovate Inc.",
            testimonial2_text: `"Su atención al detalle es inigualable. Confiamos plenamente en ellos para nuestra instalación médica y siempre han superado las expectativas."`,
            testimonial2_author: "- Dr. Michael Chen, Director de la Clínica",
            testimonial3_text: `"Programación flexible y trabajo de alta calidad constante. Son un socio esencial en nuestras operaciones. ¡Un verdadero servicio de 5 estrellas!"`,
            testimonial3_author: "- David R., Gerente de Operaciones, TechCorp",
            featured_tag: "Destacado",
            contact_title: "Póngase en Contacto",
            form_name: "Su Nombre Completo", form_email: "Correo Electrónico de la Empresa", form_message: "Por favor, describa sus requisitos de limpieza...", form_submit: "Enviar su Consulta",
            footer_text: "© 2025 Limpieza Comercial Evergreen. Un Estándar de Limpieza Superior."
        }
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
        servicesContainer.innerHTML = servicesData.map(s => `
            <div class="service-card animate-on-scroll">
                <div class="service-icon">${s.icon}</div>
                <h3 data-key="${s.title_key}"></h3>
                <p data-key="${s.desc_key}"></p>
            </div>
        `).join('');
    }
    
    const testimonialTrack = document.querySelector('.testimonial-carousel-track');
    if (testimonialTrack) {
        testimonialTrack.innerHTML = testimonialsData.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="star-rating">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
                    ${t.featured ? `<div class="featured-tag" data-key="featured_tag"></div>` : ''}
                </div>
                <p class="testimonial-text" data-key="${t.text_key}"></p>
                <p class="testimonial-author" data-key="${t.author_key}"></p>
            </div>
        `).join('');
    }

    // --- ## CORE LOGIC & ANIMATIONS ## ---

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });


    // --- Language Dropdown Logic ---
    const langDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelector('.language-options');
    langDropdown.addEventListener('click', e => {
        e.stopPropagation();
        langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', () => langOptions.style.display = 'none');
    
    window.setLanguage = function(lang) {
        if (!translations[lang]) lang = 'en'; // Fallback to English
        
        document.documentElement.lang = lang;
        const selectedLangText = document.getElementById('selected-lang-text');
        const langName = langOptions.querySelector(`a[onclick="setLanguage('${lang}')"]`).textContent;
        selectedLangText.textContent = langName;

        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang][key]) elem.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
            const key = elem.getAttribute('data-key-placeholder');
            if (translations[lang][key]) elem.placeholder = translations[lang][key];
        });
        langOptions.style.display = 'none';

        // Tawk.to Language Sync
        if (window.Tawk_API && window.Tawk_API.setAttributes) {
            window.Tawk_API.setAttributes({
                'language': lang,
            }, function(error){
                if (error) {
                    console.error('Lỗi khi đổi ngôn ngữ Tawk.to:', error);
                }
            });
        }
    }

    // --- About Us Auto-Slider Logic ---
    const aboutSliderDotsContainer = document.querySelector('.about-container .slider-dots');
    const aboutImages = document.querySelectorAll('.about-container .slider-img');
    if (aboutSliderDotsContainer && aboutImages.length > 0) {
        aboutImages.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            if (i === 0) dot.classList.add('active');
            aboutSliderDotsContainer.appendChild(dot);
        });
        
        const aboutDots = document.querySelectorAll('.about-container .dot');
        let currentAboutIndex = 0;
        let aboutSliderInterval = setInterval(nextAboutSlide, 4000);

        function nextAboutSlide() {
            currentAboutIndex = (currentAboutIndex + 1) % aboutImages.length;
            updateAboutSlider(currentAboutIndex);
        }
        
        function updateAboutSlider(index) {
            currentAboutIndex = index;
            aboutImages.forEach(img => img.classList.remove('active'));
            aboutImages[index].classList.add('active');
            aboutDots.forEach(d => d.classList.remove('active'));
            aboutDots[index].classList.add('active');
        }

        aboutDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                updateAboutSlider(index);
                clearInterval(aboutSliderInterval);
                aboutSliderInterval = setInterval(nextAboutSlide, 6000); // Reset interval on manual click
            });
        });
    }

    // --- Hero Slider Logic ---
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        let currentHeroSlide = 0;
        setInterval(() => {
            heroSlides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active');
        }, 5000);
    }
    
    // --- Testimonial Carousel Logic ---
    const testimonialTrackEl = document.querySelector('.testimonial-carousel-track');
    if (testimonialTrackEl) {
        const testimonialCards = testimonialTrackEl.children;
        if (testimonialCards.length > 0) {
            let testimonialIndex = 0;
            setInterval(() => {
                testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
                testimonialTrackEl.style.transform = `translateX(-${testimonialIndex * 100}%)`;
            }, 6000);
        }
    }
    
    // --- Animation on Scroll Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // --- ## INITIAL PAGE SETUP ## ---
    setLanguage('en'); // Set default language on load
});
