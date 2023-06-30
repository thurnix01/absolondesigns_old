       
      function addTemplate() {
        var heroImage = document.getElementById("hero-image").value;
        var introLine = document.getElementById("intro-line").value;
        var bodyCopy = document.getElementById("body-copy").value;
          
   
          
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_header-section";
      template.verticalAlign = "top";
      template.border = "0";
      template.cellPadding = "0";
      template.cellSpacing = "0";
      template.role = "presentation";
        template.innerHTML = `


        <tr><td><img src="${heroImage}" alt="Hero Image" style="max-width: 600px; width: 100%; min-height: 320px; max-height: 580px; display: flex; object-fit: cover; object-position: top;" border="0" ></td></tr>
        <tr><td><h1 style="font-size: 3.5rem; font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten', 'verdana', sans-serif; text-align: left; text-transform: uppercase; margin: 32px 32px 16px; line-height: 3.3rem; color: #000;">${introLine}</h1></td></tr>
        <tr><td><p style="font-size: 1rem; line-height: 1.5rem; font-weight: 500; font-family: 'UniversLTStd-Cn', 'verdana', sans-serif; text-align: left; margin: 0 32px 32px; color: #000;">${bodyCopy}</p></td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_header-section");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
        
                
                      //-------------------------------------------
        
        
      function addTemplate1() {
      var buttonLabel = document.getElementById("buttonLabel").value;
      var buttonHref = document.getElementById("buttonHref").value;

      var resultDiv = document.getElementById("container");
      var button = document.createElement("a");
      button.href = buttonHref;


    
      button.target = "_blank";
      button.className = "_header-cta";
      button.style.msoPaddingAlt = "16px 12px 12px";
      button.style.font = "500 16px/1.5rem 'UniversLTStd-Cn', sans-serif";    
      button.style.padding = "16px 12px 12px";  
      button.style.textTransform = "uppercase";
      button.style.textAlign = "center";
      button.style.color = "#fff";
      button.style.display = "block";
      button.style.textDecoration = "none";
      button.style.boxShadow = "0 3px 3px #00000029";
      button.style.background = "#464647";
      button.style.borderRadius = "4px";
      button.style.border = "2.5px solid #464647";
      button.style.width = "35%";
      button.style.margin = "0 180px 16px 32px";
            
          
          
      button.innerHTML = `

      ${buttonLabel}

      `;
      resultDiv.appendChild(button);
      }
      function removeTemplate1() {
      var resultDiv = document.getElementById("container");
      var buttons = resultDiv.getElementsByClassName("_header-cta");
      if (buttons.length > 0) {
      resultDiv.removeChild(buttons[buttons.length - 1]);
      }
      }
        
    
                
          //-------------------------------------------
        
        
      function addTemplate2() {
        var introBodyTitle = document.getElementById("intro-body-title").value;  
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_section-title";
      template.verticalAlign = "top";
      template.border = "0";
      template.cellPadding = "0";
      template.cellSpacing = "0";
      template.role = "presentation"; 
        template.style.width = "100%"; 
        template.innerHTML = `

        <tr><td><h3 style="font-size: 2.5rem; font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten', 'verdana', sans-serif; text-align: center; text-transform: uppercase; margin: 32px 32px 16px; color: #000;">${introBodyTitle}</h3></td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate2() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_section-title");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
        
          //-------------------------------------------
        
        var container = document.getElementById("container");
      var product = "product"; // Specify the className to remove
      var subContainer = document.getElementById("sub-container");
      function addTemplate3() {
        if (!subContainer || subContainer.childElementCount >= 2) {
          subContainer = document.createElement("div");
          subContainer.className = "sub-container";
          subContainer.style.display = "flex";
          subContainer.style.flexWrap = "wrap";
          subContainer.style.flexBasis = "100%";     
            
          container.appendChild(subContainer);
        }

          
        var image1 = document.getElementById("image-1").value;
        var imageCopy1 = document.getElementById("image-copy-1").value;
        var buttonLabel1 = document.getElementById("buttonLabel1").value;
        var buttonHref1 = document.getElementById("buttonHref1").value;      
        var template = document.createElement("table");
        template.className = "product"; 
        template.style.width = "295px"; 
        template.style.flexGrow = "1";
        template.style.flexShrink = "0";   
         
        template.innerHTML = `

                      <tr style="display: flex;flex-wrap: wrap;height: auto">
                <td style="text-align: center;flex: auto">
        
                   <a href="${buttonHref1}" target="_blank"><img src="${image1}" alt="Product Image" style="width: 90%; margin: 0 auto; display: flex; height: 265px; object-fit: contain;" border="0"></a>
        <p style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.25rem; font-size: 1rem; text-align: center; margin: 1rem; color: #000;"> ${imageCopy1}</p>
                            <div style="margin:0 auto; width: 80%; margin-bottom: 16px;">
                        <table style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background: #464647;width: 100%; border-radius: 4px" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                                <tr>
                                    <td style="mso-padding-alt:16px 12px 12px; text-align:center;"> <a style="color: #fff;display: block;padding: 16px 12px 12px; text-align: center;font: 500 16px/20px 'UniversLTStd-Cn', sans-serif;text-decoration: none;box-shadow: 0 3px 3px #00000029; text-transform:uppercase;" href="${buttonHref1}" target="_blank">${buttonLabel1}</a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
                </td>
            </tr>

          
          
          `;  
          
          
          
          
          
       
        subContainer.appendChild(template);
      }
      function removeTemplate3() {
        var templates = document.getElementsByClassName(product);

        if (templates.length > 0) {
          var divToRemove = templates[templates.length - 1];
          var template = divToRemove.parentNode;
          template.removeChild(divToRemove);

          if (template.childElementCount === 0) {
            container.removeChild(template);
            subContainer = null;
          }
        }
      }
        
          //-------------------------------------------
        
        
      function addTemplate4() {
       

        var image2 = document.getElementById("image-2").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_body-image";
        template.style.width = "100%";   
      template.verticalAlign = "top";
      template.border = "0";
      template.cellPadding = "0";
      template.cellSpacing = "0";
      template.role = "presentation";
        template.innerHTML = `

        
               <tr><td>
          <img src="${image2}" alt="Lifestyle Image" style=" width: 90%; max-height: 300px; object-fit: cover; object-position: top; margin: 0 auto 15px; display: flex; border-radius: 8px;" border="0">
             </td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate4() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-image");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
    
        
          //-------------------------------------------
        
        
      function addTemplate5() {
        var imageCopy2 = document.getElementById("body-copy-2").value;
  
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.id = "blocks";  
        template.className = "_body-copy";
      template.verticalAlign = "top";
      template.border = "0";
      template.cellPadding = "0";
      template.cellSpacing = "0";
      template.role = "presentation";
        template.innerHTML = `

  

        <tr><td><p style="font-size: 1rem; line-height: 1.5rem; font-weight: 500; font-family: 'UniversLTStd-Cn', 'verdana', sans-serif; text-align: left; margin: 0 32px 32px; color: #000;">${imageCopy2}</p></td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate5() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-copy");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }        
    
            
          //-------------------------------------------
        
        
      function addTemplate6() {
    var buttonLabel2 = document.getElementById("buttonLabel2").value;
    var buttonHref2 = document.getElementById("buttonHref2").value;
 
     var resultDiv = document.getElementById("container");
      var button = document.createElement("a");
          
      button.href = buttonHref2;


      button.target = "_blank";
      button.className = "_body-cta";
      button.style.msoPaddingAlt = "16px 12px 12px";
      button.style.font = "500 16px/1.5rem 'UniversLTStd-Cn', sans-serif";    
      button.style.padding = "16px 12px 12px";  
      button.style.textTransform = "uppercase";
      button.style.textAlign = "center";
      button.style.color = "#fff";
      button.style.display = "block";
      button.style.textDecoration = "none";
      button.style.boxShadow = "0 3px 3px #00000029";
      button.style.background = "#464647";
      button.style.borderRadius = "4px";
      button.style.border = "2.5px solid #464647";
      button.style.width = "35%";
      button.style.margin = "0 180px 16px 32px";
      button.innerHTML = `

      ${buttonLabel2}

      `;
    resultDiv.appendChild(button);
  }
      function removeTemplate6() {
        var resultDiv = document.getElementById("container");     
        var buttons = resultDiv.getElementsByClassName("_body-cta");  
        if (buttons.length > 0) {
          resultDiv.removeChild(buttons[buttons.length - 1]);
        }

      }

        

    
        
      function addTemplate7() {
      var image3 = document.getElementById("image-3").value;
      var introBodyTitle2 = document.getElementById("intro-body-title-2").value;
      var imageCopy3 = document.getElementById("body-copy-3").value;

      var buttonLabel3 = document.getElementById("buttonLabel3").value;
      var buttonHref3 = document.getElementById("buttonHref3").value;

      var container = document.getElementById("container");
      var template = document.createElement("table");
      template.style.width = "100%";
      template.style.maxWidth = "600px";
      template.style.margin = "0 auto";
      template.style.tableLayout = "fixed";
      template.verticalAlign = "top";
      template.border = "0";
      template.cellPadding = "0";
      template.cellSpacing = "0";
      template.role = "presentation";
      template.align = "center";
      template.className = "_body-footer";
      template.innerHTML = `



  
            <tr style="width: 100%; max-width: 600px; display:flex; flex-wrap: wrap; margin: 0 auto;">
                <td style="height: 300px; width: 300px;" class="_footer_block"><a href="${buttonHref3}" target="_blank"><img src="${image3}" style="width: 100%; height: 300px; object-fit: cover;" alt="Footer Promo image" border="0" ></a></td>

            <td style="height: 300px; width: 300px;" class="_footer_block"><div style="background-color: #f9f9f9; height: 300px; width: 100%; display: flex;flex-direction: column; justify-content: center;">
                <div style = "padding: 16px; display: inline-grid; justify-content: center;">
                <h3 style="text-align: left; margin:32px 0 16px; font-size: 2rem; font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten', 'verdana', sans-serif; text-transform: uppercase; line-height: 2rem; color: #000;">${introBodyTitle2}</h3>
                <p style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.5rem; font-size: 1rem; text-align: left; margin: 1rem 0; color: #000;">${imageCopy3}</p>
                <a href="${buttonHref3}" target="_blank" style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.5rem; font-size: 1rem; text-align: left; margin: 1rem 0; color: #000; text-transform: uppercase; text-decoration: underline;">${buttonLabel3}</a>
                </div>
                </div>
        </td>
        </tr>


        `;
        container.appendChild(template);
      }
      function removeTemplate7() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-footer");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }        
        
