
document.addEventListener("DOMContentLoaded", function() {

    const upAnimation = document.querySelectorAll('.item-up');
    const leftAnimation = document.querySelectorAll('.item-left');
    const rightAnimation = document.querySelectorAll('.item-right');
  
    // Up
    upAnimation.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 97%",
                toggleActions: "play reverse play reverse",
            },

            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        });
    });

    // left
    leftAnimation.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 97%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 0,
            x: -25,
            duration: 0.7,
            ease: "power2.out"
        });
    });

    // right
    rightAnimation.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 97%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 0,
            x: 25,
            duration: 0.7,
            ease: "power2.out"
        });
    });
});