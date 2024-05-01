  var enterKeyPressCount = 0;

    function openModal1() {
      var modal1 = document.getElementById('myModal1');
      var altText1 = document.getElementById('altText1');
      modal1.style.display = 'block';
      altText1.focus();
    }

    function closeModal1() {
      var modal1 = document.getElementById('myModal1');
      var altText1 = document.getElementById('altText1');
      modal1.style.display = 'none';
      altText1.value = '';
      enterKeyPressCount = 0;
    }

    function addAltText1() {
      var altText1 = document.getElementById('altText1').value;
      var imageAlt1 = document.getElementById('imageAlt1');
      if (altText1 !== '') {
        imageAlt1.alt = altText1;
        closeModal1();
      }
    }

    function handleAltTextKeyPress1(event) {
      if (event.key === 'Enter') {
        enterKeyPressCount++;
        if (enterKeyPressCount >= 1) {
          addAltText1();
        }
      } else if (event.key === 'Escape') {
        closeModal1();
      }
    }
      
 //---------------------------------------------------------
      
       function openModal2() {
      var modal2 = document.getElementById('myModal2');
      var altText2 = document.getElementById('altText2');
      modal2.style.display = 'block';
      altText2.focus();
    }

    function closeModal2() {
      var modal2 = document.getElementById('myModal2');
      var altText2 = document.getElementById('altText2');
      modal2.style.display = 'none';
      altText2.value = '';
      enterKeyPressCount = 0;
    }

    function addAltText2() {
      var altText2 = document.getElementById('altText2').value;
      var imageAlt2 = document.getElementById('imageAlt2');
      if (altText2 !== '') {
        imageAlt2.alt = altText2;
        closeModal2();
      }
    }

    function handleAltTextKeyPress2(event) {
      if (event.key === 'Enter') {
        enterKeyPressCount++;
        if (enterKeyPressCount >= 1) {
          addAltText2();
        }
      } else if (event.key === 'Escape') {
        closeModal2();
      }
    }

         //---------------------------------------------------------
            function openModal3() {
      var modal3 = document.getElementById('myModal3');
      var altText3 = document.getElementById('altText3');
      modal3.style.display = 'block';
      altText3.focus();
    }

    function closeModal3() {
      var modal3 = document.getElementById('myModal3');
      var altText3 = document.getElementById('altText3');
      modal3.style.display = 'none';
      altText3.value = '';
      enterKeyPressCount = 0;
    }

    function addAltText3() {
      var altText3 = document.getElementById('altText3').value;
      var imageAlt3 = document.getElementById('imageAlt3');
      if (altText3 !== '') {
        imageAlt3.alt = altText3;
        closeModal3();
      }
    }
        
    function handleAltTextKeyPress3(event) {
      if (event.key === 'Enter') {
        enterKeyPressCount++;
        if (enterKeyPressCount >= 1) {
          addAltText3();
        }
      } else if (event.key === 'Escape') {
        closeModal3();
      }
    }

      
