/**
 * Putting this in its own file because I'm ashamed of it. Incredible that there's
 * not a better way to do this in 2022. You might think you can do this with
 * navigator.clipboard.writeText but as far as I can tell that does not copy 
 * tables, only plain text strings. Maybe eventually I'll find a way to do it with
 * that API though.
 */
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