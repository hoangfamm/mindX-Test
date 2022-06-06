const chooseBackground = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    document.getElementById("hex").innerHTML = "#" + randomColor;
    document.querySelector("body").style.background = "#" + randomColor;
  };
  
  btn.addEventListener("click", chooseBackground);
  
  const chooseGradient = () => {
    document.querySelector("body").style.background =
      "linear-gradient(to right," + color1.value + "," + color2.value + ")";
      css.textContent = body.style.background + ";"
  };
  
  document.getElementById("color1").addEventListener("input", chooseGradient)
  document.getElementById("color2").addEventListener("input", chooseGradient)