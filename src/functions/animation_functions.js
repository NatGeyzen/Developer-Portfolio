import gsap from 'gsap';

const animateOpacityToZero = (id) => {
    gsap.to(`#${id}`, {
        opacity: 0,
        duration: 200
    });
};

const animateOpacityToOne = (id) => {
    gsap.to(`#${id}`, {
        opacity: 1
    });
};

export const fadeOutCurrentWordAndFadeInNextWord = (idCurrent, idNext) => {
    animateOpacityToZero(idCurrent);
    setTimeout(() => {
        animateOpacityToOne(idNext);
    }, 200)
    
};

