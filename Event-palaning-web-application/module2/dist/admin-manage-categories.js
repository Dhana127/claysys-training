"use strict";
var categoryForm = document.getElementById('add-category-form');
var categoryTableBody = document.getElementById('category-table-body');
function loadCategories() {
    var categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categoryTableBody.innerHTML = '';
    categories.forEach(function (category, index) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(category, "</td>\n      <td>\n        <button onclick=\"editCategory(").concat(index, ")\">Edit</button>\n        <button onclick=\"deleteCategory(").concat(index, ")\">Delete</button>\n      </td>\n    ");
        categoryTableBody.appendChild(row);
    });
}
function deleteCategory(index) {
    var categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categories.splice(index, 1);
    localStorage.setItem('categories', JSON.stringify(categories));
    loadCategories();
}
function editCategory(index) {
    var categories = JSON.parse(localStorage.getItem('categories') || '[]');
    var newName = prompt("Edit category name:", categories[index]);
    if (newName && newName.trim() !== '') {
        categories[index] = newName.trim();
        localStorage.setItem('categories', JSON.stringify(categories));
        loadCategories();
    }
}
categoryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var categoryName = document.getElementById('category-name').value.trim();
    if (categoryName) {
        var categories = JSON.parse(localStorage.getItem('categories') || '[]');
        categories.push(categoryName);
        localStorage.setItem('categories', JSON.stringify(categories));
        categoryForm.reset();
        loadCategories();
    }
});
window.onload = loadCategories;
