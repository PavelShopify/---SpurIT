const btn = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
btn.addEventListener('click', function () {
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