const textarea = document.getElementById("message");
const btn = document.getElementById("submit");
const wordsCont = document.getElementById("words");

const countWords = () => {
  let words = textarea.value;
  let trimmed = words.replace(/\$+/g, " ").trim();
  let nwords = trimmed.split(" ");
  let wordsLength = nwords.length;
  wordsCont.innerHTML = wordsLength;
};
const resetTextarea = () => {
  textarea.value = "";
  wordsCont.innerHTML = 0;
};
btn.addEventListener("click", resetTextarea);
textarea.addEventListener("keyup", countWords);
