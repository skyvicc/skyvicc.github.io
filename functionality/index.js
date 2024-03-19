// DOM elements

const navDestinationsArray = document.querySelectorAll('.nav-destination')
const sectionOpening = document.querySelector('.opening-section')
const sectionAbout = document.querySelector('.about-section')
const sectionProductsServices = document.querySelector('.products-and-services')
const sectionContact = document.querySelector('.contact-section')
const continueBtn = document.querySelector('.continue-btn')
const backToTheTopButton = document.querySelector('.back-to-the-top-btn')


// About section DOM elements
const aboutLeftDiv = document.querySelector('.about-left-div')



// Products section DOM elements
const item01 = document.querySelector('.item-01')
const item02 = document.querySelector('.item-02')
const item03 = document.querySelector('.item-03')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const allItems = document.querySelectorAll('.item')
const allDots = document.querySelectorAll('.dot')
//  [...]
const viewProductsArray = document.querySelectorAll('.view-all-btn')
const productsWindow = document.querySelector('.products-window')
const productItemWrapper = document.querySelector('.product-item-wrapper')
const productWindowCloseBtn = document.querySelector('.product-window-close-btn')
const pensDiv = document.querySelector('.pens')
const pensBtn = document.querySelector('.pens-btn')
const pencilsDiv = document.querySelector('.pencils')
const pencilsBtn = document.querySelector('.pencils-btn')

// Contact section DOM elements
const p01 = document.querySelector('.p-01')
const p02 = document.querySelector('.p-02')
const p03 = document.querySelector('.p-03')
const workScheduleWrapper = document.querySelector('.work-schedule-wrapper')
const workTable = document.querySelector('.work-table')
const viewScheduleBtn = document.querySelector('.view-schedule-btn')



// mobile nav destinations 

const mobileNavImg = document.querySelector('.mobile-nav-lines')
const mobileNavContainer = document.querySelector('.mobile-nav-container')
const mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn')
const sectionMobProductsServices = document.querySelector('.products-and-services-mobile')
const sectionMobContact = document.querySelector('.contact-section-mobile')
const mobBackTop = document.querySelector('.mob-back-to-top')


const mobileNav = document.querySelector('.mobile-nav')
const mobNavHome = document.querySelector('.mob-nav-home')
const mobNavAbout = document.querySelector('.mob-nav-about')
const mobNavProducts = document.querySelector('.mob-nav-products')
const mobNavContact = document.querySelector('.mob-nav-contact')
// [...]


const sectionsArray = [sectionOpening, sectionAbout, sectionProductsServices, sectionContact]
const mobNavClosingListedElements = [sectionOpening, sectionAbout, sectionMobProductsServices, sectionMobContact]

for(let i = 0; i < navDestinationsArray.length; i++){
    navDestinationsArray[i].addEventListener('click', ()=>{
        sectionsArray[i].scrollIntoView()
    })
}
continueBtn.addEventListener('click', ()=>{
    sectionProductsServices.scrollIntoView()
})
backToTheTopButton.addEventListener('click', ()=>{
    sectionOpening.scrollIntoView();
})

// MOBILE END SECTIONS ARE NOT INCLUDED (FIX THE BUG)
for(let i = 0; i < mobNavClosingListedElements.length; i++){
  mobNavClosingListedElements[i].addEventListener('click', ()=>{
    mobileNavClosing()
  })
}


//
function animationScrollTrigger(target, animation){

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Define the callback function
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animation);
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target)}


animationScrollTrigger(item01, 'item-jumpers')
animationScrollTrigger(item02, 'item-jumpers')
animationScrollTrigger(item03, 'item-jumpers')

animationScrollTrigger(p01, 'text-info-animator')
animationScrollTrigger(p02, 'text-info-animator')
animationScrollTrigger(p03, 'text-info-animator')

animationScrollTrigger(document.querySelector('.contact-img'), 'contact-img-animation')




let itemCounter = 0;

