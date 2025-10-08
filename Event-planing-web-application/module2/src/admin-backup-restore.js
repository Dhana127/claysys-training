const backupBtn = document.getElementById('backup-btn');
const restoreBtn = document.getElementById('restore-btn');
const backupHistoryList = document.getElementById('backup-history');

function loadBackupHistory() {
  const history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
  backupHistoryList.innerHTML = '';

  history.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `Backup ${index + 1} - ${entry.timestamp}`;
    backupHistoryList.appendChild(li);
  });
}

backupBtn.addEventListener('click', () => {
  const users = localStorage.getItem('users');
  const categories = localStorage.getItem('categories');

  const backup = {
    users,
    categories,
    timestamp: new Date().toLocaleString()
  };

  const history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
  history.push(backup);
  localStorage.setItem('backupHistory', JSON.stringify(history));

  alert('Backup created successfully!');
  loadBackupHistory();
});

restoreBtn.addEventListener('click', () => {
  const history = JSON.parse(localStorage.getItem('backupHistory') || '[]');
  if (history.length === 0) {
    alert('No backups available.');
    return;
  }

  const lastBackup = history[history.length - 1];
  localStorage.setItem('users', lastBackup.users);
  localStorage.setItem('categories', lastBackup.categories);

  alert('Data restored from last backup!');
  window.location.reload(); // Optional: refresh to reflect restored data
});

window.onload = loadBackupHistory;
