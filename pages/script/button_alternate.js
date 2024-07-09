   function buttonStyle() {
    var myDiv = document.querySelector(".btn-style1");

    if (myDiv.classList.contains("active")) {
      myDiv.style.backgroundColor = "#464647";
      }  else {
      myDiv.style.backgroundColor = "#fff";
      myDiv.style.border = "2.5px solid #333";
      myDiv.style.color = "#333";    
    }
      

  }
  

    
   function buttonStyleColor() {
    var myDiv = document.querySelector(".btn-style1");

    if (myDiv.classList.contains("active")) {
      myDiv.style.backgroundColor = "#464647";
      }  else {
      myDiv.style.backgroundColor = "#E04F26";
      myDiv.style.border = "2.5px solid #E04F26";
      myDiv.style.color = "#fff"; 
    }
  }

    
 <!-----------------Background-Color-Alternate----------------->
        
        function backColor() {
            var myDiv = document.querySelectorAll('._header-section, ._header-cta');

            for (var i = 0; i < myDiv.length; i++) {
                if (myDiv[i].classList.contains('_header-section')) {
                    myDiv[i].style.backgroundColor = '#000';
                    myDiv[i].style.color = '#fff';
                } else if (myDiv[i].classList.contains('_header-cta')) {
                    myDiv[i].style.backgroundColor = '#000';
                    myDiv[i].style.color = '#fff';
                    myDiv[i].style.paddingBottom = '32px';
                    myDiv[i].style.marginBottom = '0px';
                }         
            }
        }
    
      <!-----------------Full-Background-Color---------------->
    

        function changeBackgroundColor() {
            var hexCode = document.getElementById('colorInput').value;
            var elements = document.getElementsByClassName('bgColorChange');

            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = hexCode;
            }
        }

    
    <!-----------------Header Centering---------------->

            function centerHeader() {
            var myDiv = document.querySelectorAll('._header-centering, ._header-cta-centering');

            for (var i = 0; i < myDiv.length; i++) {
                if (myDiv[i].classList.contains('_header-centering')) {
                    myDiv[i].style.textAlign = 'center';
                } else if (myDiv[i].classList.contains('_header-cta-centering')) {
                    myDiv[i].style.margin = '0 auto';
                }         
            }
        }

