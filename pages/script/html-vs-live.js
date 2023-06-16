      var isHtmlView = false;
      var editorElement = document.getElementById("editor");

      function toggleView() {
        isHtmlView = !isHtmlView;

        if (isHtmlView) {
          // Switch to HTML view
          var htmlContent = editorElement.innerHTML;
          editorElement.textContent = htmlContent;
        } else {
          // Switch to WYSIWYG view
          var textContent = editorElement.textContent;
          editorElement.innerHTML = textContent;
        }
      }
            
            
     function copyToClipboard() {
        var contentToCopy = isHtmlView ? editorElement.textContent : editorElement.innerHTML;
        var textarea = document.createElement("textarea");
        textarea.value = contentToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
           alert("copied to clipboard");

      }
