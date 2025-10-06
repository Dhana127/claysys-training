"use strict";
var backupBtn = document.getElementById('backup-btn');
var restoreBtn = document.getElementById('restore-btn');
var backupHistoryList = document.getElementById('backup-history');
function loadBackupHistory() {
    var history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
    backupHistoryList.innerHTML = '';
    history.forEach(function (entry, index) {
        var li = document.createElement('li');
        li.textContent = "Backup ".concat(index + 1, " - ").concat(entry.timestamp);
        backupHistoryList.appendChild(li);
    });
}
backupBtn.addEventListener('click', function () {
    var users = localStorage.getItem('users');
    var categories = localStorage.getItem('categories');
    var backup = {
        users: users,
        categories: categories,
        timestamp: new Date().toLocaleString()
    };
    var history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
    history.push(backup);
    localStorage.setItem('backupHistory', JSON.stringify(history));
    alert('Backup created successfully!');
    loadBackupHistory();
});
restoreBtn.addEventListener('click', function () {
    var history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
    if (history.length === 0) {
        alert('No backups available.');
        return;
    }
    var lastBackup = history[history.length - 1];
    localStorage.setItem('users', lastBackup.users);
    localStorage.setItem('categories', lastBackup.categories);
    alert('Data restored from last backup!');
    window.location.reload(); // Optional: refresh to reflect restored data
});
window.onload = loadBackupHistory;
