document.querySelectorAll("h2").forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.backgroundColor = "lightgray";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";
  });
});
