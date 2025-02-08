const layouts = {
  ISO_SWE_FIN: {
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
    T: "T",
    Y: "Y",
    U: "U",
    I: "I",
    O: "O",
    P: "P",
    Å: "Å",
    A: "A",
    S: "S",
    D: "D",
    F: "F",
    G: "G",
    H: "H",
    J: "J",
    K: "K",
    L: "L",
    Ö: "Ö",
    Ä: "Ä",
    Z: "Z",
    X: "X",
    C: "C",
    V: "V",
    B: "B",
    N: "N",
    M: "M",
    DOT: ".",
  },
  ANSI_NORDICS: {
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
    T: "T",
    Y: "Y",
    U: "U",
    I: "I",
    O: "O",
    P: "P",
    Å: "Å",
    A: "A",
    S: "S",
    D: "D",
    F: "F",
    G: "G",
    H: "H",
    J: "J",
    K: "K",
    L: "L",
    Ö: "Ö",
    Ä: "Ä",
    Z: "Z",
    X: "X",
    C: "C",
    V: "V",
    B: "B",
    N: "N",
    M: "M",
    DOT: ".",
  },
};

const layoutSelect = document.getElementById("layoutSelect");
const typingArea = document.getElementById("typingArea");

layoutSelect.addEventListener("change", updateLayout);

function updateLayout() {
 const selectedLayout = layoutSelect.value;
  const layout = layouts[selectedLayout];
  createKeyboard(layout);
  typingArea.value = ""; // Clear the typing area
  typingArea.focus();
}  
  typingArea.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const layout = layouts[layoutSelect.value];
  if (layout.hasOwnProperty(key)) {
    event.preventDefault();
    typingArea.value += layout[key];
    // Optionally, find the associated key element and add the "pressed" class
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.add("pressed");
    }
  }
});

typingArea.addEventListener("keyup", (event) => {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.remove("pressed");
  }
});


// Previous JavaScript remains the same

function createKeyboard(layout) {
  const keyboardDiv = document.getElementById("keyboard");
  keyboardDiv.innerHTML = ""; // Clear existing keyboard

  for (const key in layout) {
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    keyDiv.textContent = layout[key];
    keyboardDiv.appendChild(keyDiv);

    keyDiv.addEventListener("mousedown", () => {
      keyDiv.classList.add("pressed");
    });

    keyDiv.addEventListener("mouseup", () => {
      keyDiv.classList.remove("pressed");
    });
    keyDiv.addEventListener("keydown", () => {
      keyDiv.classList.add("pressed");
    });

    keyDiv.addEventListener("keyup", () => {
      keyDiv.classList.remove("pressed");
    });
  }
}

layoutSelect.addEventListener("change", updateLayout);


