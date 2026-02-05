const gameData = {
  "Minecraft": 1,
  "Fortnite": 2,
  "GTA V": 2.5,
  "MSFS 2024": 4,
  "MSFS 2020": 3.5,
  "Rocket League": 1.5,
  "Hogwarts Legacy": 3,
  "War Thunder": 2,
  "Cyberpunk 2077": 3.5,
  "Call of Duty": 3,
  "Apex Legends": 2.5,
  "Valorant": 1.5,
  "Elden Ring": 3,
  "Starfield": 4,
  "Red Dead Redemption 2": 3.5,
  "CS2": 2,
  "Rainbow Six Siege": 2
};

// Render game checkboxes
const gameContainer = document.getElementById("games");

for (let game in gameData) {
  gameContainer.innerHTML += `
    <label>
      <input type="checkbox" value="${game}">
      ${game}
    </label>
  `;
}

function calculateBuild() {
  const selectedGames = [...document.querySelectorAll("#games input:checked")]
    .map(g => gameData[g.value]);

  if (selectedGames.length === 0) {
    document.getElementById("result").innerHTML =
      "<p>Please select at least one game.</p>";
    return;
  }

  const resolution = parseFloat(document.getElementById("resolution").value);
  const settings = parseFloat(document.getElementById("settings").value);
  const fps = parseFloat(document.getElementById("fps").value);

  const maxGameLoad = Math.max(...selectedGames);
  const totalLoad = maxGameLoad * resolution * settings * fps;

  let build;

  if (totalLoad < 2) {
    build = {
      cpu: "Ryzen 5 3600 / i5-10400",
      gpu: "GTX 1660 / RX 5600 XT",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      price: "$600 – $800"
    };
  } 
  else if (totalLoad < 3) {
    build = {
      cpu: "Ryzen 5 5600 / i5-12400",
      gpu: "RTX 3060 / RX 6600",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      price: "$800 – $1,100"
    };
  } 
  else if (totalLoad < 4) {
    build = {
      cpu: "Ryzen 7 5800X / i7-12700",
      gpu: fps >= 1.4
        ? "RTX 4070 Ti / RX 7800 XT"
        : "RTX 4070 / RX 7700 XT",
      ram: "32GB DDR4",
      storage: "1–2TB NVMe SSD",
      price: "$1,200 – $1,600"
    };
  } 
  else {
    build = {
      cpu: "Ryzen 7 7800X3D / i9-14900K",
      gpu: fps >= 1.4
        ? "RTX 4090 / RX 7900 XTX"
        : "RTX 4080 Super / RX 7900 XT",
      ram: "32–64GB DDR5",
      storage: "2TB NVMe SSD",
      price: "$2,000 – $3,000+"
    };
  }

  document.getElementById("result").innerHTML = `
    <h2>Recommended Build</h2>
    <p><strong>CPU:</strong> ${build.cpu}</p>
    <p><strong>GPU:</strong> ${build.gpu}</p>
    <p><strong>RAM:</strong> ${build.ram}</p>
    <p><strong>Storage:</strong> ${build.storage}</p>
    <p><strong>Estimated Price:</strong> ${build.price}</p>
  `;
}
const fpsGameSelect = document.getElementById("fpsGame");

for (let game in gameData) {
  fpsGameSelect.innerHTML += `<option value="${game}">${game}</option>`;
}
