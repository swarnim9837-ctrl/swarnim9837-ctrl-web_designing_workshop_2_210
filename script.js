  // Selecting Elements
    const heading = document.getElementById("heading");
    const paragraph = document.getElementById("para");
    const input = document.getElementById("userInput");

    const changeTextBtn = document.getElementById("changeTextBtn");
    const colorBtn = document.getElementById("colorBtn");
    const fontBtn = document.getElementById("fontBtn");
    const toggleBtn = document.getElementById("toggleBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Change Heading Text
    changeTextBtn.addEventListener("click", function(){

      let newText = input.value;

      heading.textContent = newText;

    });

    // Change Background Color
    colorBtn.addEventListener("click", function(){

      document.body.style.backgroundColor = "lightblue";

    });

    // Increase Font Size
    fontBtn.addEventListener("click", function(){

      paragraph.style.fontSize = "28px";

    });

    // Show / Hide Paragraph
    toggleBtn.addEventListener("click", function(){

      if(paragraph.style.display === "none"){

        paragraph.style.display = "block";

      }
      else{

        paragraph.style.display = "none";

      }

    });

    // Reset Page
    resetBtn.addEventListener("click", function(){

      heading.textContent = "DOM Manipulation using JavaScript";

      paragraph.style.display = "block";

      paragraph.style.fontSize = "18px";

      document.body.style.backgroundColor = "#f2f2f2";

      input.value = "";

    });