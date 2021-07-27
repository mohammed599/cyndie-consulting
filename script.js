const blog = document.querySelector(".blog");
const btn = document.querySelector(".read-more");
const btnLess = document.querySelector(".show-less");

btn.addEventListener("click", (e) => {
  blog.style.overflow = "visible";
  btn.style.visibility = "hidden";
  btnLess.visibility = "visible";
});
btnLess.addEventListener("click", (e) => {
  blog.style.overflow = "hidden";
  btn.style.visibility = "visible";
});
