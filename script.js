function recommendPC() {
  const game = document.getElementById("game").value;
  const resolution = document.getElementById("resolution").value;
  const settings = document.getElementById("settings").value;

  // Recommendation logic
  let cpu = "";
  let gpu = "";

  if (game === "Fortnite") {
    if (resolution === "1080p") {
      cpu = "Intel i3 / Ryzen 3";
      gpu = "GTX 1650 / RX 6500 XT";
    } else if (resolution === "1440p") {
      cpu = "Intel i5 / Ryzen 5";
      gpu = "RTX 3060 / RX 6600";
    } else {
      cpu = "Intel i7 / Ryzen 7";
      gpu = "RTX 4070 / RX 7800 XT";
    }
  } else if (game === "Warzone") {
    if (resolution === "1080p") {
      cpu = "Intel i5 / Ryzen 5";
      gpu = "RTX 3060 / RX 6600";
    } else if (resolution === "1440p") {
      cpu = "Intel i7 / Ryzen 7";
      gpu = "RTX 4070 / RX 7800 XT";
    } else {
      cpu = "Intel i9 / Ryzen 9";
      gpu = "RTX 4080 / RX 7900 XT";
    }
  } else if (game === "Minecraft" || game === "Valorant") {
    cpu = "Intel i3 / Ryzen 3";
    gpu = "GTX 1050 / RX 560";
  } else if (game === "Cyberpunk") {
    if (resolution === "1080p") {
      cpu = "Intel i5 / Ryzen 5";
      gpu = "RTX 3060 / RX 6600";
    } else if (resolution === "1440p") {
      cpu = "Intel i7 / Ryzen 7";
      gpu = "RTX 4070 / RX 7800 XT";
    } else {
      cpu = "Intel i9 / Ryzen 9";
      gpu = "RTX 4090 / RX 7900 XT";
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>Recommended Build</h3>
                         <p><strong>CPU:</strong> ${cpu}</p>
                         <p><strong>GPU:</strong> ${gpu}</p>
                         <p><strong>RAM:</strong> 16GB DDR4</p>
                         <p><strong>Storage:</strong> 1TB SSD</p>`;
}
