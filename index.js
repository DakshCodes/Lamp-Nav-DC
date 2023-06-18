var icons = document.querySelectorAll(".icon")
var shadow = document.querySelector("#shadow")

icons.forEach((val, index) => {
    val.addEventListener("click", () => {
        dullandbright();
        gsap.to('#shadow', {
            x: index * 100,
            ease: Expo.easeInOut,
            duration: 0.23
        })
        gsap.to(val.children, {
            opacity: 1
        })
    })
})

function dullandbright() {
    gsap.to(".icon i", {
        opacity: 0.3
    })
    gsap.to(".icon p", {
        opacity: 0.3
    })
}