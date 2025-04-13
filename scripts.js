
//WEATHER API
fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=a33479c7be343e47718fa8a8544e3d7b&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.main.temp)
    
    temperature.textContent = "Temperature: " + data.main.temp + "\u00B0C";    

});

const OceanViewButton = document.getElementById("OceanView-Button");
const BeachFrontButton = document.getElementById("BeachFront-Button");
const GardenFamilyButton = document.getElementById("GardenFamily-Button");
const TestimonialsButton = document.getElementById("Testimonials-Button");

function goToOceanView() {
    window.location.href = "guest-rooms.html#OceanView";
    }

function goToBeachFront() {
    window.location.href = "guest-rooms.html#Beachfront";
    }

function goToGardenFamily() {
    window.location.href = "guest-rooms.html#Family";
    }

function goToTestimonials(){
    window.location.href="testimonials.html";
}

TestimonialsButton.addEventListener("click", function(){
    goToTestimonials();
})


OceanViewButton.addEventListener("click", function(){
    goToOceanView();
}
);

BeachFrontButton.addEventListener("click",function(){
    goToBeachFront();
});

GardenFamilyButton.addEventListener("click", function(){
    goToGardenFamily();
})


/* <div class="button-wrapper">
<button id="OceanView-Button">View Details</button> <!-- NOTE TO SELF : ATTACH BUTTONS TO THE ROOMS PAGE AT THE RIGHT SPOT-->
</div>

<hr>

<h2>Beachfront Suite</h2>
<p>Step directly onto the sand from your spacious and comforting suite</p>
<img src="/home-media/pexels-iamluisao-12652920.jpg" width="471px">

<div class="button-wrapper">
<button id="BeachFront-Button">View Details</button><!-- NOTE TO SELF : ATTACH BUTTONS TO THE ROOMS PAGE AT THE RIGHT SPOT-->
</div>
<hr>

<h2>Garden View Family Home</h2>
<p>Perfect for families, with ample space and garden views</p>
<img src="/home-media/double.jpg" width="471px">

<div class="button-wrapper">
<button id="GardenFamily-Button">View Details</button><!-- NOTE TO SELF : ATTACH BUTTONS TO THE ROOMS PAGE AT THE RIGHT SPOT-->
</div>
<hr>

</section> */