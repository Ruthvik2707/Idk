import React from 'react'
import './sliding_cars.css'
import R from './reactpic.jpg'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// let activeIndex = 0;

// const groups = document.getElementsByClassName("card-group");

// const handleLoveClick = () => {
//   const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
//   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
//   currentGroup.dataset.status = "after";
  
//   nextGroup.dataset.status = "becoming-active-from-before";
  
//   setTimeout(() => {
//     nextGroup.dataset.status = "active";
//     activeIndex = nextIndex;
//   });
// }

//  const handleHateClick= ()=> {
//   const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
//   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
//   currentGroup.dataset.status = "before";
  
//   nextGroup.dataset.status = "becoming-active-from-after";
  
//   setTimeout(() => {
//     nextGroup.dataset.status = "active";
//     activeIndex = nextIndex;
//   });
// }
function sliding_card() {
  return (
  <div class='mai'>  <div class="card-swiper">
  <div class="card-groups">
    <div class="card-group" data-index="0" data-status="active">
      <div class="little-card card">

      </div>
      <div class="big-card card">
        <img  class='big' alt='react' src={R}></img>

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
    <div class="card-group" data-index="1" data-status="unknown">
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
    <div class="card-group" data-index="2" data-status="unknown">
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
  </div>
  {/* <div class="card-swiper-buttons">
    <button id="hate-button" onClick={handleHateClick}>
      <i className='fa-solid fa-x'></i>
    </button>
    <button id="love-button" onClick={handleLoveClick}>
      <i className="fa-solid fa-heart"></i>
    </button>
  </div>  */}
</div>
</div>


)
}

export default sliding_card;