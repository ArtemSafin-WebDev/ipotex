import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function header() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            const showAnim = gsap
                .from('.page-header', {
                    yPercent: -100,
                    paused: true,
                    duration: 0.2
                })
                .progress(1);

            ScrollTrigger.create({
                start: 'top top',
                end: 99999,
                onUpdate: self => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                }
            });
        }
    });
}
