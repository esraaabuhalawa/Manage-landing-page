//variables
const x = document.getElementById('enter');
const btn = document.getElementById('navBtn');
const closeBtn = document.getElementById('closeBtn');
const navList = document.getElementById('popBg');
const dots = document.getElementsByClassName('dot');
const slides = document.getElementsByClassName('member');


   // navbar btn function
   btn.addEventListener("click",function(){
      event.preventDefault();
      navList.classList.add('active');
      navList.style.display = "block";
     // document.body.style.overflowY = "hidden";
      btn.style.display = "none";
      closeBtn.style.display = "block";
      alert("clicked");
   });
   closeBtn.addEventListener('click',function(){
      navList.style.display = "none";
      btn.style.display = "block";
      closeBtn.style.display = "none";
   });

   // slider at bottom
   let currentSlide = 0;  
   for (let i = 0; i < dots.length; i++) {
      const dot = dots [i];
      dots[currentSlide].classList.add("active1");
         dot.addEventListener('click', function(){
            currentSlide = i;
            event.preventDefault();
            for(let j = 0;  j< dots.length; j++) {
               if(i !== j){
                  slides[j].style.display = "none";
                  dots[j].classList.remove("active1");
               }else{
                  slides[j].style.display = "block";
                  dots[j].classList.add("active1");
               }
            }
         });
   }
 

   //Check Validation for Email
   x.addEventListener("click", function(){
   event.preventDefault();
    let userEmail = document.getElementById('useremail').value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result = regex.test(userEmail);
    if(result){
       alert(true);
    }else{
       let message = document.getElementById('validMessage');
       message.innerHTML = "Please insert a valid email";
       return (false)
    }    
});
