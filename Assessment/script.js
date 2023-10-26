const Home=document.querySelector(".Home")
const Services=document.querySelector(".Services")
const About=document.querySelector(".About")
const Blog=document.querySelector(".Blog")
const Reviews=document.querySelector(".Reviews")
Home.addEventListener("click",()=>{
    const prev=document.querySelector("#active");
    Home.setAttribute('id','active');
    prev.removeAttribute('id');
})
Services.addEventListener("click",()=>{
    const prev=document.querySelector("#active");
    Services.setAttribute('id','active');
    prev.removeAttribute('id');
})
About.addEventListener("click",()=>{
    const prev=document.querySelector("#active");
    About.setAttribute('id','active');
    prev.removeAttribute('id');
})
Blog.addEventListener("click",()=>{
    const prev=document.querySelector("#active");
    Blog.setAttribute('id','active');
    prev.removeAttribute('id');
})
Reviews.addEventListener("click",()=>{
    const prev=document.querySelector("#active");
    Reviews.setAttribute('id','active');
    prev.removeAttribute('id');
})

