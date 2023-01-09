// header nav
let navLinks = document.querySelectorAll("navbar-nav .nav-item");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Slider logic
let index = 0,
  image = document.getElementById("sliderImg"),
  imgs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg"];

function next() {
  if (index == 4) {
    index = 0;
  } else {
    index++;
  }
  image.src = imgs[index];
}

function previous() {
  if (index == 0) {
    index = 4;
  } else {
    index--;
  }
  image.src = imgs[index];
}
let playInterval;
function play() {
  playInterval = setInterval(next, 3000);
}
play();


// Products and cart logic
let products = [
  {
    id: 0,
    image: "imgs/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    category: "mobile",
    price: 120,
  },
  {
    id: 1,
    image: "imgs/hh-2.jpg",
    title: "Air Pods Pro",
    category: "pods",
    price: 60,
  },
  {
    id: 2,
    image: "imgs/ee-3.jpg",
    title: "250D DSLR Camera",
    category: "camera",
    price: 230,
  },
  {
    id: 3,
    image: "imgs/aa-1.jpg",
    title: "Head Phone",
    category: "head-phone",
    price: 100,
  },
  {
    id: 4,
    image: "imgs/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    category: "mobile",
    price: 120,
  },
  {
    id: 5,
    image: "imgs/hh-2.jpg",
    title: "Air Pods Pro",
    category: "pods",
    price: 60,
  },
  {
    id: 6,
    image: "imgs/ee-3.jpg",
    title: "250D DSLR Camera",
    category: "camera",
    price: 230,
  },
  {
    id: 7,
    image: "imgs/aa-1.jpg",
    title: "Head Phone",
    category: "head-phone",
    price: 100,
  },
];
// let categories = [... product.map( (item)=> {return item} ) ]
console.log(products);
let i = 0;
document.getElementById("root").innerHTML = products
  .map((item) => {
    var { image, title, category, price } = item;
    return `<div class="card my-4 mx-2 all ${category}" style="width: 26rem">
            <img
              class="card-img-top"
              src=${image}
              alt="Card image cap"
            />
            <div class="card-body">
            <div class="card-header">  
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
              $${price}.00
              </p>
              </div>
              <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto
              corrupti, officiis esse harum at suscipit tempora facilis earum, aperiam
              itaque excepturi minima incidunt perferendis ab eius iusto dolore
              consectetur!
              </p>
              <div class="card-header">  
              <a href="/#products" class="btn btn-primary" onclick='addtocart(${i++})'>Add to cart</a>
              <p style="cursor: pointer;">⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>`;
  })
  .join("");

let cart = [];

function addtocart(i) {
  cart.push(products[i]);
  // cart.push({...products[a]});
  displaycart();
}
function removeElement(j) {
  cart.splice(j, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    totalAmount = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        totalAmount = totalAmount + price;
        document.getElementById("total").innerHTML = "$ " + totalAmount + ".00";
        return (
          `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='removeElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

// Filter logic
let filterBtns = document.querySelectorAll(".nav-tabs li a");
let filterImgs = document.querySelectorAll(".all");

filterBtns.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  filterBtns.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  filterImgs.forEach((img) => {
    img.style.display = "none";
  });

  document.querySelectorAll(this.dataset.category).forEach((e) => {
    e.style.display = "block";
  });
}

// Scroll-to-top logic
let scrolToTopBtn = document.querySelector(".scrolToTopBtn");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    scrolToTopBtn.classList.add("show");
  } else {
    scrolToTopBtn.classList.remove("show");
  }
};

scrolToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// toggle show cart

document
  .querySelector("header nav li.nav-item:last-child")
  .addEventListener("click", function () {
    document.querySelector("header nav .cart").classList.toggle("show-cart");
  });

//


