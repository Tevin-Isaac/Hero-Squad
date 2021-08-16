$(document).ready(function(){
    // Animations init
    new WOW().init();
    
    })
    
    
    function btnClick(){
    Swal.fire(
      'Ready to Rumble?',
      'question'
    )
    }
    
    function firstClick(){
    Swal.fire(
      'Include new Squad?',
      'question'
    )
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

