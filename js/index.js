(() => {
   //get page elements
   const images = document.querySelectorAll(".img-content");

   //setup event listeners
   images.forEach(img => {
      img.addEventListener("mouseenter", event => {
         console.log(event.currentTarget);
      });

      img.addEventListener("mouseleave", event => {
         console.log(event.currentTarget);
         // event.currentTarget.parent.style.backgroundColor = "";
      });
   });

})();