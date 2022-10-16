import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay]);

export default function advantagesSliders() {
    const elements = Array.from(document.querySelectorAll('.js-advantages-sliders'));

    elements.forEach(element => {
        const slides = Array.from(element.querySelectorAll('.advantages__card-slider'));

        slides.forEach(slide => {
            const container = slide.querySelector('.swiper');

            new Swiper(container, {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                loopedSlides: 15,
                watchOverflow: true,
                speed: 3500,
                allowTouchMove: false,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                }
            });
        });
    });
}
