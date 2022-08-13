const btn = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const btnContHide = document.querySelector('.collapsible__action--hidden');
const btnContShow = document.querySelector('.collapsible__action--visible');
btnContHide.style.display = "none";
btn.addEventListener('click', function () {
   btnContShow.style.display = "none";
   if (btnContHide.style.display === "none") {
      btnContHide.style.display = "inline";
      btnContShow.style.display = "none";
   } else {
      btnContHide.style.display = "none";
      btnContShow.style.display = "inline";
   }
   
   if (content.classList.contains('hidden')) {
      content.animate([{
            opacity: 0,
            visibility: 0
         },
         {
            opacity: 1,
            visibility: 1
         }
      ], {
         duration: 300,
         easing: 'ease-in',
         fill: 'forwards'
      });
      content.classList.remove('hidden');
   } else {
      content.animate([{
            opacity: 1,
            visibility: 1
         },
         {
            opacity: 0,
            visibility: 0
         }
      ], {
         duration: 300,
         easing: 'ease-in',
         fill: 'forwards'
      });
      content.classList.add('hidden');
   }
})