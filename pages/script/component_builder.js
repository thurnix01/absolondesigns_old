
    function addTemplate() {
        var heroImage = document.getElementById("hero-image").value;
        var introLine = document.getElementById("intro-line").value;
        var bodyCopy = document.getElementById("body-copy").value;



        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_header-section";
        template.verticalAlign = "top";
        template.style.maxWidth = "600px";
        template.width = "600";
        template.style.width = "100%";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.innerHTML = `


                <tr>
                    <td>

                        <p style="margin:0; text-align:center; background-color:#fff;"><img src="${heroImage}" alt="Hero Image" style="display:block; margin:0 auto; max-width:600px; width:100%; min-height: 300px; object-fit: cover; object-position: center;" width="600" /></p>
                    </td>
                </tr>

                <tr>
                    <td style="padding:32px;"  class="_introline">

                        <h1 style="margin:0 0 16px; color:#000; font:400 3.5rem/1 'tungsten', Helvetica, Arial, Tahoma, sans-serif; text-transform: uppercase; font-weight: 400; letter-spacing: 0.1rem">${introLine}</h1>
                        <p style="margin:0 0 16px; color:#000; font:300 16px/1.5  'UniversLTStd-Cn', Helvetica, Arial, Tahoma, sans-serif; " class="_introline">
                            ${bodyCopy}
                        </p>

                    </td>
                </tr>


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
        var button = document.createElement("div");
          button.role = "presentation";
        button.style.margin = "0 0 32px";
     

        button.className = "_header-cta";
      
           button.innerHTML = `

<!--[if mso]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="left" valign="middle" width="100%">
  <![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="left" valign="middle" style="padding: 0 32px;" class="_introline">
        <div class="button-container">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn', sans-serif;font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn btn-style1">${buttonLabel}</center></v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <a href="${buttonHref}" target="_blank"  style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:inline-block;font-family:'UniversLTStd-Cn', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform:uppercase;width:220px;height: 52px;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn btn-style1">${buttonLabel}</a>
          <!--<![endif]-->
        </div>
      </td>
    </tr>
  </table>
  <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->

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
        template.maxWidth = "600px";
        template.width = "600";
        template.style.width = "100%";
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
        template.style.width = "100%";
        template.style.margin = "0 auto";
        template.style.maxWidth = "295px";
        template.style.flexGrow = "1";
        template.style.flexShrink = "0";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.align = "center";

        template.innerHTML = `

                      <tr style="display: flex;flex-wrap: wrap;height: auto">
                <td style="text-align: center;flex: auto">
        
                  
                <!--[if true]> 
                <style type="text/css"> 

                td.two_Cln_1_6 {width:36em;} 
                td.two_Cln_Rgt_Cln_4_6 {font-size:16px; width:15.5em !important;} 
                td.gtr_1 {width:1em;} 

                </style> 
                <![endif]-->

                <!-- Two Column 1-6 Open -->
                <!--[if true]> 
                <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"> 
                <tr> 
                <td class="two_Cln_1_6"> 
                <![endif]-->
                <div style="width: 100%; margin: 0 auto; max-width: 600px; " class="flexing">
                    <!--[if true]> 
                <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"> 
                <tr> 
                <td class="two_Cln_Rgt_Cln_4_6" valign="top"> 
                <![endif]-->
                    <div class="two_Cln_Rgt_Cln_4_6 ltr" style="text-align: center;">
                        <p style="margin: 0 auto 12px; width: 290px; font-family: 'UniversLTStd-Cn', Helvetica, Arial, Tahoma, sans-serif; text-align: center; font-size:1rem;font-weight: normal; color:#000;"><a href="${buttonHref1}" target="_blank"><img src="${image1}" alt="Product Image" style="width:290px; margin: 0 auto; display: flex; height: 265px; object-fit: contain;" border="0" width="290"></a>${imageCopy1}</p>

                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref1}" style="height:52px; v-text-anchor:middle;width:220px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn', sans-serif;font-size:16px;font-weight:bold; text-transform: uppercase;" class="_cta_btn">${buttonLabel1}</center></v:roundrect><![endif]--><a href="${buttonHref1}" style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:inline-block;font-family:'UniversLTStd-Cn', sans-serif;font-size: 1rem;font-weight:normal; text-transform: uppercase;line-height:52px;text-align:center;text-decoration:none;width:220px;height: 52px;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn">${buttonLabel1}</a>

                    </div>
                    <!--[if true]> 
                </td> 


                </tr> 
                </table> 
                <![endif]-->
                </div>
                <!--[if true]> 
                </td> 
                </tr> 
                </table> 
                <![endif]-->
                <!-- Two Column 1-6 Close -->
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
        template.style.maxWidth = "600px";
        template.style.width = "100%";
        template.verticalAlign = "top";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.innerHTML = `

        
               <tr><td>

          <!--[if mso]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
          <![endif]-->
          <tr class="image-container" style="max-width: 536px; height: 300px; ">

        <td style="margin-bottom: 32px;" class="_introline">
            <img src="${image2}" alt="Lifestyle Image" width="100%" style="display: block; object-fit: cover; object-position: top;border-radius: 8px;height:300px; max-width: 536px; margin: 0 auto 32px;">
        </td>
          </tr>
          <!--[if mso]>
              </td>
            </tr>
          </table>
          <![endif]-->

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
        template.style.maxWidth = "600px";
        template.width = "600";
        template.style.width = "100%";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.innerHTML = `

  

        <tr>
        <td style="padding: 0 32px;" class="_introline">
        <p style="font-size: 1rem; line-height: 1.5rem; font-weight: 500; font-family: 'UniversLTStd-Cn', 'verdana', sans-serif; text-align: left; margin: 0 0 32px; color: #000;">${imageCopy2}</p></td></tr>

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
        var button = document.createElement("div");

        button.role = "presentation";
        button.style.margin = "0 auto 32px";

        button.className = "_body-cta";

           button.innerHTML = `


<!--[if mso]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" valign="middle">
        <div class="button-container">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref2}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn', sans-serif;font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn btn-style1">${buttonLabel2}</center></v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <a href="${buttonHref2}" target="_blank"  style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:inline-block;font-family:'UniversLTStd-Cn', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform:uppercase;width:220px;height: 52px;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn btn-style1">${buttonLabel2}</a>
          <!--<![endif]-->
        </div>
      </td>
    </tr>
  </table>
  <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->
    





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
        template.style.maxWidth = "600px";
        template.width = "600";
        template.style.width = "100%";
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
    
