
gsap.from(".hero-content", {duration: 1.5, opacity:0, y:50});
gsap.from(".hero button", {duration: 1, opacity:0, scale:0, delay:0.5});
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
});