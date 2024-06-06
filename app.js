const mousemoveuse = document.querySelector(".body");

mousemoveuse.addEventListener("mousemove", (event) => {
  var coor =(`Event x=${event.x} y=${event.y}`);
  document.querySelector(".notes").innerHTML=coor;
});