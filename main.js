  const rows = 30;
  const cols = 30;
  const totalCells = rows * cols;
  const particleCount = 50; // Adjust for performance
  const snowArea = document.getElementById("snow-area");

  function spawnParticle() {
    const particle = document.createElement("div");
    particle.classList.add("prtcls");

    const index = Math.floor(Math.random() * totalCells);
    const row = Math.floor(index / cols) + 1;
    const col = (index % cols) + 1;

    particle.style.gridRowStart = row;
    particle.style.gridColumnStart = col;

    // Add random animation delay
    const delay = Math.random() * 2;
    particle.style.animationDelay = `${delay}s`;

    snowArea.appendChild(particle);

    // Remove particle after animation (3s + delay)
    setTimeout(() => {
      snowArea.removeChild(particle);
    }, 3000 + delay * 1000);
  }

  // Spawn particles repeatedly
  setInterval(() => {
    for (let i = 0; i < particleCount; i++) {
      spawnParticle();
    }
  }, 3000); // Every 3 seconds