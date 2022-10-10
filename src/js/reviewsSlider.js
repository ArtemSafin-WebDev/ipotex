import {EffectFade, Navigation, Swiper} from 'swiper';

Swiper.use([Navigation, EffectFade]);


export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.reviews__arrow--next'),
                prevEl: element.querySelector('.reviews__arrow--prev')
            }
        })

    })
}