// Fetch and display servers
async function loadServers() {
  const res = await fetch('/api/servers');
  const data = await res.json();
  const serverList = document.getElementById('serverList');

  serverList.innerHTML = '';

  data.forEach(server => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><img src="${server.image_url}" alt="Tag" width="50" /></td>
      <td>${server.member_count}</td>
      <td>${server.server_name}</td>
      <td><a href="https://discord.gg/${server.invite_code}" target="_blank">Join</a></td>
      <td>${server.server_id}</td>
    `;

    serverList.appendChild(row);
  });
}

// Search filter
document.getElementById('searchInput').addEventListener('input', function (e) {
  const term = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#serverList tr');

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(term) ? '' : 'none';
  });
});

// Request Removal Popup
const popup = document.getElementById('removalPopup');
document.getElementById('removalLink').addEventListener('click', () => {
  popup.style.display = 'flex';
});
document.getElementById('closePopup').addEventListener('click', () => {
  popup.style.display = 'none';
});

// Submit Server Popup (NEXT)
document.getElementById('submitServerBtn').addEventListener('click', () => {
  alert('We’ll add a popup form here in the next step 🛠️');
});

// Load data when ready
window.onload = loadServers;
