const tasks = [
    {
      description: "Set the text color to red for all <p> elements.",
      html: "<p>This is a paragraph.</p><p>Style me!</p>",
      expectedCSS: /p\s*{\s*color:\s*red;\s*}/,
    },
    {
      description: "Set the background color to yellow for the <div> element.",
      html: "<div>Style me!</div>",
      expectedCSS: /div\s*{\s*background-color:\s*yellow;\s*}/,
    },
    {
      description: "Set the font size to 20px for all <h1> elements.",
      html: "<h1>Header 1</h1><h1>Another Header</h1>",
      expectedCSS: /h1\s*{\s*font-size:\s*20px;\s*}/,
    },
    {
      description: "Make all <a> elements bold (font-weight: bold).",
      html: '<a href="#">Link 1</a><br><a href="#">Link 2</a>',
      expectedCSS: /a\s*{\s*font-weight:\s*bold;\s*}/,
    },
    {
      description: "Set the margin to 10px for all <div> elements.",
      html: "<div>First box</div><div>Second box</div>",
      expectedCSS: /div\s*{\s*margin:\s*10px;\s*}/,
    },
    {
      description: "Set the border to 1px solid black for all <span> elements.",
      html: "<span>Span 1</span><br><span>Span 2</span>",
      expectedCSS: /span\s*{\s*border:\s*1px\s+solid\s+black;\s*}/,
    },
    {
      description: "Set the text alignment to center for all <h2> elements.",
      html: "<h2>Header 2</h2><h2>Centered Header</h2>",
      expectedCSS: /h2\s*{\s*text-align:\s*center;\s*}/,
    },
    {
      description: "Set the padding to 15px for all <ul> elements.",
      html: "<ul><li>Item 1</li><li>Item 2</li></ul>",
      expectedCSS: /ul\s*{\s*padding:\s*15px;\s*}/,
    },
    {
      description: "Change the font color to blue for all <li> elements.",
      html: "<ul><li>Item 1</li><li>Item 2</li></ul>",
      expectedCSS: /li\s*{\s*color:\s*blue;\s*}/,
    },
    {
      description: "Set the height to 100px and the width to 200px for all <div> elements.",
      html: "<div>Box 1</div><div>Box 2</div>",
      expectedCSS: /div\s*{\s*height:\s*100px;\s*width:\s*200px;\s*}/,
    },
    {
      description: "Make all <p> elements italic (font-style: italic).",
      html: "<p>Paragraph 1</p><p>Paragraph 2</p>",
      expectedCSS: /p\s*{\s*font-style:\s*italic;\s*}/,
    },
    {
      description: "Set the background color to lightgrey for the element with id 'main'.",
      html: '<div id="main">Main content</div>',
      expectedCSS: /#main\s*{\s*background-color:\s*lightgrey;\s*}/,
    },
    {
      description: "Set the font family to Arial for all <p> elements.",
      html: "<p>Paragraph 1</p><p>Paragraph 2</p>",
      expectedCSS: /p\s*{\s*font-family:\s*Arial;\s*}/,
    },
    {
      description: "Set the text color to green for all elements with the class 'highlight'.",
      html: '<div class="highlight">Highlighted text</div>',
      expectedCSS: /\.highlight\s*{\s*color:\s*green;\s*}/,
    },
    {
      description: "Set the width to 50% for the <img> element.",
      html: '<img src="image.jpg" alt="Sample image">',
      expectedCSS: /img\s*{\s*width:\s*50%;\s*}/,
    },
    {
      description: "Add a 5px dashed red border to all <section> elements.",
      html: "<section>Section 1</section><section>Section 2</section>",
      expectedCSS: /section\s*{\s*border:\s*5px\s+dashed\s+red;\s*}/,
    },
    {
      description: "Set the display property to flex for the <div> element.",
      html: "<div>Flexible container</div>",
      expectedCSS: /div\s*{\s*display:\s*flex;\s*}/,
    },
    {
      description: "Set the maximum width to 300px for all <img> elements.",
      html: '<img src="image.jpg" alt="Image 1"><img src="image2.jpg" alt="Image 2">',
      expectedCSS: /img\s*{\s*max-width:\s*300px;\s*}/,
    },
    {
      description: "Center align text in all elements with the class 'centered'.",
      html: '<div class="centered">Centered text</div>',
      expectedCSS: /\.centered\s*{\s*text-align:\s*center;\s*}/,
    },
    {
        description: "Set the text color of the first <h1> element to blue.",
        html: "<h1>Welcome</h1><p>This is a paragraph.</p>",
        expectedCSS: /h1\s*{\s*color:\s*blue;\s*}/,
      },
      {
        description: "Set the background color of the element with id 'special' to yellow.",
        html: "<p id='special'>Highlight me!</p><p>Don't highlight me.</p>",
        expectedCSS: /#special\s*{\s*background-color:\s*yellow;\s*}/,
      },
      {
        description: "Set the font size of all <h2> elements to 24px.",
        html: "<h2>Title 1</h2><h2>Title 2</h2>",
        expectedCSS: /h2\s*{\s*font-size:\s*24px;\s*}/,
      },
      {
        description: "Make the text of the element with the class 'bold-text' bold.",
        html: "<p class='bold-text'>I should be bold.</p><p>I should not be bold.</p>",
        expectedCSS: /\.bold-text\s*{\s*font-weight:\s*bold;\s*}/,
      },
      {
        description: "Set the border of the <div> with id 'box' to 2px solid black.",
        html: "<div id='box'>I'm in a box!</div>",
        expectedCSS: /#box\s*{\s*border:\s*2px\s*solid\s*black;\s*}/,
      },
      {
        description: "Change the color of the <span> element inside the <p> to red.",
        html: "<p>This is a <span>special</span> word.</p>",
        expectedCSS: /p\s*span\s*{\s*color:\s*red;\s*}/,
      },
      {
        description: "Center-align the text of the <h3> with the id 'centered'.",
        html: "<h3 id='centered'>I'm centered!</h3>",
        expectedCSS: /#centered\s*{\s*text-align:\s*center;\s*}/,
      },
      {
        description: "Set the width of the <img> element with the class 'thumbnail' to 150px.",
        html: "<img class='thumbnail' src='image.jpg' alt='A thumbnail'>",
        expectedCSS: /\.thumbnail\s*{\s*width:\s*150px;\s*}/,
      },
      {
        description: "Set the text decoration of the <a> element with id 'link' to none.",
        html: "<a id='link' href='#'>Click me!</a>",
        expectedCSS: /#link\s*{\s*text-decoration:\s*none;\s*}/,
      },
      {
        description: "Set the font family of the <p> element with class 'custom-font' to Arial.",
        html: "<p class='custom-font'>Use a custom font for me!</p>",
        expectedCSS: /\.custom-font\s*{\s*font-family:\s*Arial;\s*}/,
      },
      {
        description: "Set the background color of the first <li> element to lightgray.",
        html: "<ul><li>Item 1</li><li>Item 2</li></ul>",
        expectedCSS: /li:first-of-type\s*{\s*background-color:\s*lightgray;\s*}/,
      },
      {
        description: "Set the padding of the <div> with id 'container' to 20px.",
        html: "<div id='container'>Content goes here!</div>",
        expectedCSS: /#container\s*{\s*padding:\s*20px;\s*}/,
      },
      {
        description: "Set the border radius of the <button> with class 'rounded' to 10px.",
        html: "<button class='rounded'>Click Me!</button>",
        expectedCSS: /\.rounded\s*{\s*border-radius:\s*10px;\s*}/,
      },
      {
        description: "Set the display of the element with id 'hidden' to none.",
        html: "<p id='hidden'>You can't see me!</p>",
        expectedCSS: /#hidden\s*{\s*display:\s*none;\s*}/,
      },
      {
        description: "Change the text color of <h4> elements inside a <div> with id 'wrapper' to green.",
        html: "<div id='wrapper'><h4>Title</h4><p>Text</p></div>",
        expectedCSS: /#wrapper\s*h4\s*{\s*color:\s*green;\s*}/,
      },
      {
        description: "Set the text transform of the <p> with class 'uppercase' to uppercase.",
        html: "<p class='uppercase'>Make me uppercase!</p>",
        expectedCSS: /\.uppercase\s*{\s*text-transform:\s*uppercase;\s*}/,
      },
      {
        description: "Set the height of the <div> with id 'tall' to 300px.",
        html: "<div id='tall'>I'm tall!</div>",
        expectedCSS: /#tall\s*{\s*height:\s*300px;\s*}/,
      },
      {
        description: "Set the font style of the <span> inside the <h1> to italic.",
        html: "<h1>Heading <span>with emphasis</span></h1>",
        expectedCSS: /h1\s*span\s*{\s*font-style:\s*italic;\s*}/,
      },
      {
        description: "Set the margin of the <div> with class 'spaced' to 15px.",
        html: "<div class='spaced'>Give me some space!</div>",
        expectedCSS: /\.spaced\s*{\s*margin:\s*15px;\s*}/,
      },
      {
        description: "Set the letter spacing of the <p> element with id 'spread-out' to 2px.",
        html: "<p id='spread-out'>Spread out my letters!</p>",
        expectedCSS: /#spread-out\s*{\s*letter-spacing:\s*2px;\s*}/,
      },
  ];
  
  
  function loadTask() {
    currentTaskIndex = Math.floor(Math.random() * tasks.length); // Select a random task index
    const task = tasks[currentTaskIndex];
    const taskElement = document.getElementById("task");
    const previewElement = document.getElementById("preview");
    const feedbackElement = document.getElementById("feedback");
    const cssInput = document.getElementById("cssInput");
    const nextTaskButton = document.getElementById("nextTask");
  
    taskElement.textContent = task.description;
    previewElement.innerHTML = task.html;
    feedbackElement.textContent = "";
    cssInput.value = "";
    nextTaskButton.disabled = true; // Disable the "Next Task" button
    nextTaskButton.style.display = "none"; // Hide it initially
  }
  
  function checkCSS() {
    const userCSS = document.getElementById("cssInput").value.trim();
    const task = tasks[currentTaskIndex];
    const feedbackElement = document.getElementById("feedback");
    const nextTaskButton = document.getElementById("nextTask");
  
    if (task.expectedCSS.test(userCSS)) {
      feedbackElement.textContent = "Correct! Well done!";
      feedbackElement.classList.remove("error");
      feedbackElement.classList.add("success");
      nextTaskButton.disabled = false; // Enable the "Next Task" button
      nextTaskButton.style.display = "inline-block"; // Show the button
    } else {
      feedbackElement.textContent = "Incorrect. Try again!";
      feedbackElement.classList.remove("success");
      feedbackElement.classList.add("error");
    }
  }
  
  document.getElementById("checkButton").addEventListener("click", checkCSS);
  document.getElementById("nextTask").addEventListener("click", loadTask);
  
  // Load the first task on page load
  loadTask();
