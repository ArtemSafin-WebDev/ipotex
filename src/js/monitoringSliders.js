import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { convertRemToPixels, IS_MOBILE } from './utils';
Swiper.use([Navigation, EffectFade]);
gsap.registerPlugin(ScrollTrigger);

export default function monitoringSliders() {
    const elements = Array.from(document.querySelectorAll('.monitoring__slider'));

    

    elements.forEach((element, elementIndex) => {
        const container = element.querySelector('.swiper');
        const wrapper = element.querySelector('.monitoring__slider-wrapper');

        new Swiper(container, {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 15,
            watchOverflow: true,
            speed: 500,
            allowTouchMove: true
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                markers: false
            }
        });

        if (elementIndex % 2 === 0) {
            tl.to(wrapper, {
                x: () => IS_MOBILE ? convertRemToPixels(8) : convertRemToPixels(8),
                duration: 1
            });
        } else {
            tl.to(wrapper, {
                x: () => IS_MOBILE ? -1 * convertRemToPixels(8) : -1 * convertRemToPixels(8),
                duration: 1
            });
        }
    });
}
