const blog = document.querySelector(".blog");
const btn = document.querySelector(".read-more");

btn.addEventListener("click", (e) => {
  blog.style.overflow = "visible";
  btn.style.visibility = "hidden";
});
