// Minimum specs = ~60 FPS average @ 1080p Low (no 1% lows)
const gameData = {
  "Minecraft (Java)": 1.0,
  "Valorant": 1.0,
  "Rocket League": 1.1,
  "CS2": 1.4,
  "Rainbow Six Siege": 1.5,
  "War Thunder": 1.6,
  "Fortnite": 1.8,
  "Apex Legends": 1.9,
  "GTA V": 2.0,
  "Call of Duty": 2.2,
  "Elden Ring": 2.4,
  "Hogwarts Legacy": 2.7,
  "Red Dead Redemption 2": 2.8,
  "Cyberpunk 2077": 3.0,
  "Starfield": 3.2,
  "MSFS 2020": 3.8,
  "MSFS 2024": 4.0
};

// Render game checkboxes
const gameContainer = document.getElementById("games");
const fpsGameSelect = document.getElementById("fpsGame");

for (let game in gameData) {
  gameContainer.innerHTML += `
    <label>
      <input type="checkbox" value="${game}">
      ${game}
    </label>
  `;
  fpsGameSelect.innerHTML += `<option value="${game}">${game}</option>`;
}

// BUILD CALCULATOR
function calculateBuild() {
  const selectedGames = [...document.querySelectorAll("#games input:checked")]
    .map(g => gameData[g.value]);

  if (!selectedGames.length) {
    document.getElementById("result").innerHTML =
      "<p class='hint'>Select at least one game to generate a build.</p>";
    return;
  }

  const resolution = +document.getElementById("resolution").value;
  const settings = +document.getElementById("settings").value;
  const fps = +document.getElementById("fps").value;

  const load = Math.max(...selectedGames) * resolution * settings * fps;

  let build;
  if (load < 2) build = {
    cpu: "Ryzen 5 3600 / i5-10400",
    gpu: "GTX 1660 / RX 5600 XT",
    ram: "16GB",
    storage: "1TB SSD",
    price: "$600–800"
  };
  else if (load < 3) build = {
    cpu: "Ryzen 5 5600 / i5-12400",
    gpu: "RTX 3060 / RX 6600",
    ram: "16GB",
    storage: "1TB NVMe",
    price: "$800–1,100"
  };
  else if (load < 4) build = {
    cpu: "Ryzen 7 5800X / i7-12700",
    gpu: fps >= 1.4 ? "RTX 4070 Ti / RX 7800 XT" : "RTX 4070 / RX 7700 XT",
    ram: "32GB",
    storage: "1–2TB NVMe",
    price: "$1,200–1,600"
  };
  else build = {
    cpu: "Ryzen 7 7800X3D / i9-14900K",
    gpu: fps >= 1.4 ? "RTX 4090 / RX 7900 XTX" : "RTX 4080 Super",
    ram: "32–64GB",
    storage: "2TB NVMe",
    price: "$2,000+"
  };

  document.getElementById("result").innerHTML = `
    <p><strong>CPU:</strong> ${build.cpu}</p>
    <p><strong>GPU:</strong> ${build.gpu}</p>
    <p><strong>RAM:</strong> ${build.ram}</p>
    <p><strong>Storage:</strong> ${build.storage}</p>
    <p><strong>Estimated Price:</strong> ${build.price}</p>
    <p class="hint">Based on official minimum specs scaled to your target.</p>
  `;
}

// FPS ESTIMATOR
function estimateFPS() {
  const cpu = +document.getElementById("cpuTier").value;
  const gpu = +document.getElementById("gpuTier").value;
  const game = document.getElementById("fpsGame").value;
  const resolution = +document.getElementById("fpsResolution").value;
  const settings = +document.getElementById("fpsSettings").value;

  const pcScore = gpu * 0.7 + cpu * 0.3;
  const gameLoad = gameData[game] * resolution * settings;

  let fps = Math.round((pcScore / gameLoad) * 60);
  fps = Math.max(10, Math.min(300, fps));

  document.getElementById("fpsResult").innerHTML = `
    <p><strong>Estimated Average FPS:</strong> ${fps}</p>
    <p class="hint">~60 FPS avg baseline, no 1% lows.</p>
  `;
}
