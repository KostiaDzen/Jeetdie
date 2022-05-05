// burger-menu
const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.side-bar');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active')
})

// adaptiv-foto 
function ibg(){
    let ibg = document.querySelectorAll('.ibg');
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }   
}

ibg();

// <COPY_LINK> =========================
const copy = document.querySelector('.copy');
const copyLink = document.querySelector('.contract__column-container');
const copyBlock = document.querySelector('.copied__block');
const copyBlock2 = document.querySelector('.copied__block2');

//copyBlock2.addEventListener('mouseover', leaveCopy);
copy.addEventListener('click', clickCopy);
copy.addEventListener('mouseover', hoverCopy);
copy.addEventListener('mouseleave', leaveCopy);


function hoverCopy() {
  copyBlock2.style.display = 'flex';
}

function leaveCopy() {
  copyBlock2.style.display = 'none';
}

function clickCopy() {
  copyBlock2.style.display = 'none';
  navigator.clipboard.writeText(copyLink.innerText);
  copyBlock.classList.toggle('active');
  if (!copyBlock.classList.contains('active')) {
      window.clearTimeout(copyBlock);
      copyBlock.style.display = 'flex';
      copyBlock.style.transition = 'opacity 0.5s ease-in-out';
  } else {
      //copyBlock.style.transition = 'opacity 1s ease-in 0s';
      copyBlock.style.transition = ' none';
      setTimeout(clickCopy, 500);
  }
}


// CARUSEL
const { gsap} = window;

const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};

var buttons2 = {
  prev: document.querySelector(".btn--left2"),
  next: document.querySelector(".btn--right2"),
};

buttons.next.addEventListener("click", () => {
  swapCards("right");
  swapCards2("right");
});

buttons2.next.addEventListener("click", () => {
  swapCards("right");
  swapCards2("right");
});

buttons.prev.addEventListener("click", () => {
  swapCards("left");
  swapCards2("left");
});

buttons2.prev.addEventListener("click", () => {
  swapCards("left");
  swapCards2("left");
});

const cardsContainerEl = document.querySelector(".cards__wrapper");
//const appBgContainerEl = document.querySelector(".app__bg");

const cardsContainerEl2 = document.querySelector(".cards__wrapper2");
//const appBgContainerEl2 = document.querySelector(".app__bg2");

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  const previousCardEl = cardsContainerEl.querySelector(".previous--card");
  const nextCardEl = cardsContainerEl.querySelector(".next--card");

  swapCardsClass();
  function swapCardsClass() {
  currentCardEl.classList.remove("current--card");
  previousCardEl.classList.remove("previous--card");
  nextCardEl.classList.remove("next--card");

  currentCardEl.style.zIndex = "50";

  if (direction === "right") {
    previousCardEl.style.zIndex = "20";
    nextCardEl.style.zIndex = "30";

    currentCardEl.classList.add("previous--card");
    previousCardEl.classList.add("next--card");
    nextCardEl.classList.add("current--card");
    

  } else if (direction === "left") {
    previousCardEl.style.zIndex = "30";
    nextCardEl.style.zIndex = "20";

    currentCardEl.classList.add("next--card");
    previousCardEl.classList.add("current--card");
    nextCardEl.classList.add("previous--card");
  }
  }
};

function swapCards2(direction) {
  const currentCardEl2 = cardsContainerEl2.querySelector(".current--card2");
  const previousCardEl2 = cardsContainerEl2.querySelector(".previous--card2");
  const nextCardEl2 = cardsContainerEl2.querySelector(".next--card2");

  swapCardsClass2();

  function swapCardsClass2() {
    currentCardEl2.classList.remove("current--card2");
    previousCardEl2.classList.remove("previous--card2");
    nextCardEl2.classList.remove("next--card2");
  
    currentCardEl2.style.zIndex = "50";
  
    if (direction === "right") {
      previousCardEl2.style.zIndex = "20";
      nextCardEl2.style.zIndex = "30";
  
      currentCardEl2.classList.add("previous--card2");
      previousCardEl2.classList.add("next--card2");
      nextCardEl2.classList.add("current--card2");
  
    } else if (direction === "left") {
      previousCardEl2.style.zIndex = "30";
      nextCardEl2.style.zIndex = "20";
  
      currentCardEl2.classList.add("next--card2");
      previousCardEl2.classList.add("current--card2");
      nextCardEl2.classList.add("previous--card2");
    }
  }
};

function init() {

  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    //delay: 0.15,
    //duration: 0.5,
    
    "--card-translateY-offset": "0%",
  })
    .to(
    [buttons.prev, buttons.next],
    {
      duration: 0.4,
      //opacity: 1,
      pointerEvents: "all",
    },
    "-=0.4"
  )
  tl.to(cardsContainerEl2.children, {
      //delay: 0.15,
      //duration: 0.5,
    
    "--card-translateY-offset": "0%",
    })
    .to(
      [buttons2.prev, buttons2.next],
      {
        duration: 0.4,
        //opacity: 1,
        pointerEvents: "all",
      },
      "-=0.4"
    );
};

const waitForImages = () => {
  gsap.set(cardsContainerEl.children, {
    "--card-translateY-offset": "100vh",
  });

  
  gsap.set(cardsContainerEl2.children, {
    "--card-translateY-offset": "100vh",
  });
  
  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: "none",
    //opacity: "0",
  });
  gsap.set([buttons2.prev, buttons2.next], {
    pointerEvents: "none",
    //opacity: "0",
  });
  
  init();

};

waitForImages();