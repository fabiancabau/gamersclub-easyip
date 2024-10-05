// content.js

(function () {
  const targetUrl = "https://gamersclub.com.br/api/lobby/match";
  let infoDiv;
  let ip = null;
  const copyIconSvg = `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#FFFFFF' opacity='0'/><g transform="matrix(1.43 0 0 1.43 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" translate(-8, -8)" d="M 7.5 1 C 6.871094 1 6.429688 1.445313 6.210938 2 L 3.5 2 C 2.675781 2 2 2.675781 2 3.5 L 2 12.5 C 2 13.324219 2.675781 14 3.5 14 L 6 14 L 6 13 L 3.5 13 C 3.21875 13 3 12.78125 3 12.5 L 3 3.5 C 3 3.21875 3.21875 3 3.5 3 L 5 3 L 5 5 L 10 5 L 10 3 L 11.5 3 C 11.78125 3 12 3.21875 12 3.5 L 12 7 L 13 7 L 13 3.5 C 13 2.675781 12.324219 2 11.5 2 L 8.789063 2 C 8.570313 1.445313 8.128906 1 7.5 1 Z M 7.5 2 C 7.78125 2 8 2.21875 8 2.5 L 8 3 L 9 3 L 9 4 L 6 4 L 6 3 L 7 3 L 7 2.5 C 7 2.21875 7.21875 2 7.5 2 Z M 7.5 8 C 7.222656 8 7 8.222656 7 8.5 C 7 8.777344 7.222656 9 7.5 9 C 7.777344 9 8 8.777344 8 8.5 C 8 8.222656 7.777344 8 7.5 8 Z M 9.5 8 C 9.222656 8 9 8.222656 9 8.5 C 9 8.777344 9.222656 9 9.5 9 C 9.777344 9 10 8.777344 10 8.5 C 10 8.222656 9.777344 8 9.5 8 Z M 11.5 8 C 11.222656 8 11 8.222656 11 8.5 C 11 8.777344 11.222656 9 11.5 9 C 11.777344 9 12 8.777344 12 8.5 C 12 8.222656 11.777344 8 11.5 8 Z M 13.5 8 C 13.222656 8 13 8.222656 13 8.5 C 13 8.777344 13.222656 9 13.5 9 C 13.777344 9 14 8.777344 14 8.5 C 14 8.222656 13.777344 8 13.5 8 Z M 7.5 10 C 7.222656 10 7 10.222656 7 10.5 C 7 10.777344 7.222656 11 7.5 11 C 7.777344 11 8 10.777344 8 10.5 C 8 10.222656 7.777344 10 7.5 10 Z M 13.5 10 C 13.222656 10 13 10.222656 13 10.5 C 13 10.777344 13.222656 11 13.5 11 C 13.777344 11 14 10.777344 14 10.5 C 14 10.222656 13.777344 10 13.5 10 Z M 7.5 12 C 7.222656 12 7 12.222656 7 12.5 C 7 12.777344 7.222656 13 7.5 13 C 7.777344 13 8 12.777344 8 12.5 C 8 12.222656 7.777344 12 7.5 12 Z M 13.5 12 C 13.222656 12 13 12.222656 13 12.5 C 13 12.777344 13.222656 13 13.5 13 C 13.777344 13 14 12.777344 14 12.5 C 14 12.222656 13.777344 12 13.5 12 Z M 7.5 14 C 7.222656 14 7 14.222656 7 14.5 C 7 14.777344 7.222656 15 7.5 15 C 7.777344 15 8 14.777344 8 14.5 C 8 14.222656 7.777344 14 7.5 14 Z M 9.5 14 C 9.222656 14 9 14.222656 9 14.5 C 9 14.777344 9.222656 15 9.5 15 C 9.777344 15 10 14.777344 10 14.5 C 10 14.222656 9.777344 14 9.5 14 Z M 11.5 14 C 11.222656 14 11 14.222656 11 14.5 C 11 14.777344 11.222656 15 11.5 15 C 11.777344 15 12 14.777344 12 14.5 C 12 14.222656 11.777344 14 11.5 14 Z M 13.5 14 C 13.222656 14 13 14.222656 13 14.5 C 13 14.777344 13.222656 15 13.5 15 C 13.777344 15 14 14.777344 14 14.5 C 14 14.222656 13.777344 14 13.5 14 Z" stroke-linecap="round" /></g></svg>`;
  const checkmarkIconSvg = `<svg id='Checkmark_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#FFFFFF' opacity='0'/><g transform="matrix(1.09 0 0 1.09 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" translate(-12.5, -12.35)" d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" stroke-linecap="round" /></g></svg>`;

  setInterval(() => {

    if (ip == null) {
      fetch(targetUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.data != null) {
            if (data.data.step == "onServerReady") {
              ip = `connect ${data.data.ip}; password ${data.data.password}`;
              displayInfo(ip);
            } else if (data.data.step == "onMapVeto") {
              displayInfo("Aguardando Veto");
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, 3000);

  function displayInfo(data) {
    if (!infoDiv) {
      infoDiv = document.createElement("div");
      infoDiv.style.position = "fixed";
      infoDiv.style.bottom = "20px";
      infoDiv.style.right = "20px";
      infoDiv.style.backgroundColor = "rgb(80,80,80)";
      infoDiv.style.color = "#ecf0f1";
      infoDiv.style.padding = "14px";
      infoDiv.style.borderRadius = "2px";
      infoDiv.style.zIndex = "10000";
      infoDiv.style.fontSize = "14px";
      infoDiv.style.maxWidth = "300px";
      infoDiv.style.wordBreak = "break-word";
      infoDiv.style.fontFamily = "Archivo, sans-serif";
      infoDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      infoDiv.style.display = "flex";
      infoDiv.style.flexDirection = "column";
      infoDiv.style.alignItems = "flex-start";

      document.body.appendChild(infoDiv);
    }

    // Clear previous content
    infoDiv.innerHTML = "";

    const title = document.createElement("strong");
    title.textContent = data.startsWith("connect") ? "IP do Server" : "Status";
    title.style.marginBottom = "10px";
    infoDiv.appendChild(title);

    const pre = document.createElement("pre");
    pre.textContent = data;
    pre.style.marginBottom = "15px";
    pre.style.whiteSpace = "pre-wrap";
    infoDiv.appendChild(pre);

    if (data.startsWith("connect")) {
      const copyButton = document.createElement("button");
      // add an svg icon to the button
      const icon = document.createElement("span");
      icon.style.display = "inline-block";
      icon.style.width = "24px";
      icon.style.height = "24px";
      icon.style.marginRight = "10px";
      icon.style.fill = "#fff";

      icon.innerHTML = copyIconSvg;

      copyButton.textContent = "Copiar IP";
      copyButton.style.padding = "8px";
      copyButton.style.fontSize = "22px";
      copyButton.style.height = "40px";
      copyButton.style.cursor = "pointer";
      copyButton.style.border = "none";
      copyButton.style.borderRadius = "2px";
      copyButton.style.backgroundColor = "rgb(25, 90, 255)";
      copyButton.style.color = "#fff";
      copyButton.style.alignSelf = "center";
      copyButton.style.fontFamily = "Teko";
      copyButton.style.fontWeight = "400";
      copyButton.style.textTransform = "uppercase";
      copyButton.style.display = "flex";
      copyButton.style.alignItems = "center";

      copyButton.prepend(icon);

      copyButton.addEventListener("click", () => {
        navigator.clipboard
          .writeText(data)
          .then(() => {
            copyButton.textContent = "Copiado!";
            copyButton.style.backgroundColor = "green";

            // Change icon to a checkmark
            icon.innerHTML = checkmarkIconSvg;

            // append the new icon
            copyButton.prepend(icon);

            setTimeout(() => {
              copyButton.textContent = "Copiar IP";
              copyButton.style.backgroundColor = "rgb(25, 90, 255)";

              // Reset the icon back to the original
              icon.innerHTML = copyIconSvg;
            }, 4000);
          })
          .catch((err) => {
            console.error("Erro ao copiar: ", err);
          });
      });

      infoDiv.appendChild(copyButton);
    }
  }
})();
