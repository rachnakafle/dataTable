const tableData = () => {
  const searchData = [];
  const tableEl = document.getElementById("basic");
  Array.from(tableEl.children[1].children).forEach((_bodyRowEl) => {
    searchData.push(
      Array.from(_bodyRowEl.children).map((_cellEl) => {
        return _cellEl.innerHTML;
      })
    );
  });
  return searchData;
}

const createSearchInputElement = () => {
  const el = document.createElement("input");
  el.classList.add("input");
  el.id = "input";
  return el;
};

const search = (arr, searchTerm) => {
  if(!searchTerm) return arr;
  return arr.filter(_row => {
    return _row.find(_item => _item.toLowerCase().includes(searchTerm.toLowerCase()))
  });
}

const init = () => {
  document.getElementById("input").appendChild(createSearchInputElement());

  const initialTData = tableData();

  const searchInput = document.getElementById("input");
  searchInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    // tableData();
    console.log(search(initialTData, e.target.value));
  });
};

init();
