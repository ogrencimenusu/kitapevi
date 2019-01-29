$(document).ready(function () {
   $('.nav-toggle').click(function () {
       $('#sidebar').toggleClass('open');
       $(this).find('i').toggleClass('fa fas fa-times')
   })
});