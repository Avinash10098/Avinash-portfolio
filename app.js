
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locomotive();


function revelFunction() {
    const revel = document.querySelectorAll('.revel');
    revel.forEach(function (element) {
        const parent = document.createElement('span');
        const child = document.createElement('span');

        parent.classList.add('parent');
        child.classList.add('child');

        child.innerHTML = element.innerHTML;
        parent.appendChild(child);

        element.innerHTML = "";
        element.appendChild(parent);
    })
}

revelFunction();

function loadingAnimation() {
    var tl = gsap.timeline();
    tl.to('.black .child span', {
        x: 0,
        delay: 0.6,
        duration: .7,
        stagger: 0.2,
        ease: "circ.out",

    })
    tl.to('.black .child', {
        y: -150,
        delay: 0.6,
        duration: .6,
        ease: "circ.out",
    })

    tl.to('.black', {
        height: 0,
        // delay: 0.2,
        duration: 1,
        ease: Expo.easeInOut
    })
    tl.to('.green', {
        height: "98%",
        top: 0,
        duration: 0.99,
        delay: -1.02,
        ease: "Circ.easeInOut",
    })
    tl.to('.green', {
        height: "0%",
        duration: 1,
        delay: -.4,
        ease: "Circ.easeInOut",
        onComplete: function () {
            tl.to('#main', {
                zIndex: '9999',
            })
            svgAnimation();
            animateHomepage();
        }
    })
}

loadingAnimation();

function setUpElement() {
    gsap.set('.navbar a ', {
        y: "-100%",
        opacity: 0,
    })

    gsap.set('.home span .child', {
        y: "100%",
    })
    gsap.set('.arrow', {
        y: "100%",
        opacity: 0,
    })

    gsap.set('.about-heading .child ', {
        y: 176,
    })

    gsap.set('.project .child span', {
        y: 200,
        // opacity: 0
    })
}

setUpElement();

function animateHomepage() {
    var tl = gsap.timeline();
    tl.to('.home span .child', {
        y: "0",
        opacity: 1
    })
    tl.to('.navbar a', {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut
    })
    tl.to('.arrow', {
        y: 0,
        opacity: 1,
    })
}

function svgAnimation() {
    var tl = gsap.timeline();
    tl.to('svg path', {
        strokeDashoffset: 0,
        duration: 1,
        delay: 0.02,
        ease: Expo.easeIn,
    })
}
function sectionAbout() {
    gsap.to('.about-heading .child', {
        y: 0,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            scroller: '#main',
            // markers: true,
            start: "top 50%",
        },
    })
}

sectionAbout();

function projectSection() {
    gsap.to('.project .child span', {
        y: 0,
        // opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#project-section',
            scroller: '#main',
            // markers: true,
            start: "top 70%",
        },
    })
}

projectSection();

gsap.from('.about-container', {
    y: 200,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
        trigger: '.about-container',
        scroller: '#main',
        // markers: true,
    }
})




