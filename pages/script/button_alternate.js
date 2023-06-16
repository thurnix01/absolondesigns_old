   function buttonStyle() {
        var myDiv = document.querySelector("._header-cta");

            if (myDiv.classList.contains("active")) {
                myDiv.classList.remove("active");
            } else {
                myDiv.classList.add("active");
            }
        }
        function buttonStyleColor() {
            var myDiv = document.querySelector("._header-cta");

            if (myDiv.classList.contains("active")) {
                myDiv.style.backgroundColor = "#464647";
            } else {
                myDiv.style.backgroundColor = "#E04F26";
                myDiv.style.border = "2.5px solid #E04F26";
            }
        }




        function buttonStyle2() {
        var myDiv = document.querySelector("._body-cta");

            if (myDiv.classList.contains("active")) {
                myDiv.classList.remove("active");
            } else {
                myDiv.classList.add("active");
            }
        }

        function buttonStyleColor2() {
        var myDiv = document.querySelector("._body-cta");

            if (myDiv.classList.contains("active")) {
                myDiv.style.backgroundColor = "#464647";
            } else {
                myDiv.style.backgroundColor = "#E04F26";
                myDiv.style.border = "2.5px solid #E04F26";
            }
        }
