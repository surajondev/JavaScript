//---------- Variables-------

var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');

var slideInt; //to set ongoing time of slides
var intTime = 5000; // interval time 5000ms

//---Iterate all radio navigation button----
rbtn.forEach(function(item, index){
    //click event for buttons
    item.addEventListener('click',function(){
        manButtonNav(index);
    });
});

console.log(slides[slides.length - 1]);

//-----Click Events for Arrows----
// Right Arrow 
rightArrow.addEventListener('click',function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

//Left Arrow
leftArrow.addEventListener('click',function(e) {
    e.preventDefault();
    prevSlide();
    clrInterval();
});

//-----Function for radio navigation-----
function manButtonNav(index) {
    for(var i = 0; i < slides.length; i++){
        //set slide and radio navigation button
        if(i !== index){
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }
        else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
    }
    clrInterval();
}

//-----Function for the next slide-----
function nextSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');

    // Unset Current Slide and Radio Button
    curr.classList.remove('curr');
    active.classList.remove('active');

    // Set Next Slide and Radio Button
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

//-----Function for the previous slide-----
function prevSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');

    // Unset Current Slide and Radio Button
    curr.classList.remove('curr');
    active.classList.remove('active');

    // Set Previous Slide and Radio Button
    if(curr.previousSibling){
        curr.previousElementSibling.classList.add('curr');
        active.previousElementSibling.classList.add('active');
    }
    else{
        //there have a problem
        //???????????????????????????????????????????????????????????
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
        
}
//----Function for cler Interval-----
function clrInterval() {
    clearInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

//----Automatic Slide Navigation----
slideInt = setInterval(nextSlide, intTime);
