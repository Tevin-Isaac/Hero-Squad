$(document).ready(function(){
    // Animations init
    new WOW().init();
    
    })
    
    
    function btnClick(){
    Swal.fire(
      'View squad List?',
      'question'
    )
    }
    
    function firstClick(){
    Swal.fire(
      'Add new squad?',
      'question'
    )
    }

    const sliderData = [
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
          name: "The Avengers",
          desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          name: "Iron Man",
          desc: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          name: "Thor",
          desc: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          name: "Guardians of the Galaxy",
          desc: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe."
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          name: "Doctor Strange",
          desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
          name: "Captain America",
          desc: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization'
        }
      ];
      
      for (let i = 0; i < sliderData.length; i++) {
        const slider = document.querySelector(".slider");
        const {img, name, desc} = sliderData[i];
        const slideData = `
          <div class="slide ${i == 0 ? 'visible' : ''}" data-slide="slide-${i}">
            <div class="slide-image">
             <img src="${img}" />
            </div>
            <div class="slide-caption">
              <div class="slide-caption-content">
                <div class="title-bg">
                  <h1>${name}</h1>
                </div>
                <p>${desc}</p>
              </div>
            </div>
          </div>
        `;
        slider.innerHTML += slideData;
      }
      
      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;
      const slideInterval = setInterval(() => {
        slides[currentSlide].classList.remove("visible");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("visible");
      }, 5000);
      

      var movieDB = [
        {title: "Toy Story",
         rating: 4,
         hasWatched: true,
         runtime: 124,
         synopsis: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
         background: "url('https://pmcvariety.files.wordpress.com/2014/11/toystory3_img10_720.jpg?w=1000&h=563&crop=1')"
        },
        {title: "The Incredibles 2",
         rating: 5,
         hasWatched: false,
         runtime: 92,
         synopsis: "Helen is called on to lead a campaign to bring Supers back, while Bob navigates the day-to-day heroics of 'normal' life at home with Violet, Dash and baby Jack-Jack - whose superpowers are about to be discovered.",
         background: "url('https://www.verdict.co.uk/wp-content/uploads/2018/07/incredibles-2-1200-1200-675-675-crop-000000.jpg')"
        },
        {title: "Spider-Man: Homecoming",
         rating: 3.5,
         hasWatched: true,
         runtime: 130,
         synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
         background: "url('https://images8.alphacoders.com/815/815755.jpg')"
        },
        {title: "The Avengers",
         rating: 2.5,
         hasWatched: false,
         runtime: 118,
         synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
         background: "url('https://pmcvariety.files.wordpress.com/2014/04/01-avengers-2012.jpg?w=1000&h=563&crop=1')"
        }
];

function printMovieInfo(element) {
if (element.hasWatched)
 console.log("You have watched " + element.title + " - " + element.rating + " stars");
else
 console.log("You have not seen " + element.title + " - " + element.rating + " stars");
}

// console stuff
movieDB.forEach(printMovieInfo);

movieDB.forEach(createCard);

function createCard(element, i){
// card
var card = document.createElement('div');
card.setAttribute("class", "movie-card");
card.style.backgroundImage = element.background;

// title
var title = document.createElement('h1');
title.innerText = element.title;
card.appendChild(title);

// runtime
var runtime = document.createElement('span');
runtime.innerText = element.runtime + " min";
card.appendChild(runtime);

// rating
var star = document.createElement("i");
star.setAttribute("class", "fas fa-star");
var rating = document.createElement('span');
rating.innerText = element.rating + " ";
rating.appendChild(star);
card.appendChild(rating);

// synopsis
var synopsis = document.createElement('p');
synopsis.innerText = element.synopsis;
card.appendChild(synopsis);

// watch/watch again
var watch = document.createElement('button');
watch.setAttribute("class", "watch");
if (element.hasWatched == false)
 watch.innerText = "WATCH MOVIE";
else
 watch.innerText = "WATCH AGAIN";
card.appendChild(watch);

document.body.appendChild(card);
}



let monPremierJson = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "image":`https://upload.wikimedia.org/wikipedia/en/5/5f/Molecule_Man.jpg`,
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "image":`https://i.ytimg.com/vi/4l0NhPYvtn4/maxresdefault.jpg`,
        "name": "The Destroyer",
        "age": 26,
        "secretIdentity": "Huey",
        "powers": [
          "Master Swordsman",
          "Two Sword Style",
          "Conqueror Haki"
        ]
      },
      {
        "image":`https://vignette.wikia.nocookie.net/marvels-avengers4475/images/5/58/MsMarvel.jpg/revision/latest?cb=20200731000707`,
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "image":`https://vignette.wikia.nocookie.net/marveldatabase/images/3/36/Surtur_%28Earth-616%29.jpg/revision/latest/scale-to-width-down/340?cb=20091115030718`,
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Fire Style"
        ]
      }
    ]
  }
  
  monPremierJson.members.forEach(function(member) {
    document.getElementById("output").innerHTML += ` 
     <div id="conteneur-avatar-card">
       <div class="card shadow p-3 mb-5 bg-white rounded">
         <img src=" ${member.image} " class="card-img-top" alt="huey freemen">
         <div class="card-body">
           <h4 id="card-title">
             
           </h4>
           <p id="super-hero">
             Name : ${member.name} 
           </p>
           <p>
             Age : ${member.age}
           </p>
           <p>
             Secrete Identity : ${member.secretIdentity}
           </p> 
           <p>
             Powers : ${member.powers}
           </p> 
           <a href="#" class="btn bg-primary text-light">
             About Hero
           </a>
         </div>  
       </div>
     </div>
  `;
  })