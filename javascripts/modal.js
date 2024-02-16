// Modal to display links to occurrences of a name in multiple files

// Comments and suggestions for improvment: p.d.mosses@tudelft.nl
// Thanks to https://github.com/maxdekrieger for helpful contributions

// TODO: Investigate a CSS-only modal (or add a no-js fallback)

// Transform the data-urls attribute of a button to a list item

// listItem("FILE#NAME line L1_C1, ..., Ln_Cn") =
// <li> FILE line 
//   <a href="FILE#NAME_L1_C1" class="modal-anchor">L1</a>
//   ...
//   <a href="FILE#NAME_Ln_Cn" class="modal-anchor">Ln</a>
// </li>
function listItem(string) {
  const file = string.split("#")[0];
  const name = string.split("#")[1].split(" ")[0];
  const lcs = string.split(" line ")[1].split(", ");

  const li = document.createElement("li");
  li.insertAdjacentText("beforeend", file + " line");
  for (const lc of lcs) {
    li.insertAdjacentText("beforeend", " ");
    const line = lc.split("_")[0];
    const column = lc.split("_")[1];
    const a = document.createElement("a");
    const href = document.createAttribute("href");
    href.value = file + "#" + name + "_" + line + "_" + column;
    a.setAttributeNode(href);
    const cl = document.createAttribute("class");
    cl.value = "modal-anchor";
    a.setAttributeNode(cl);
    li.appendChild(a);
    a.textContent = line;
  }

  return li;
}

// Get the modal elements
// A redundant outermost <div id="modal"> is ignored
const modal = document.getElementById("modal-content");
const h2    = document.getElementById("modal-h2");
const p     = document.getElementById("modal-p");
const ul    = document.getElementById("modal-ul");
const close = document.getElementById("modal-close");
// TODO: If any of them are null, the rest of this file should be skipped.

// Get the buttona that open the modal
const btns =  document.getElementsByClassName("modal-open");

// Opening the modal

// When the user clicks on any button, open the modal and set its elements
function btnClick(event) {
  const node = event.target.closest("button.modal-open");

  // Copy the button contents to a code element in the modal heading
  h2.replaceChildren();
  if (node.hasChildNodes()) {
    const code = document.createElement("code");
    const children = node.cloneNode(true).childNodes;
    for (const child of children) {
      code.appendChild(child);
    };
    h2.appendChild(code);
  }

  // Copy the title to the paragraph element
  p.textContent = `${node.title}:`;

  // Copy the data-urls to list items
  ul.replaceChildren();
  if (node) {
    const strings = node.dataset.urls.split("; ");
    for (const string of strings) {
      ul.appendChild(listItem(string));
    };
  }

  // When the user clicks on any link in the modal, close the modal
  const anchors = document.getElementsByClassName("modal-anchor");
  for (const anchor of anchors) {
    anchor.addEventListener("click", closeModal);
  }

  // Make the modal contents visible
  modal.style.display = "block";
}

for (const btn of btns) {
    btn.addEventListener("click", btnClick);
}

// Closing the modal

// When the user clicks on <span> (x), close the modal

function closeModal(event) {
  modal.style.display = "none";
  if (event.target.tagName === "A") {
    location = event.target.href;
  }
}

if (close) {
  close.addEventListener("click", closeModal);
}

// When the user clicks anywhere outside the modal, close it

function windowClick(event) {
  // Only close the modal when:
  // - it is currently open and
  // - the click is not aimed at a button that opens the modal and
  // - the click is outside the modal
  if (modal.style.display != "none"
      && event.target.closest("button.modal-open") == null
      && event.target.closest('#modal-content') == null) {
        closeModal(event);
  }
}

window.addEventListener("click", windowClick);
