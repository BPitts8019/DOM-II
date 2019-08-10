(() => {
   //event handlers
   const togglePicChange = event => {
      event.currentTarget.style.filter = (event.currentTarget.style.filter)? "" : "hue-rotate(360deg)";
   };
   const popElement = event => {
      event.stopPropagation();
      event.currentTarget.style.display = "none";

      setTimeout(elem => {
         elem.style.display = "";
      }, 5000, event.currentTarget);
   };

   //get page elements
   const home = document.querySelector(".home");
   const images = document.querySelectorAll("img");
   const h2Tags = document.querySelectorAll("h2");
   const navBar = document.querySelector(".main-navigation");
   const navLinks = document.querySelectorAll(".nav-link");

   //setup event listeners
   home.addEventListener("dblclick", () => {
      alert("You should try double clicking a heading...");
   });

   images.forEach(img => {
      img.addEventListener("mouseenter", togglePicChange); 
      img.addEventListener("mouseleave", togglePicChange);
   });

   h2Tags.forEach(h2 => {
      h2.addEventListener("dblclick", popElement);
   });
   
   document.addEventListener("keydown", event => {
      switch (event.code) {
      case "KeyW":
         navBar.style.backgroundColor = "lightCoral";
         break;
      case "KeyA":
         navBar.style.backgroundColor = "khaki";
         break;
      case "KeyS":
         navBar.style.backgroundColor = "lightSkyBlue";
         break;
      case "KeyD":
         navBar.style.backgroundColor = "paleGreen";
         break;
      default:
         navBar.style.backgroundColor = "";
      }
   });
   
   navLinks.forEach(link => {
      link.addEventListener("click", event => {
         event.preventDefault();
         alert("Ouch!!");
      });
   });
})();