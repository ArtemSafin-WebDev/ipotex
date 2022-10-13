import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IS_MOBILE } from './utils';

import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

gsap.registerPlugin(ScrollTrigger);

export default function service() {
    const elements = Array.from(document.querySelectorAll('.js-service'));

    elements.forEach(element => {
        if (!IS_MOBILE && !element.classList.contains('js-service-with-arrows')) {
            const wrapper = element.querySelector('.service__slider-wrapper');
            const slides = Array.from(element.querySelectorAll('.swiper-slide'));
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'bottom bottom',
                    pin: true,
                    pinSpacing: true,
                    end: '150%',
                    scrub: 1
                }
            });

            const calculateOffset = () => {
                const slidesWidths = slides.reduce((prevValue, nextValue) => {
                    return prevValue + nextValue.offsetWidth;
                }, 0);

                return slidesWidths - wrapper.offsetWidth;
            };

            console.log('Slides width', calculateOffset());

            tl.to(wrapper, {
                duration: 1,
                x: () => -1 * calculateOffset()
            });
        } else {
            const container = element.querySelector('.swiper');

            new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 500,
                navigation: {
                    nextEl: element.querySelector('.service__arrow--next'),
                    prevEl: element.querySelector('.service__arrow--prev')
                }
            });
        }
    });
}
