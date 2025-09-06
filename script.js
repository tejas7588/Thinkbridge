// Expanded Keyword dataset
const DATA = [
  // --- HTML Keywords ---
  {
    name: "DOCTYPE",
    cat: "HTML",
    desc: "Declares the document type, must be the very first line in an HTML document.",
    example: "<!DOCTYPE html>",
  },
  {
    name: "a",
    cat: "HTML",
    desc: "Defines a hyperlink, used to link one page to another.",
    example: '<a href="https://example.com" > Visit Example </a>',
  },
  {
    name: "div",
    cat: "HTML",
    desc: "Defines a block-level container for grouping content.",
    example: '<div class="box">Content here</div>',
  },
  {
    name: "span",
    cat: "HTML",
    desc: "Defines an inline container for styling or grouping text.",
    example: '<span style="color:red">Hello</span>',
  },
  {
    name: "form",
    cat: "HTML",
    desc: "Defines an HTML form for user input.",
    example: '<form action="/submit" method="post"> ... </form>',
  },
  {
    name: "input",
    cat: "HTML",
    desc: "Defines an input field for user data.",
    example: '<input type="text" placeholder="Enter your name">',
  },
  {
    name: "button",
    cat: "HTML",
    desc: "Defines a clickable button.",
    example: '<button type="submit">Submit</button>',
  },
  {
    name: "img",
    cat: "HTML",
    desc: "Embeds an image into the page.",
    example: '<img src="photo.jpg" alt="Description">',
  },
  {
    name: "ul",
    cat: "HTML",
    desc: "Defines an unordered list.",
    example: "<ul><li>Item 1</li><li>Item 2</li></ul>",
  },
  {
    name: "table",
    cat: "HTML",
    desc: "Defines a table for displaying tabular data.",
    example: "<table><tr><th>Name</th><td>John</td></tr></table>",
  },

  // --- CSS ---
  {
    name: "color",
    cat: "CSS",
    desc: "Sets text color.",
    example: "p { color: blue; }",
  },
  {
    name: "background-color",
    cat: "CSS",
    desc: "Sets background color.",
    example: "div { background-color: yellow; }",
  },
  {
    name: "margin",
    cat: "CSS",
    desc: "Sets the outside spacing.",
    example: "h1 { margin: 20px; }",
  },
  {
    name: "padding",
    cat: "CSS",
    desc: "Sets the inside spacing.",
    example: "h1 { padding: 10px; }",
  },
  {
    name: "border",
    cat: "CSS",
    desc: "Sets border around an element.",
    example: "div { border: 1px solid black; }",
  },
  {
    name: "display",
    cat: "CSS",
    desc: "Controls layout behavior.",
    example: "div { display: flex; }",
  },
  {
    name: "position",
    cat: "CSS",
    desc: "Specifies positioning method.",
    example: "div { position: absolute; top:0; }",
  },

  // --- JavaScript ---
  {
    name: "let",
    cat: "JavaScript",
    desc: "Declares a block-scoped variable.",
    example: "let count = 0;",
  },
  {
    name: "const",
    cat: "JavaScript",
    desc: "Declares a block-scoped constant.",
    example: "const PI = 3.14;",
  },
  {
    name: "var",
    cat: "JavaScript",
    desc: "Declares a function-scoped variable.",
    example: 'var name = "Tejas";',
  },
  {
    name: "function",
    cat: "JavaScript",
    desc: "Defines a reusable function.",
    example: 'function greet() { return "Hello"; }',
  },
  {
    name: "return",
    cat: "JavaScript",
    desc: "Exits a function and returns a value.",
    example: "return x * 2;",
  },
  {
    name: "if",
    cat: "JavaScript",
    desc: "Conditional statement.",
    example: 'if(x > 10) { console.log("Big"); }',
  },
  {
    name: "for",
    cat: "JavaScript",
    desc: "Loop statement.",
    example: "for(let i=0;i<5;i++){console.log(i);}",
  },
];

// State
let activeChip = "All";
let showFavs = false;
const favorites = new Set(JSON.parse(localStorage.getItem("kb-favs") || "[]"));

// Elements
const grid = document.getElementById("grid");
const chipsEl = document.getElementById("chips");
const searchEl = document.getElementById("search");
const printBtn = document.getElementById("printBtn");

// Debouncing function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

function render() {
  const query = searchEl.value.trim().toLowerCase();
  grid.innerHTML = "";

  const results = DATA.filter(
    (k) =>
      (activeChip === "All" || k.cat === activeChip) &&
      (!showFavs || favorites.has(k.name)) &&
      (k.name.toLowerCase().includes(query) ||
        k.desc.toLowerCase().includes(query) ||
        k.example.toLowerCase().includes(query))
  );

  if (results.length === 0) {
    grid.innerHTML = `<div class="card">⚠️ No results found. Try a different keyword.</div>`;
    return;
  }

  results.forEach((k) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="meta">
        <span class="name">${k.name}</span>
        <span class="category">${k.cat}</span>
      </div>
      <div class="desc">${k.desc}</div>
      <pre class="example">${k.example}</pre>
      <div class="card-actions">
        <button class="small copy">Copy</button>
        <button class="small fav">${
          favorites.has(k.name) ? "★ Unfav" : "☆ Fav"
        }</button>
      </div>`;

    // Copy button with async/await
    const copyBtn = card.querySelector(".copy");
    copyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(k.example);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 1500);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    // Favorite button
    card.querySelector(".fav").onclick = () => {
      if (favorites.has(k.name)) {
        favorites.delete(k.name);
      } else {
        favorites.add(k.name);
      }
      localStorage.setItem("kb-favs", JSON.stringify([...favorites]));
      render();
    };

    grid.appendChild(card);
  });
}

// Add event listeners
searchEl.addEventListener("input", debounce(render, 300));
printBtn.addEventListener("click", () => window.print());

// Initial render
render();
