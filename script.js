//H1 que tiene el texto que buscamos que cambie
const text = document.getElementById("dynamicH1");

// H1 que conitiene el pipe que parpadea
const rayita = document.getElementById("rayita");

let str = ["Ingeniero en Sistemas", "Full Stack Developer"];

const speed = 120;
const eraseSpeed = 80;
const waitTime = 2000;
let i = 0;
let x = 0;

const removeTypeWriter = (str) => {
  let nstr = str;
  let result = "";
  if (str?.length) {
    result = nstr.slice(0, -1);
    text.innerHTML = result;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(removeTypeWriter(result));
      }, eraseSpeed);
    });
  }
  return "Esta es una bombaa";
};

const typeWriter = () => {
  if (i < str[x]?.length) {
    text.innerHTML += str[x].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (text.innerHTML.length === str[x]?.length && x <= str.length) {
    x++;
    i = 0;
    rayita.classList.add("parpadea");
    setTimeout(async () => {
      rayita.classList.remove("parpadea");
      let kelvin = await removeTypeWriter(text.innerHTML);
      typeWriter();
    }, waitTime);
  } else if (str[x] === undefined) {
    i = 0;
    x = 0;
    typeWriter();
  }
 
};

setTimeout(typeWriter, speed);
