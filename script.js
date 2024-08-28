
// offers
$(document).ready(function(){
  
    $('#offers_buttons .custom_button').click(function(){
      // Remove the active class from all buttons
      $('#offers_buttons .custom_button').removeClass('active');
      // Add the active class to the clicked button
      $(this).addClass('active');
      
      // Get the target content ID
      var target = $(this).data('target');
      console.log(target)
      
      // Hide all offer contents with a fade out effect
      $('.offer-content').fadeOut().removeClass('active');

      setTimeout(function() {    
          $('.offer-content').fadeOut().addClass('d-none');
      }, 400);

      // Show the targeted offer content with a fade in effect
      setTimeout(function() {
        $('#' + target).fadeIn().addClass('active');
        $('#' + target).fadeIn().removeClass('d-none');
      }, 400); // Delay to allow fade out to complete
    });
 
});

// email service
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_vbmovqj', 'template_l3b88lj', this)
        .then(function() {
            alert('E-Mail wurde erfolgreich gesendet.');
        }, function(error) {
            alert('Fehler beim Senden der E-Mail: ' + JSON.stringify(error));
        });
    this.reset()
});


// navigation
let isOpen = false;
function toggleNav() {
  if (isOpen) {
    closeNav();
  }
  else {
    openNav();
  }
}

function openNav() {
  if (isOpen) return;
  document.getElementsByTagName("nav")[0].style.top = "0";
  let btn = document.getElementById("menu_button");
  btn.style.left = "-5em";
  isOpen = true;
  console.log(btn.classList);
}

function closeNav() {
  if (!isOpen) return;
  document.getElementsByTagName("nav")[0].style.top = "-100vh";
  let btn = document.getElementById("menu_button");
  btn.style.left = "0";
  btn.src = "burger.png";
  isOpen = false;
  console.log(btn.classList);
}

// alle a-Tags holen
const allLinks = document.getElementsByTagName('a');

// EventListener zu jedem a-Tag hinzufügen
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener('click', function(event) {
    closeNav();
  });
}

window.onscroll = function() {
  closeNav();
};