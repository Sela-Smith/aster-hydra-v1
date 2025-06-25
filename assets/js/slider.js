class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.slider-control.prev');
        this.nextBtn = document.querySelector('.slider-control.next');
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 5000; // 5 segundos
        
        this.init();
    }
    
    init() {
        // Iniciar o slide automático
        this.startAutoSlide();
        
        // Event listeners para os botões de navegação
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Event listeners para os indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pausar o slide automático quando o mouse estiver sobre o slider
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Suporte para toque em dispositivos móveis
        this.setupTouchEvents();
    }
    
    showSlide(index) {
        // Esconder todos os slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Mostrar o slide atual
        this.slides[index].classList.add('active');
        this.indicators[index].classList.add('active');
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
        this.resetAutoSlide();
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
        this.resetAutoSlide();
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.showSlide(index);
            this.resetAutoSlide();
        }
    }
    
    startAutoSlide() {
        if (!this.autoSlideInterval) {
            this.autoSlideInterval = setInterval(() => this.nextSlide(), this.autoSlideDelay);
        }
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        const slider = document.querySelector('.hero-slider');
        
        if (!slider) return;
        
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.stopAutoSlide();
        }, { passive: true });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoSlide();
        }, { passive: true });
    }
    
    handleSwipe() {
        const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe para a esquerda - próximo slide
            this.nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe para a direita - slide anterior
            this.prevSlide();
        }
    }
}

// Inicializar o slider quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = new HeroSlider();
    
    // Garantir que o primeiro slide esteja ativo
    heroSlider.showSlide(0);
});
