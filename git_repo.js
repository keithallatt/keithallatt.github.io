function addDotGit(string) {
  return string + ".git";
}

const repoNames = ["CustomIDE", "LaTeXWorkSheets", "Logic", "JavaTeX", "auto-update-project"];
const words = repoNames.map(addDotGit);

let i = 0;
let counter;
let keyHitDelay = 75;
let keyDeleteDelay = 40;
let swapHoldDelay = 1000;
let swapBackDelay = 500;
function typeNow() {
   let word = words[i].split("");
   var loopTyping = function() {
      if (word.length > 0) {
         document.getElementById('text').innerHTML += word.shift();
      } else {
         // deleteNow();
         counter = setTimeout(deleteNow, swapHoldDelay);

         return false;
      };
      counter = setTimeout(loopTyping, keyHitDelay);
   };
   loopTyping();
};
function deleteNow() {
   let word = words[i].split("");
   var loopDeleting = function() {
      if (word.length > 0) {
         word.pop();
         document.getElementById('text').innerHTML = word.join("");
      } else {
         if (words.length > (i + 1)) {
            i++;
         }
         else {
            i = 0;
         };
         counter = setTimeout(typeNow, swapBackDelay);
         return false;
      };
      counter = setTimeout(loopDeleting, keyDeleteDelay);
   };
   loopDeleting();
};
typeNow();