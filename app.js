const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const y = document.querySelector("#y");
const amplitude = document.querySelector("#amplitude");
const longitude = document.querySelector("#longitude");
const phasing = document.querySelector("#phasing");
const color = document.querySelector("#color");
let phase = 0;

canvas.width = innerWidth;
canvas.height = innerHeight;

function animate() {
  requestAnimationFrame(animate);

  c.fillStyle = "rgba(0,0,0,0.01)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.beginPath();

  c.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(
      i,
      parseFloat(y.value) +
        Math.sin((i + phase) * longitude.value) * amplitude.value
    );
  }

  c.strokeStyle = `hsl(${color.value}, 50%, 50%)`;
  c.stroke();
  phase += parseFloat(phasing.value) * 0.2;
}

animate();
