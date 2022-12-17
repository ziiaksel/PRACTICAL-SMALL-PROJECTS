const button = document.getElementById("heart-btn");
const heartContainer = document.getElementById("heart-container");
//reusable function
const randomHeart = () => {
  const heartParent = document.createElement("div");
  heartContainer.append(heartParent);
  const setint = setInterval(() => {
    const element = document.createElement("div");
    element.classList.add("heart");
    element.innerHTML = `&#129505`;
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${(Math.random() + 0.6) * 2}s`;
    heartParent.append(element);
    const element2 = document.createElement("div");
    element2.classList.add("heart");
    element2.innerHTML = `&#128156`;
    element2.style.left = `${Math.random() * 100}%`;
    element2.style.animationDuration = `${(Math.random() + 0.6) * 2}s`;
    heartParent.append(element2);
  }, 300);
  setTimeout(() => {
    clearInterval(setint);
  }, 4000);
  setTimeout(() => {
    heartParent.remove();
  }, 4050);
};

button.addEventListener("click", (eo) => {
  //reusable function
  randomHeart();
});
