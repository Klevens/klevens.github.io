const text = document.getElementById("dynamicH1")

let str = ["Fiera", "Mastodonte", "Eminencia"]

const speed = 120;
const waitTime = 2000;
let i = 0;
let x = 0;

const typeWriter = () => {
    console.log(str[x])
    if ( i < str[x]?.length) {
        text.innerHTML += str[x].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else if ((text.innerHTML.length === str[x]?.length) && (x <= str.length)) {
        x++;
        i=0;
        setTimeout(()=>{
          text.innerHTML = ""  
          typeWriter()
        }, waitTime);
      } else if (str[x] === undefined) {
        i = 0;
        x = 0;
        typeWriter()
      }
    console.log(text.innerHTML)
};


setTimeout(typeWriter, speed);



