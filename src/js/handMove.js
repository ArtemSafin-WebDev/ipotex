import gsap from 'gsap';

export default function cursor() {
    const cursorWrapper = document.querySelector('#hand-wrapper');
    const cursorImage = document.querySelector('#hand');

    function followMouse(e) {
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = parseInt(e.clientX - rect.left, 10);
        const offsetY = parseInt(e.clientY - rect.top, 10);

        gsap.to(cursorImage, {
            duration: 0.6,
            left: offsetX,
            top: offsetY,
            overwrite: true
        });
    }

    function mouseLeave() {
        console.log('Mouseleave');

        gsap.to(cursorImage, {
            duration: 0.6,
            left: '50%',
            top: '50%',
            overwrite: true
        });
    }

    cursorWrapper.addEventListener('mousemove', followMouse);

    cursorWrapper.addEventListener('mouseleave', mouseLeave);
}
