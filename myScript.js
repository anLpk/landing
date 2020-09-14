// Changing Profile Picture by Click
  var mysrc = "images/technician.jpg";
  function changeImage() {
    if (mysrc == "images/technician.png") {
      document.images["profile-img"].src = "images/technician.png";
      mysrc = "images/developer.png";
      } else {
      document.images["profile-img"].src = "images/developer.png";
      mysrc = "images/technician.png";
        }
      }

// Changing button context
  btn.addEventListener('click', (event) => {
    event.target.textContent = 'Thank You!';
  });
