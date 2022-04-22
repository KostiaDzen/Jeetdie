// burger-menu
const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.side-bar');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active')
})

// =============  <STAR> ============== 
const startWars = document.querySelector('.history');
// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");  
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    startWars.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
    var y = startWars.clientWidth;
    var x = startWars.clientHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

// =============  <!STAR> ============== 

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
const copyBlock = document.querySelector('.copy__block');

copy.addEventListener('click', clickCopy);

function clickCopy() {
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

// SLIDER
/*const swiper = new Swiper('.swiper', {
    //new class
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 0,
        slideShadows : true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});*/


//
const { gsap} = window;

const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardsContainerEl2 = document.querySelector(".cards__wrapper2");
const appBgContainerEl2 = document.querySelector(".app__bg2");

buttons.next.addEventListener("click", () => {
  swapCards("right");
  swapCards2("right");
});

buttons.prev.addEventListener("click", () => {
  swapCards("left");
  swapCards2("left");
});

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelectorAll(".current--card");
  const previousCardEl = cardsContainerEl.querySelectorAll(".previous--card");
  const nextCardEl = cardsContainerEl.querySelectorAll(".next--card");

  const currentBgImageEl = appBgContainerEl.querySelectorAll(".current--image");
  const previousBgImageEl = appBgContainerEl.querySelectorAll(".previous--image");
  const nextBgImageEl = appBgContainerEl.querySelectorAll(".next--image");

  swapCardsClass();

  //removeCardEvents(currentCardEl);

  function swapCardsClass() {

   // currentCardEl.classList.remove("current--card");
    currentCardEl.forEach((item) => {
        item.classList.remove("current--card")
    });
    //previousCardEl.classList.remove("previous--card");
    previousCardEl.forEach((item) => {
        item.classList.remove("previous--card")
    });
    //nextCardEl.classList.remove("next--card");
    nextCardEl.forEach((item) => {
        item.classList.remove("next--card")
    });

    //currentBgImageEl.classList.remove("current--image");
    currentBgImageEl.forEach((item) => {
        item.classList.remove("current--image")
    });
    //previousBgImageEl.classList.remove("previous--image");
    previousBgImageEl.forEach((item) => {
        item.classList.remove("previous--image")
    });
    //nextBgImageEl.classList.remove("next--image");
    nextBgImageEl.forEach((item) => {
        item.classList.remove("next--image")
    });

    //currentCardEl.style.zIndex = "50";
    currentCardEl.forEach((item) => {
        item.style.zIndex = "50"
    });
    //currentBgImageEl.style.zIndex = "-2";
    currentBgImageEl.forEach((item) => {
        item.style.zIndex = "-2"
    });

    if (direction === "right") {
      //previousCardEl.style.zIndex = "20";
      previousCardEl.forEach((item) => {
        item.style.zIndex = "20"
      });
      //nextCardEl.style.zIndex = "30";
      nextCardEl.forEach((item) => {
        item.style.zIndex = "30"
      });

      //nextBgImageEl.style.zIndex = "-1";
      nextBgImageEl.forEach((item) => {
        item.style.zIndex = "-1"
      });

      //currentCardEl.classList.add("previous--card");
      currentCardEl.forEach((item) => {
        item.classList.add("previous--card")
      });
      //previousCardEl.classList.add("next--card");
      previousCardEl.forEach((item) => {
        item.classList.add("next--card")
      });
      //nextCardEl.classList.add("current--card");
      nextCardEl.forEach((item) => {
        item.classList.add("current--card")
      });

      //currentBgImageEl.classList.add("previous--image");
      currentBgImageEl.forEach((item) => {
        item.classList.add("previous--image")
      });
      //previousBgImageEl.classList.add("next--image");
      previousBgImageEl.forEach((item) => {
        item.classList.add("next--image")
      });
      //nextBgImageEl.classList.add("current--image");
      nextBgImageEl.forEach((item) => {
        item.classList.add("current--image")
      });
    } else if (direction === "left") {
      //previousCardEl.style.zIndex = "30";
      previousCardEl.forEach((item) => {
        item.style.zIndex = "30"
      });
      //nextCardEl.style.zIndex = "20";
      nextCardEl.forEach((item) => {
        item.style.zIndex = "20"
      });

      //previousBgImageEl.style.zIndex = "-1";
      previousBgImageEl.forEach((item) => {
        item.style.zIndex = "-1"
      });

      //currentCardEl.classList.add("next--card");
      currentCardEl.forEach((item) => {
        item.classList.add("next--card")
      });
      //previousCardEl.classList.add("current--card");
      previousCardEl.forEach((item) => {
        item.classList.add("current--card")
      });
      //nextCardEl.classList.add("previous--card");
      nextCardEl.forEach((item) => {
        item.classList.add("previous--card")
      });

      //currentBgImageEl.classList.add("next--image");
      currentBgImageEl.forEach((item) => {
        item.classList.add("next--image")
      });
      //previousBgImageEl.classList.add("current--image");
      previousBgImageEl.forEach((item) => {
        item.classList.add("current--image")
      });
      //nextBgImageEl.classList.add("previous--image");
      nextBgImageEl.forEach((item) => {
        item.classList.add("previous--image")
      });
    }
  }
};

