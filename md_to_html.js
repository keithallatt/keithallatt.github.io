function addReadMe(document_id) {
    var converter = new showdown.Converter();
    let doc_element = document.getElementById(document_id);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/keithallatt/"+document_id+"/master/README.md");
    xhr.send();

    xhr.onload = function() {
      if (xhr.status == 200) {
          doc_element.innerHTML = converter.makeHtml(`${xhr.response}`);

          // replace `<img src="` with `<img src="https://github.com/kallatt/img file` type
          // thing in html to make images work.

          alert(doc_element.innerHTML);
      } else {
          doc_element.innerHTML = `Failed to load from ${readme_url}: Status code ${xhr.status}`;
      }
    };

    xhr.onerror = function() { // only triggers if the request couldn't be made at all
      alert(`Network Error`);
    };
}

const repo_array = ["auto-update-project", "CustomIDE", "logisim-cpu", "Logic", "GameTools"];
repo_array.forEach(element => addReadMe(element));
