document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileBtn = document.getElementById('closeMobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuItems = document.querySelectorAll('.mobile-nav-item');

    function toggleMobileMenu() {
        const scrollbarWidth = getScrollbarWidth();
        const isActive = mobileMenu.classList.toggle('active');

        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            navbar.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            navbar.style.paddingRight = '';
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (closeMobileBtn) closeMobileBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            if(mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // --- Login Modal Logic ---
    const loginModal = document.getElementById('loginModal');
    const openBtns = [document.getElementById('heroLoginBtn'), document.getElementById('mobileLoginBtn')];
    const closeBtn = document.getElementById('closeLoginModal');
    const loginForm = document.querySelector('.login-form');

    function openModal(e) {
        if(e) e.preventDefault();
        const scrollbarWidth = getScrollbarWidth();
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        navbar.style.paddingRight = `${scrollbarWidth}px`;
    }

    function closeModal() {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        navbar.style.paddingRight = '';
    }

    openBtns.forEach(btn => {
        if(btn) btn.addEventListener('click', openModal);
    });

    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on overlay click
    if(loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent default form submission
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            const originalStyle = btn.getAttribute('style');
            
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Cargando...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Sesión Iniciada!';
                btn.style.backgroundColor = '#0E665B';
                btn.style.color = '#ffffff';

                setTimeout(() => {
                    closeModal();
                    btn.innerHTML = originalText;
                    btn.setAttribute('style', originalStyle || '');
                    btn.disabled = false;
                    loginForm.reset();
                }, 1500);
            }, 1500);
        });
    }

    // --- Intersection Observer (Scroll Animations) ---
    const animateElements = document.querySelectorAll('.view-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Animate hero elements on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .view-animate');
        heroElements.forEach(el => el.classList.add('in-view'));
    }, 100);

    // --- Contact Form Logic - Web3Forms Integration ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            const originalStyle = btn.getAttribute('style');
            
            // Referencia: https://docs.web3forms.com/
            
            // =================================================================
            // IMPORTANTE PARA EL EQUIPO DE DESARROLLO:
            // =================================================================
            // Antes de poner esto en producción, DEBES reemplazar la access_key
            // en el HTML (index.html) por tu key real de Web3Forms.
            // 
            // Pasos:
            // 1. Ve a https://web3forms.com y regístrate
            // 2. Copia tu Access Key del dashboard
            // 3. En index.html, busca: value="TU_ACCESS_KEY_AQUI"
            // 4. Reemplázalo con tu key real
            // =================================================================
            
            // Mostrar estado de enviando
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
            btn.style.opacity = '0.8';
            btn.disabled = true;
            
            // Ocultar mensajes previos
            if(formStatus) {
                formStatus.style.display = 'none';
                formStatus.className = 'form-status';
            }
            
            // Recopilar datos del formulario
            const formData = new FormData(contactForm);
            
            // Enviar a Web3Forms usando fetch (AJAX)
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                const json = await response.json();
                
                if (response.status === 200 && json.success) {
                    // ÉXITO: El formulario se envió correctamente
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje Enviado!';
                    btn.style.backgroundColor = '#0E665B';
                    btn.style.color = '#ffffff';
                    
                    if(formStatus) {
                        formStatus.innerHTML = '<i class="fa-solid fa-check-circle"></i> Gracias por contactarnos. Nos pondremos en comunicación pronto.';
                        formStatus.style.color = '#0E665B';
                        formStatus.style.display = 'block';
                    }
                    
                    // Resetear formulario después de 2 segundos
                    setTimeout(() => {
                        contactForm.reset();
                        btn.innerHTML = originalText;
                        btn.setAttribute('style', originalStyle || '');
                        btn.disabled = false;
                        if(formStatus) formStatus.style.display = 'none';
                    }, 3000);
                    
                } else {
                    // ERROR: La API respondió con error
                    throw new Error(json.message || 'Error al enviar el formulario');
                }
            })
            .catch((error) => {
                // ERROR: Manejo de errores de red o API
                console.error('Error Web3Forms:', error);
                
                btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error al Enviar';
                btn.style.backgroundColor = '#dc3545';
                btn.style.color = '#ffffff';
                
                if(formStatus) {
                    formStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Hubo un error al enviar. Por favor intenta nuevamente o contáctanos directamente.';
                    formStatus.style.color = '#dc3545';
                    formStatus.style.display = 'block';
                }
                
                // Restaurar botón después de 3 segundos
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.setAttribute('style', originalStyle || '');
                    btn.disabled = false;
                    if(formStatus) formStatus.style.display = 'none';
                }, 3000);
            });
        });

        // Add floating label effect
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }

    // --- Tech Tab Switcher ---
    const techTabs = document.querySelectorAll('.tech-tab');
    const techPanels = document.querySelectorAll('.tech-panel');

    techTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            techTabs.forEach(t => t.classList.remove('active'));
            techPanels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`.tech-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
        });
    });

    // --- Parallax Effect for Glow Orbs ---
    const glowOrbs = document.querySelectorAll('.glow-orb');
    
    if (glowOrbs.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            glowOrbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const x = mouseX * speed;
                const y = mouseY * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Card Hover Sound Effect (Optional - Visual Feedback) ---
    const cards = document.querySelectorAll('.service-card, .portfolio-card, .team-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                    c.style.transform = 'scale(0.98)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            cards.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = '';
            });
        });
    });

    // --- Add Loading Animation for Images ---
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            img.addEventListener('error', function() {
                // Fallback or just show broken icon but don't hide it completely
                this.style.opacity = '1'; 
            });
            img.style.opacity = '0';
        }
        img.style.transition = 'opacity 0.4s ease';
    });

});
