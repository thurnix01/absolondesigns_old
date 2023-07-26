

    function addTemplate() {
        var heroImage = document.getElementById("hero-image").value;
        var introLine = document.getElementById("intro-line").value;
        var bodyCopy = document.getElementById("body-copy").value;



        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_header-section";
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
        template.innerHTML = `
          <!--[if mso]>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->


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

  <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->

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
        button.style.maxWidth = "600px";
        button.width = "600";
        button.style.width = "100%";
        button.style.margin = "0 auto";
        button.style.tableLayout = "fixed";
        button.verticalAlign = "top";
        button.border = "0";
        button.cellPadding = "0";
        button.cellSpacing = "0";
        button.role = "presentation";
        button.align = "center";
        button.style.margin = "0 0 32px";
     

        button.className = "_header-cta";
      
           button.innerHTML = `

<!--[if mso]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="left" valign="middle" width="100%">
  <![endif]-->
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
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
        template.style.width = "100%";
        template.innerHTML = `

          <!--[if mso]>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->

        <tr><td><h3 style="font-size: 2.5rem; font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten', 'verdana', sans-serif; text-align: center; text-transform: uppercase; margin: 32px 32px 16px; color: #000; padding-top: 32px;">${introBodyTitle}</h3></td></tr>

 <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->


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
        var commentBeforeSub; // Variable to store the comment before Sub
        var commentAfterSub; // Variable to store the comment after Sub
        var commentBeforeDivs;
        var commentAfterDivs;
        var divCount = 0; // A variable to keep track of the number of Sub added

      
      
      function addTemplate3() {
           var container = document.getElementById("container");

          
        if (!commentBeforeSub && !commentAfterSub) {
   
        // Create comments for before and after Sub
        commentBeforeSub = document.createComment(`[if true]>
                <tr> 
                <![endif]`);
        commentAfterSub = document.createComment(`[if true]> 
                </tr> 
                <![endif]`);          
                                
        
        // Get the container div
        let container = document.getElementById('container');
  
        // Append the comments before and after the Sub
        container.appendChild(commentBeforeSub);
                 
      }
      
  
                    
         if (!subContainer || subContainer.childElementCount >= 2) {
              
          subContainer = document.createElement("tr");
          subContainer.className = "sub-container";
          subContainer.style.display = "block";
          subContainer.style.maxWidth = "600px";
          subContainer.style.width = "100%";
          subContainer.style.margin = "0 auto";

          subContainer.width = "600";      
     

          container.appendChild(subContainer);
                }
    
        container.appendChild(commentAfterSub);
          
    
        commentBeforeDivs = document.createComment(`[if true]>
                <td style="width: 248px;" valign="top" width="248"> 
                <![endif]`);
        commentAfterDivs = document.createComment(`[if true]> 
                </td> 
                <![endif]`);          
            
        // Get the container div
         var container = document.getElementById('container');

        // Append the comments before and after the Divs
        subContainer.appendChild(commentBeforeDivs);
              

          
        var image1 = document.getElementById("image-1").value;
        var imageCopy1 = document.getElementById("image-copy-1").value;
        var buttonLabel1 = document.getElementById("buttonLabel1").value;
        var buttonHref1 = document.getElementById("buttonHref1").value;      
        var template = document.createElement("td");
        template.className = "product"; 
        template.style.width = "295px"; 
        template.style.float = "left";
        template.style.textAlign = "center";   
         
        template.innerHTML = `
        <p style="margin: 0 auto 12px; width: 290px; font-family: 'UniversLTStd-Cn', Helvetica, Arial, Tahoma, sans-serif; text-align: center; font-size:1rem;font-weight: normal; color:#000;"><img src="${image1}" alt="Product Image" style="width:290px; margin: 0 auto; display: flex; height: 265px; object-fit: contain;" border="0" width="290">${imageCopy1}</p>

            <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref1}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;text-transform: uppercase;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647">
                    <w:anchorlock />
                    <center style="color:#ffffff;font-family:'UniversLTStd-Cn', sans-serif;font-size:16px;font-weight:bold;" class="_cta_btn">${buttonLabel1}</center>
                </v:roundrect>
                <![endif]--><a href="${buttonHref1}" target="_blank" style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:block;font-family:'UniversLTStd-Cn', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform: uppercase;width:220px;height: 52px;margin:0 auto;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn">${buttonLabel1}</a>
        `;  
     
        subContainer.appendChild(template);
          

          
        subContainer.appendChild(commentAfterDivs); 
          
          
    
          
      }
      
      
      function removeTemplate3() {
      var templates = document.getElementsByClassName(product);

              if (templates.length > 0) {
              var divToRemove = templates[templates.length - 1];
              var template = divToRemove.parentNode;
              template.removeChild(divToRemove);

                  if (template.childElementCount === 0) {
                  container.removeChild(template);
                  container.removeChild(commentBeforeSub);      
                  container.removeChild(commentAfterSub);
       
                  subContainer = null;
          }
         }
          
           var subContainer = document.getElementById('sub-container');

              // Get all child nodes of the subContainer
              var childNodes = template.childNodes;

              var lastTwoComments = []; // Array to store the last two comments

              // Find the last two comments
              for (var i = childNodes.length - 1; i >= 0; i--) {
                var node = childNodes[i];
                if (node.nodeType === 8) {
                  // If it's a comment, add it to the array
                  lastTwoComments.push(node);
                  if (lastTwoComments.length === 2) {
                    // If we have found the last two comments, break the loop
                    break;
                  }
                }
              }

              // Remove the last two comments from the subContainer
              lastTwoComments.forEach(function (comment) {
                template.removeChild(comment);
              });
          
      }
      

      
    //-------------------------------------------


    function addTemplate4() {


        var image2 = document.getElementById("image-2").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_body-image";
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
        template.innerHTML = `

          <!--[if mso]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->
               <tr><td>

          <!--[if mso]>
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
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
 <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->


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
 
        template.innerHTML = `

  <!--[if mso]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->

        <tr>
        <td style="padding: 0 32px;" class="_introline">
        <p style="font-size: 1rem; line-height: 1.5rem; font-weight: 500; font-family: 'UniversLTStd-Cn', 'verdana', sans-serif; text-align: left; margin: 0 0 32px; color: #000;">${imageCopy2}</p></td></tr>

 <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->
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
        var button = document.createElement("table");
        button.style.maxWidth = "600px";
        button.width = "600";
        button.style.width = "100%";
        button.style.margin = "0 auto";
        button.style.tableLayout = "fixed";
        button.verticalAlign = "top";
        button.border = "0";
        button.cellPadding = "0";
        button.cellSpacing = "0";
        button.role = "presentation";
        button.align = "center";
        button.style.margin = "0 auto 32px";

        button.className = "_body-cta";

           button.innerHTML = `


