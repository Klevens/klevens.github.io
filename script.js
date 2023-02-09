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

// Formspreee controlador

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        status.className = "success";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
          status.className = "error";
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.className = "error";
    });
}
form.addEventListener("submit", handleSubmit);
