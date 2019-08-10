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
   const togglePicBlur = event => {
      event.currentTarget.style.filter = (event.currentTarget.style.filter)? "" : "blur(5px)";
   };

   //get page elements
   const images = document.querySelectorAll("img");

   //setup event listeners
   images.forEach(img => {
      img.addEventListener("mouseenter", togglePicBlur); 
      img.addEventListener("mouseleave", togglePicBlur);
   });

})();