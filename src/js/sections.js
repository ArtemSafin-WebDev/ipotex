import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { convertRemToPixels } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function sections() {
    let animationsPlayed = false;
    function playAnimations() {
        if (animationsPlayed) return;
        const pageHeader = document.querySelector('.page-header');
        const pageFooter = document.querySelector('.page-footer');
        const sections = Array.from(document.querySelectorAll('section'));
        const firstSection = sections[0]


        gsap.to([pageHeader, firstSection], {
            autoAlpha: 1,
            duration: 0.8
        });
    
        [...sections, pageFooter].forEach(section => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: () => `top+=${convertRemToPixels(4)} bottom`,
                    end: 'bottom top'
                }
            });
    
            tl.to(section, {
                autoAlpha: 1,
                duration: 0.8
            });
    
            
        });
    }
    window.addEventListener('load', () => {
       
        console.log('Load')
       
        playAnimations();
        animationsPlayed = true;
    })

    setTimeout(() => {
        console.log('Timer')
       
        playAnimations();
        animationsPlayed = true;
    }, 2000)
   
}
