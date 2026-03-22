const img= document.querySelectorAll('.gallery img');
const main=document.querySelector(".preview img, #pre img, .preview, #pre");

if(img.length && main)
{
    const setMain=src => {
        if(main.tagName==="IMG"){
            main.src=src;
        }
        else{
            main.style.backgroundimage="url(${src})";
        }    
    };
    setMain(img[0].src)

    img.forEach(img => {
        img.addEventListener("click",event =>{
            setMain(event.target.src)
        })
    })
}

img.forEach((image) => {
    image.addEventListener('click', function(event){
        removeHighlight();
        image.classList.add("active","fade-in");
    })
});

function removeHighlight(){
    img.forEach((image) => {
        image.classList.remove("active");
    });
}