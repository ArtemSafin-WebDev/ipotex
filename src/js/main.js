import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import service from './service';
import teamCards from './teamCards';
import monitoringSliders from './monitoringSliders';
import cursor from './handMove';
import header from './header';
import sections from './sections';
import tariffsSlider from './tariffsSlider';
import reviewsSlider from './reviewsSlider';
import advantagesSliders from './advantagesSliders';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    service();
    teamCards();
    monitoringSliders();
    cursor();
    header();
    sections();
    tariffsSlider();
    reviewsSlider();
    advantagesSliders();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
