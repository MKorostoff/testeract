//Putting this in its own file because I'm ashamed of it.
//Incredible that there's not a better way to do this in 2022.
export default function Copy() {
  let table = document.getElementById('table');
  let selection = window.getSelection();
  let range = document.createRange();
  range.selectNodeContents(table);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
}