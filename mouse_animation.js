<div class="demo">
  <div class="perspective-container">
    <div class="card"></div>
  </div>
</div>
.demo {
  background-color: hsl(207, 9%, 19%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.perspective-container {
  perspective: 800px;
}
.card {
    background-image: url(https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif);
    background-size: cover;
    box-shadow: 0 0 140px 10px rgba(0,0,0,.5);
    position: relative;
    height: 300px;
    width: 500px;
    overflow: hidden; /* Try removing this to see how the sheen works! */
    --sheenX: 0; /* Set these with JavaScript */
    --sheenY: 0;
  }
  .card::after {
    content: "";
    position: absolute;
    top: -400px;
    right: -400px;
    bottom: -400px;
    left: -400px;
    background: linear-gradient(217deg, rgba(255,255,255,0), rgba(255,255,255,0) 35%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
    transform: translateX(var(--sheenX)) translateY(var(--sheenY));
  }
  function handleMouseMove(event) {
    const height = window.innerHeight;
    const width = window.innerWidth;
    // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
    const yAxisDegree = event.pageX / width * 40 - 20;
    const xAxisDegree = event.pageY / height * -1 * 40 + 20;
    target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
    // Set the sheen position
    setSheenPosition(event.pageX / width, event.pageY / width);
  }
  function setSheenPosition(xRatio, yRatio) {
    // This creates a "distance" up to 400px each direction to offset the sheen
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    target.style.setProperty('--sheenX', `${xOffset}px`)
    target.style.setProperty('--sheenY', `${yOffset}px`)
  }