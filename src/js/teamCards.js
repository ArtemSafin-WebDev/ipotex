import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { IS_MOBILE } from './utils';

export default function teamCards() {
    const cards = Array.from(document.querySelectorAll('.about__team-card'));

    cards.forEach(card => {
        const openBtn = card.querySelector('.about__team-card-link');
        const closeBtn = card.querySelector('.about__team-card-hidden-close');
        const hiddenContent = card.querySelector('.about__team-card-hidden-content');

        openBtn.addEventListener('click', event => {
            event.preventDefault();
            hiddenContent.classList.add('active');
            if (IS_MOBILE) {
                disableBodyScroll(hiddenContent, {
                    reserveScrollBarGap: true
                });
            }
        });

        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            hiddenContent.classList.remove('active');
            if (IS_MOBILE) {
                clearAllBodyScrollLocks();
            }
        });

        hiddenContent.addEventListener('click', function(event) {
            if (event.target === this && IS_MOBILE) {
                hiddenContent.classList.remove('active');
                clearAllBodyScrollLocks();
            }
        });
    });
}
