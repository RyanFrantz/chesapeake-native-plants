const  filterInput = document.getElementById("filter");

console.log(filterInput);

filterInput.addEventListener("input", (e) => {
  const name = e.target.value;
  console.log(name);
  const articles = document.querySelectorAll("article");
  console.log(articles);
  articles.forEach((node) => {
    // Show the element. If it was previously hidden and the user backspaces to
    // refine broaden their filter, we want to re-show anything previously
    // hidden.
    node.hidden = false;
    // If the requested name doesn't match a data attribute, hide the element.
    const commonName = node.dataset.commonName;
    const latinName = node.dataset.latinName;
    if (!commonName.match(name) && !latinName.match(name)) {
      node.hidden = true;
    }
  });
});