function nextItem(itemIndex){
  if(itemCounter == allItems.length - 3){
    return(alert('No more items'))
  }
    allItems[itemIndex].style.display = 'none'
    allDots[itemIndex].style.backgroundColor = 'white';

    allItems[itemIndex + 3].style.display = 'block'
    allDots[itemIndex + 3].style.backgroundColor ='black'
    itemCounter++
    // alert(itemCounter)
}


function prevItem(itemIndex){
  if(itemCounter == 0){
    return
  }
  allItems[itemIndex - 1].style.display = 'block';
  allDots[itemIndex - 1].style.backgroundColor ='black'

  allItems[itemIndex + 2].style.display = 'none';
  allDots[itemIndex + 2].style.backgroundColor = 'white';
  itemCounter--
}


prevBtn.addEventListener('click', ()=>{prevItem(itemCounter)})
nextBtn.addEventListener('click', ()=>{nextItem(itemCounter)})

animationScrollTrigger(aboutLeftDiv, 'about-left-div-appearing')



// view products


for(let i = 0; i < viewProductsArray.length; i++){
  viewProductsArray[i].addEventListener('click', ()=>{
  productsWindow.style.display = 'block' 
  
  productItemWrapper.scrollTop = 0;
})}



productWindowCloseBtn.addEventListener('click', ()=>{
  productsWindow.style.display = 'none'
})

// 

let viewHideSwitch = false

function workingTableHandler(){
  if(viewHideSwitch == false){
      workScheduleWrapper.style.display = 'block'
  setTimeout(()=>{
    workScheduleWrapper.style.height = '7rem'
    setTimeout(()=>{
      workScheduleWrapper.scrollIntoView()
    }, 100)
  }, 1)
    
    viewScheduleBtn.textContent = 'Hide schedule'
    viewHideSwitch = true
  }
  else{
    workTable.style.display = 'none'
    workScheduleWrapper.style.height = '0px'
  
    setTimeout(()=>{
      workTable.style.display = 'inline-block'
      workScheduleWrapper.style.display = 'none'
    }, 250)

    viewScheduleBtn.textContent = 'View schedule'
    viewHideSwitch = false
  }
}
viewScheduleBtn.addEventListener('click', ()=>{
  workingTableHandler()
})




// products window functionality

// pens and stuff



pensBtn.addEventListener('click', ()=>{
  pensDiv.scrollIntoView()
})



pencilsBtn.addEventListener('click', ()=>{
  pencilsDiv.scrollIntoView()
})


// mobile nav


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let currentPosition = window.scrollY;

  let scrollDirection = currentPosition > lastScrollTop ? 'down' : 'up';
  
  lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;

  if (scrollDirection === 'down') {
    mobileNav.style.top = '-50%'
  } else {
    mobileNav.style.top = '0%'
  }
});

function mobileNavClosing(){
  mobileNavContainer.style.transform = 'translate(-150%, -50%)'
  
  setTimeout(()=>{
    mobileNavContainer.style.display = 'none'
    mobileNavContainer.style.transform = 'translate(-50%, -50%)'
  }, 250)

}



mobileNavImg.addEventListener('click', ()=>{
  mobileNavContainer.style.display = 'block'
})

mobileNavCloseBtn.addEventListener('click', ()=>{
  mobileNavClosing()
})
mobNavHome.addEventListener('click', ()=>{
  mobileNavClosing()
  sectionOpening.scrollIntoView()
})
mobNavAbout.addEventListener('click', ()=>{
  mobileNavClosing()
  sectionAbout.scrollIntoView()
})
mobNavProducts.addEventListener('click', ()=>{
  mobileNavClosing()
  sectionMobProductsServices.scrollIntoView()
})
mobNavContact.addEventListener('click', ()=>{
  mobileNavClosing()
  sectionMobContact.scrollIntoView()
})
mobBackTop.addEventListener('click', ()=>{
  sectionOpening.scrollIntoView()
})

// mobile outer event listener 

