const categories = Array.from(jCategory);

const displayItems = (items) => {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";

  items.forEach((item) => {
    const { index, image, title, rate, av } = item;
    const jList = document.createElement("div");
    jList.className = "jlist";
    jList.innerHTML = `
          <img src="${image}" />
          <h3>${title}</h3>
          <p>${rate}</p>
          <span class="key">${av}</span>
        `;
        rootElement.appendChild(jList);

        // when click on any jobs then open new file 
        jList.addEventListener('click', ()=>{
            window.location.href=`job-details.html?id=${index}`;
        })
  });
};
displayItems(categories);

const input = document.getElementById('searchBar');

input.addEventListener('input' , ()=>{
    const query = input.value.trim().toUpperCase();

    const filterData = categories.filter((item) =>
    item.title.toUpperCase().includes(query)
    );
    displayItems(filterData);
});