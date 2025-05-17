function loadGradient() {
  var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ["#380036", "#0CBABA"],
          ["#0D324D", "#7F5A83"],
          ["#2A5470", "#4C4177"],
        ],
      },
    },
  });
}

window.addEventListener("load", loadGradient);
