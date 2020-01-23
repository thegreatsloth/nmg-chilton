var hasDropdownMenu = document.getElementsByClassName("menu-item-has-children");
var subMenus = document.getElementsByClassName("sub-menu");

for (let i = 0; i < hasDropdownMenu.length; i++) {
  hasDropdownMenu[i].classList.add("dropdown");
  hasDropdownMenu[i].firstElementChild.setAttribute("data-toggle", "dropdown");
  hasDropdownMenu[i].firstElementChild.classList.add("dropdown-toggle");
  subMenus[i].classList.add("dropdown-menu");
}
var menuBtn = document.getElementsByClassName("hamburger")[0];

menuBtn.addEventListener("click", function() {
  var headerHeight = document.getElementsByTagName("header").offsetHeight;
  var menuBox = document.getElementsByClassName("mobile-menu-box")[0];
  var bodyTag = document.querySelector("body");

  menuBtn.classList.toggle("is-active");
  menuBox.style.top = headerHeight + "px";
  menuBox.classList.toggle("open");
  bodyTag.classList.toggle("noScroll");
});

var mobileMenuItemsWithChildren = document.querySelectorAll(
  ".mobile-nav li.menu-item-has-children"
);
var mobileMenu = document.getElementsByClassName("mobile-nav")[0];

// adjust the height of the list item that has children (a dropdown menu)
// making sure that we don't overlap the other items
/* for (let i = 0; i < mobileMenuItemsWithChildren.length; i++) {
  mobileMenuItemsWithChildren[i].addEventListener("click", function(e) {
    let subMenuItems = this.getElementsByClassName(
      "sub-menu"
    )[0].getElementsByClassName("menu-item");

    let menuItemHeight = this.offsetHeight;

    this.style.paddingBottom = menuItemHeight * subMenuItems.length + 10 + "px";
  });
} */

// homepage tabs
hpTabContent = {
  "sec-1": {
    headline: "Our existing industries are the best testament to our community",
    text:
      'Chilton County is dedicated towards assuring that our existing industries succeed.  <a href="/existing-industries/">Click here</a> to view a list of our top employers as well as manufacturing employers and number of companies in our region which can support your business.'
  },
  "sec-2": {
    headline: "Our Supply Chain Analysis",
    text:
      '<a href="/supply-chain-analysis/">Click here</a> to view supply and demand numbers of what our industries sell and what they buy to learn economic gaps in the supply chain from which your company can profit.'
  },
  "sec-3": {
    headline: "Recent Chilton County News",
    text:
      'In 2019 Chilton County was selected as the site of a $100 million investment for the planned Alabama Farm Center. Chilton County was chosen due to its central location on I-65 and its access to cities such as Birmingham, Tuscaloosa, and Montgomery. The announced Farm Center will be home to rodeos, fairs, livestock shows, concerts, and festivals.  <a target="_blank" href="https://alabamanewscenter.com/2019/02/27/alabama-farm-center-bring-400-jobs-chilton-county/">Click here to read more news articles</a>'
  }
};

var tabControls = document.getElementsByClassName("tab-controls");

for (let i = 0; i < tabControls.length; i++) {
  tabControls[i].addEventListener("click", function() {
    for (let x = 0; x < tabControls.length; x++) {
      tabControls[x].classList.remove("active");
    }
    var id = this.id;
    var heading = document.getElementById("about-tabs-headline")
      .firstElementChild;
    var text = document.getElementById("about-tabs-text").firstElementChild;

    this.classList.add("active");

    heading.textContent = hpTabContent[id]["headline"];
    text.innerHTML = hpTabContent[id]["text"];
  });
}

// homepage tiles - what we provide

var tiles = document.getElementsByClassName("tile");

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("mouseover", function() {
    var img = this.getElementsByTagName("img")[0];
    imgId = img.id;

    img.src = "/wp-content/themes/Chilton/img/" + imgId + "-white.svg";
  });
  tiles[i].addEventListener("mouseout", function() {
    var img = this.getElementsByTagName("img")[0];
    imgId = img.id;

    img.src = "/wp-content/themes/Chilton/img/" + imgId + "-orange.svg";
  });
}

// openlink master function
function openLink(url) {
  window.location.href = url;
}

// data grid - two column
var twoColGrid = document.getElementsByClassName("two-column-grid");

if (twoColGrid) {
  for (let x = 0; x < twoColGrid.length; x++) {
    var gridText = twoColGrid[x].getElementsByClassName("col-10");
    var gridNumber = twoColGrid[x].getElementsByClassName("col-2");
    var gridText2 = twoColGrid[x].getElementsByClassName("one");
    var gridNumber2 = twoColGrid[x].getElementsByClassName("two");

    if (gridText) {
      for (let i = 0; i < gridText.length; i += 2) {
        gridText[i].classList.add("grey");
        gridNumber[i].classList.add("grey");
      }
    }
    if (gridText2) {
      for (let i = 0; i < gridText2.length; i += 2) {
        gridText2[i].classList.add("grey");
        gridNumber2[i].classList.add("grey");
      }
    }
  }
}

// test three column grid
var threeColGrid = document.getElementsByClassName("three-column-grid");

if (threeColGrid) {
  for (let x = 0; x < threeColGrid.length; x++) {
    var gridOne = threeColGrid[x].getElementsByClassName("one");
    var gridTwo = threeColGrid[x].getElementsByClassName("two");
    var gridThree = threeColGrid[x].getElementsByClassName("three");
    for (let i = 0; i < gridOne.length; i += 2) {
      gridOne[i].classList.add("grey");
      gridTwo[i].classList.add("grey");
      gridThree[i].classList.add("grey");
    }
  }
}

// data grid - four column
var fourColGrid = document.getElementsByClassName("four-column-grid");

if (fourColGrid) {
  for (let x = 0; x < fourColGrid.length; x++) {
    var gridOne = fourColGrid[x].getElementsByClassName("one");
    var gridTwo = fourColGrid[x].getElementsByClassName("two");
    var gridThree = fourColGrid[x].getElementsByClassName("three");
    var gridFour = fourColGrid[x].getElementsByClassName("four");

    for (let i = 0; i < gridOne.length; i += 2) {
      gridOne[i].classList.add("grey");
      gridTwo[i].classList.add("grey");
      gridThree[i].classList.add("grey");
      gridFour[i].classList.add("grey");
    }
  }
}

// testimonial slider

var slides = document.getElementsByClassName("slider");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var currentSlide = 1;

rightArrow.addEventListener("click", function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("open-slide");
  }
  if (currentSlide == 3) {
    currentSlide = 1;

    var slideToShow = document.getElementById("slide-" + currentSlide);

    slideToShow.classList.add("open-slide");
  } else {
    currentSlide++;
    var slideToShow = document.getElementById("slide-" + currentSlide);
    slideToShow.classList.add("open-slide");
  }
});

leftArrow.addEventListener("click", function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("open-slide");
  }
  if (currentSlide == 1) {
    currentSlide = 3;

    var slideToShow = document.getElementById("slide-" + currentSlide);

    slideToShow.classList.add("open-slide");
  } else {
    currentSlide--;
    var slideToShow = document.getElementById("slide-" + currentSlide);
    slideToShow.classList.add("open-slide");
  }
});
