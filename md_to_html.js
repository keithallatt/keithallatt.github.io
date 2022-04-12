function addReadMe(readme_url, document_id) {
    var converter = new showdown.Converter();
    let autocompleteReadme = document.getElementById(document_id);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/keithallatt/"+readme_url+"/master/README.md");
    xhr.send();

    xhr.onload = function() {
      if (xhr.status == 200) {
          autocompleteReadme.innerHTML = converter.makeHtml(`${xhr.response}`);
      } else {
          autocompleteReadme.innerHTML = `Failed to load from ${readme_url}: Status code ${xhr.status}`;
      }

    };

    xhr.onerror = function() { // only triggers if the request couldn't be made at all
      alert(`Network Error`);
    };
}

addReadMe("auto-update-project", "autocomplete");
addReadMe("CustomIDE", "customide");