// Safe DOM selection (works even if script runs before DOM is ready)
let a = 5;
console.log(a);
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

document.addEventListener("DOMContentLoaded", () => {
  const title = $("#main-title");
  const btn = $("#btn");
  const resetBtn = $("#reset");
  const box = $(".box");
  const paragraphs = $$(".para");

  if (!title || !btn || !box) {
    console.warn(
      "Some required DOM elements are missing. Check index.html IDs/classes."
    );
    return;
  }

  // initial text
  title.textContent = "Welcome to DOM Basics";

  btn.addEventListener("click", () => {
    title.textContent = "Button Clicked!";
    box.classList.toggle("highlight");
    if (paragraphs.length > 0)
      paragraphs[0].textContent = "This paragraph was updated after a click!";
  });

  // hover effects
  box.addEventListener("mouseover", () => box.classList.add("active"));
  box.addEventListener("mouseout", () => box.classList.remove("active"));

  // reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      title.textContent = "Hello DOM";
      box.classList.remove("highlight", "active");
      paragraphs.forEach(
        (p, i) =>
          (p.textContent =
            i === 0
              ? "This is the first paragraph."
              : "This is the second paragraph.")
      );
    });
  }
});
