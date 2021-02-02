const boxes = document.querySelectorAll(".box");

const options = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0,
};
const observer = new IntersectionObserver(doWhenIntersect, options);

boxes.forEach((box) => {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    }
  });
}

function activateIndex(element) {
  const currentActiveIndex = document.querySelector("#indexList .active");
  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }
  const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
  newActiveIndex.classList.add("active");
}
