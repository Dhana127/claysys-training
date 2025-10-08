const categoryForm = document.getElementById('add-category-form');
const categoryTableBody = document.getElementById('category-table-body');

function loadCategories() {
  const categories = JSON.parse(localStorage.getItem('categories') || '[]');
  categoryTableBody.innerHTML = '';

  categories.forEach((category, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${category}</td>
      <td>
        <button onclick="editCategory(${index})">Edit</button>
        <button onclick="deleteCategory(${index})">Delete</button>
      </td>
    `;
    categoryTableBody.appendChild(row);
  });
}

function deleteCategory(index) {
  const categories = JSON.parse(localStorage.getItem('categories') || '[]');
  categories.splice(index, 1);
  localStorage.setItem('categories', JSON.stringify(categories));
  loadCategories();
}

function editCategory(index) {
  const categories = JSON.parse(localStorage.getItem('categories') || '[]');
  const newName = prompt("Edit category name:", categories[index]);
  if (newName && newName.trim() !== '') {
    categories[index] = newName.trim();
    localStorage.setItem('categories', JSON.stringify(categories));
    loadCategories();
  }
}

categoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const categoryName = document.getElementById('category-name').value.trim();
  if (categoryName) {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categories.push(categoryName);
    localStorage.setItem('categories', JSON.stringify(categories));
    categoryForm.reset();
    loadCategories();
  }
});

window.onload = loadCategories;
