// TO CREATE A SEARCH INPUT ELEMENT
const createSearchInputElement = () => {
  const el = document.createElement("input");
  el.classList.add("input");
  el.id = "input";
  return el;
};

const search = (arr, searchTerm) => {
  if (!searchTerm) return arr;
  return arr.filter((_row) => {
    return _row.find((_item) =>
      _item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

const tableData = () => {
  const searchData = [];
  const tableEl = document.getElementById("basic_table");
  Array.from(tableEl.children[1].children).forEach((_bodyRowEl) => {
    searchData.push(
      Array.from(_bodyRowEl.children).map((_cellEl) => {
        return _cellEl.innerHTML;
      })
    );
  });
  return searchData;
};

const refreshTable = (data) => {
  const tableBody = document.getElementById("basic_table").children[1];
  tableBody.innerHTML = "";

  data.forEach((_row) => {
    const curRow = document.createElement("tr");
    _row.forEach((_dataItem) => {
      const curCell = document.createElement("td");
      curCell.innerText = _dataItem;
      curRow.appendChild(curCell);
    });
    tableBody.appendChild(curRow);
  });
};

const init = () => {
  document.getElementById("input").appendChild(createSearchInputElement());

  const initialTData = tableData();

  const searchInput = document.getElementById("input");
  searchInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    // tableData();
    console.log(search(initialTData, e.target.value));
    refreshTable(search(initialTData, e.target.value));
  });
};

init();

// document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
//   const table = th.closest('table');
//   const tbody = table.querySelector('tbody');
//   Array.from(tbody.querySelectorAll('tr'))
//     .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//     .forEach(tr => tbody.appendChild(tr) );

const sortTable = () => {
  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const table = th.closest("table");
      const tbody = table.querySelector("tbody");
      Array.from(tbody.querySelectorAll("tr"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );

  console.log("Helloooo");
};



