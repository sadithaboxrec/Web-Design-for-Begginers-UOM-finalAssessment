// typing text code

const typed = new Typed('.multiple-text', {
  strings: ['MIS Undergraduate', 'Web Developer','Sports Data Analyzer','Logistic planner' ],
  typeSpeed: 80,
  backSpeed:80,
  backDelay:1200,
  loop:true,
});



//slider 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





 
  function validate() {
    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const emailAddress = document.getElementById("emailAddress").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const emailSubject = document.getElementById("emailSubject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (!fullName) {
      alert("Please enter your full name.");
      return false;
    }
    if (!emailAddress) {
      alert("Please enter your email address.");
      return false;
    }
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return false;
    }

       // Validate phone number
     const phonePattern = /^\d{10,}$/;

       if (!phonePattern.test(phoneNumber)) {
         alert("Phone number must be at least 10 digits.");
         return false;
       }

       
    if (!emailSubject) {
      alert("Please enter the email subject.");
      return false;
    }
    if (!message) {
      alert("Please enter your message.");
      return false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress)) {
      alert("Please enter a valid email address.");
      return false;
    }

 

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
  }



