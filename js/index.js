(() => {
   //event handlers
   // const toggleOverlay = event => {
   //    const children = Array.from(event.currentTarget.childNodes);
   //    const overlays = children.filter(child => {
   //       let isGood = (child.classList)? child.classList.contains("overlay") : false;
   //       return isGood;
   //    });
   
   //    overlays[0].style.opacity = (overlays[0].style.opacity)? "" : "1";
   // };
   const togglePicChange = event => {
      event.currentTarget.style.filter = (event.currentTarget.style.filter)? "" : "hue-rotate(360deg)";
   };
   const popElement = event => {
      event.currentTarget.style.display = "none";

      setTimeout(elem => {
         elem.style.display = "";
      }, 5000, event.currentTarget);
   };

   //get page elements
   const images = document.querySelectorAll("img");
   const navBar = document.querySelector(".main-navigation");
   const h2Tags = document.querySelectorAll("h2");

   //setup event listeners
   images.forEach(img => {
      img.addEventListener("mouseenter", togglePicChange); 
      img.addEventListener("mouseleave", togglePicChange);
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

   h2Tags.forEach(h2 => {
      h2.addEventListener("dblclick", popElement);
   });

   
})();