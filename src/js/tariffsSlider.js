import {Swiper, Navigation, EffectFade, Autoplay} from 'swiper';
import {IS_MOBILE} from "./utils";

Swiper.use([Navigation, EffectFade]);

export default function tariffsSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-tariffs-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
        })
    })
}