<!--[if mso]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle" width="100%">
  <![endif]-->
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="center" valign="middle">
        <div class="button-container">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref2}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn', sans-serif;font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn btn-style2">${buttonLabel2}</center></v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <a href="${buttonHref2}" target="_blank"  style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:inline-block;font-family:'UniversLTStd-Cn', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform:uppercase;width:220px;height: 52px;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn btn-style2">${buttonLabel2}</a>
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



<tr>
                <td bgcolor="#FFFFFF" style="background-color:#FFFFFF;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">

                      <tr bgcolor="#ffffff" style="background-color:#ffffff;">
                        <td align="center" style="margin:0 auto; vertical-align:middle; padding-top:0px; padding-bottom: 50px; " valign="middle"><div style="font-size:0;background-color: #f9f9f9;"> 
                            <!--[if mso]>
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation"align="center">
                                                <tr>
                                                   <td align="center" valign="middle" width="55%">
                                                      <![endif]-->

                            <div style="display:inline-block; vertical-align:middle; width:55%; min-width:270px; max-width:100%; width:-webkit-calc(230400px - 48000%); min-width:-webkit-calc(55%); width:calc(230400px - 48000%); min-width:calc(55%);"> 
                              <!-- left -->
                              <table align="left" border="0" cellpadding="0" cellspacing="0"  role="presentation" width="300">
            
                                  <tr>
                                    <td style="color:#333333; font-family:'UniversLTStd-Cn', Arial, Helvetica, sans-serif; font-size:20px; line-height:24px;"><a  href="${buttonHref3}" target="_blank"><img alt="Footer Promotional image" src="${image3}"  width="300" height="300" border="0" hspace="0" vspace="0" style="color:#000000; font-family:'UniversLTStd-Cn', Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:22px; line-height:28px; display:block; vertical-align:top; object-fit: cover;"></a></td>
                                  </tr>
                         
                              </table>
                              <!-- END left --> 
                            </div>
                            <!--[if mso]>
                                                   </td>
                                                   <td align="center" valign="middle" width="45%">
                                                      <![endif]-->
                            <div style="display:inline-block; vertical-align:middle; width:45%; min-width:245px; max-width:100%; width:-webkit-calc(230400px - 48000%); min-width:-webkit-calc(45%); width:calc(230400px - 48000%); min-width:calc(45%); background-color: #f9f9f9;"> 
                              <!-- right -->
                              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#f9f9f9">
            
                                  <tr>
                                    <td style="color:#000000; font-family:'tungsten', 'verdana', Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:42px; font-weight: 400; text-transform: uppercase;">${introBodyTitle2}</td>
                                    
                                  </tr>
                                  <tr>
                                    <td style="color:#2C2C2C; font-family:'UniversLTStd-Cn', Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:18px;">${imageCopy3}</td>
                                    
                                  </tr>
                                  <tr>
                                    <td style="color:#333;  font-size:18px; line-height:26px; padding-bottom:0px;padding-top:32px;"><a href="${buttonHref3}" target="_blank" style="color:#333; font-weight:bold; text-decoration:underline;font-family:'UniversLTStd-Cn', Helvetica Neue, Helvetica, Verdana, Arial, sans-serif;text-transform: uppercase;">${buttonLabel3}</a></td>
                                    
                                  </tr>
                         
                              </table>
                              <!-- END right --> 
                            </div>
                            <!--[if mso]>
                                                   </td>
                                                </tr>
                                             </table>
                                             <![endif]--> 
                          </div></td>
                      </tr>
             
                  </table></td>
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
    
    
