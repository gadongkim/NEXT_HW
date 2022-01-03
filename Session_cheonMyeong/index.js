const $carousel = document.querySelector('#Carousel');
const $carouselSlides = document.querySelector('#CarouselSlides');
const photoIds = ['1069','824','63','292','659'];

const createCarousel = ($carousel, $carouselSlides, photoIds) => {
    const DURATION = 500;
    let currentSlide = 0;
    let isMoving = false;

    //method 생성
    //1. 이미지 요소 생성
    const createImgElements = (photoIds) => {
        const cloneIds = [photoIds[photoIds.length-1], ...photoIds, photoIds[0]];

        return cloneIds.map(id => {
            const imgElement = document.createElement('img')
            imgElement.src = `https"//picsum.photos/id/${id}/500/350`;
            imgElement.alt = `${id}_캐러셀이미지`;

            return imgElement;
        })
    }
    //2. 슬라이드 이동
    
    //3. DOMContentLoaded
    //4. onLoad
    //5.onClick
    //6.transitionEnd
}