function swapCards2(direction) {
  const currentCardEl2 = cardsContainerEl2.querySelectorAll(".current--card2");
  const previousCardEl2 = cardsContainerEl2.querySelectorAll(".previous--card2");
  const nextCardEl2 = cardsContainerEl2.querySelectorAll(".next--card2");

  const currentBgImageEl2 = appBgContainerEl2.querySelectorAll(".current--image2");
  const previousBgImageEl2 = appBgContainerEl2.querySelectorAll(".previous--image2");
  const nextBgImageEl2 = appBgContainerEl2.querySelectorAll(".next--image2");

  swapCardsClass2();

  //removeCardEvents(currentCardEl);

  function swapCardsClass2() {

   // currentCardEl.classList.remove("current--card");
    currentCardEl2.forEach((item) => {
        item.classList.remove("current--card2")
    });
    //previousCardEl.classList.remove("previous--card");
    previousCardEl2.forEach((item) => {
        item.classList.remove("previous--card2")
    });
    //nextCardEl.classList.remove("next--card");
    nextCardEl2.forEach((item) => {
        item.classList.remove("next--card2")
    });

    //currentBgImageEl.classList.remove("current--image");
    currentBgImageEl2.forEach((item) => {
        item.classList.remove("current--image2")
    });
    //previousBgImageEl.classList.remove("previous--image");
    previousBgImageEl2.forEach((item) => {
        item.classList.remove("previous--image2")
    });
    //nextBgImageEl.classList.remove("next--image");
    nextBgImageEl2.forEach((item) => {
        item.classList.remove("next--image2")
    });

    //currentCardEl.style.zIndex = "50";
    currentCardEl2.forEach((item) => {
        item.style.zIndex = "50"
    });
    //currentBgImageEl.style.zIndex = "-2";
    currentBgImageEl2.forEach((item) => {
        item.style.zIndex = "-2"
    });

    if (direction === "right") {
      //previousCardEl.style.zIndex = "20";
      previousCardEl2.forEach((item) => {
        item.style.zIndex = "20"
      });
      //nextCardEl.style.zIndex = "30";
      nextCardEl2.forEach((item) => {
        item.style.zIndex = "30"
      });

      //nextBgImageEl.style.zIndex = "-1";
      nextBgImageEl2.forEach((item) => {
        item.style.zIndex = "-1"
      });

      //currentCardEl.classList.add("previous--card");
      currentCardEl2.forEach((item) => {
        item.classList.add("previous--card2")
      });
      //previousCardEl.classList.add("next--card");
      previousCardEl2.forEach((item) => {
        item.classList.add("next--card2")
      });
      //nextCardEl.classList.add("current--card");
      nextCardEl2.forEach((item) => {
        item.classList.add("current--card2")
      });

      //currentBgImageEl.classList.add("previous--image");
      currentBgImageEl2.forEach((item) => {
        item.classList.add("previous--image2")
      });
      //previousBgImageEl.classList.add("next--image");
      previousBgImageEl2.forEach((item) => {
        item.classList.add("next--image2")
      });
      //nextBgImageEl.classList.add("current--image");
      nextBgImageEl2.forEach((item) => {
        item.classList.add("current--image2")
      });
    } else if (direction === "left") {
      //previousCardEl.style.zIndex = "30";
      previousCardEl2.forEach((item) => {
        item.style.zIndex = "30"
      });
      //nextCardEl.style.zIndex = "20";
      nextCardEl2.forEach((item) => {
        item.style.zIndex = "20"
      });

      //previousBgImageEl.style.zIndex = "-1";
      previousBgImageEl2.forEach((item) => {
        item.style.zIndex = "-1"
      });

      //currentCardEl.classList.add("next--card");
      currentCardEl2.forEach((item) => {
        item.classList.add("next--card2")
      });
      //previousCardEl.classList.add("current--card");
      previousCardEl2.forEach((item) => {
        item.classList.add("current--card2")
      });
      //nextCardEl.classList.add("previous--card");
      nextCardEl2.forEach((item) => {
        item.classList.add("previous--card2")
      });

      //currentBgImageEl.classList.add("next--image");
      currentBgImageEl2.forEach((item) => {
        item.classList.add("next--image2")
      });
      //previousBgImageEl.classList.add("current--image");
      previousBgImageEl2.forEach((item) => {
        item.classList.add("current--image2")
      });
      //nextBgImageEl.classList.add("previous--image");
      nextBgImageEl2.forEach((item) => {
        item.classList.add("previous--image2")
      });
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
    .to(cardsContainerEl2.children, {
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
    );
};

const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

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

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
  
        if (totalImages == loadedImages) {
          gsap.timeline()
            .to(".loading__wrapper", {
           // duration: 0.8,
            //opacity: 0,
           // pointerEvents: "none",
          })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();