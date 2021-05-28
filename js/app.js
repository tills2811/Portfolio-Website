const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')


themeBtn1.addEventListener('click',()=>{
    document.body.classList.toggle('light')
})

themeBtn2.addEventListener('click',()=>{
    document.body.classList.toggle('light')
})

const t1 = gsap.timeline({ defaults: {ease: 'slow'}})


t1.from('.illus',{
    opacity: 0,
    duration: .5,
    delay: 1
}) .to('#y1',{
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .5
},'-=5') .to('#y2',{
    x: '180px',
    repeat: -1,
    yoyo: true,
    duration: .5
},'-=5') .to('#r1',{
    x: '160px',
    repeat: -1,
    yoyo: true,
    duration: .5
},'-=5') .to('#y3',{
    x: '60px',
    repeat: -1,
    yoyo: true,
    duration: .5
},'-=5')

const t2 = gsap.timeline({defaults: {ease:'power4'}})

t2.from('.heroimg',{
    opacity: 0,
    duration: 2,
    delay: 1,
    y: '-20px'
}) .from(' .hero .name',{
    opacity: 0,
    y: '100%',
    duration: 1 
},'-=2') .from(' .hero .herobtns .btn',{
    opacity: 0,
    y: '100%',
    duration: .2,
    stagger: .3
},'-=1').from(' .navbar',{
    opacity: 0,
    delay: 1,
    duration: 2
},'-=2')


const scrollAbt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: '400px bottom',
        end: '-100px top',
    }
})

scrollAbt.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}) .from('.about .aboutcontent', {
    y: '50%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
}) .from('.about .aboutbtn', {
    y: '100%',
    opacity: 0,
    duration: 0.2
})




const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        start: '400px bottom',
        end: 'top top',
    }
})

scrollSkills.from('.skills .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}) .from('.skills .cardrow .card', {
    x: '-100%',
    opacity: 0.5,
    duration: 0.7,
    stagger: .1 
},'-=0.6')



const scrollProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: '400px bottom',
        end: 'top top',
    }
})


scrollProjects.from('.projects .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}) .from('.projects .cardrow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    stagger: .1 
},'-=0.6')



const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'top centre',
    }
})

scrollContact.from('.contact .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}) .from('.contact .iconsrow .icon', {
    x: '-100%',
    opacity: 0.5,
    duration: 0.7,
    stagger: .1 
},'-=0.6')