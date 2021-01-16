document.querySelector('.sideBar').classList.add('hidden');
document.querySelector('.line').addEventListener("click",function(){
    document.querySelector('.line').classList.toggle("hidden");
    document.querySelector('.sideBar').classList.toggle("hidden");
    
});
document.querySelector('.cross').addEventListener("click",function(){
    document.querySelector('.sideBar').classList.toggle("hidden");
    document.querySelector('.line').classList.toggle("hidden");
});

