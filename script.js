let preScrollPosition = window.scrollY; 

window.addEventListener("scroll", () => {
  const ScrollPosition = window.scrollY;

//   console.log("preScrollPosition:", preScrollPosition);
//   console.log("ScrollPosition:", ScrollPosition);

  if (ScrollPosition > preScrollPosition) {
    
    document.querySelector("#navbar").classList.add("hidden");
  } else {
   
    document.querySelector("#navbar").classList.remove("hidden");
  }

  preScrollPosition = ScrollPosition;
});
