let run = document.getElementById("play");
let remove = document.getElementById("remove");
let codes = document.getElementById("code");
let output = document.getElementById("output");

run.addEventListener("click", (eo) => {
  const local = localStorage.setItem("text", codes.value);
  output.innerHTML += localStorage.getItem("text");
});
remove.addEventListener("click", (eo) => {
  codes.value = "";
  output.innerHTML = "";
  localStorage.clear();
});
onload = (eo) => {
  codes.value = localStorage.getItem("text");
  output.innerHTML += codes.value;
};

// dark light mode

let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let body = document.body

moon.addEventListener("click", (eo) => {
  mode("dark");
  localStorage.setItem("theme","dark")
});
sun.addEventListener("click", (eo) => {
  mode("light");
  localStorage.setItem("theme","light")
});
onload = () => {
    mode(localStorage.getItem("theme"))
}
const mode = (dl) => {
    if (dl === "dark") {
        moon.style.display = "none";
      sun.style.display = "block";
      body.classList.remove("dark")
    } else if (dl === "light") {
      sun.style.display = "none";
      moon.style.display = "block";
      body.classList.add("dark")
    }
  };

