import Swiper from 'swiper';
import {
    Pagination,
    Autoplay
} from 'swiper/modules';

// slider on landingPage
const homeCarousel = document.querySelector('.anywhere__carousel');
if (!!homeCarousel) {
    window.addEventListener('DOMContentLoaded', () => {
        const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
            let swiper;
    
            breakpoint = window.matchMedia(breakpoint);
    
            const enableSwiper = function(className, settings) {
                swiper = new Swiper(className, settings);
    
                if (callback) {
                    callback(swiper);
                }
            }
    
            const checker = function() {
                if (breakpoint.matches) {
                    return enableSwiper(swiperClass, swiperSettings);
                } else {
                    if (swiper !== undefined) swiper.destroy(true, true);
                    return;
                }
            };
    
            breakpoint.addEventListener('change', checker);
            checker();
        }

        resizableSwiper(
            '(max-width: 991px)',
            '.anywhere__carousel',
            {
                modules: [Pagination, Autoplay],
                slidesPerView: 1,
                spaceBetween: 15,
                speed: 600,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
        );
    });
}
