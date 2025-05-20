function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  sidebar.classList.toggle('show');
  hamburger.classList.toggle('active');
}

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function navigate(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('hamburger').classList.remove('active');
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const planValue = parseInt(document.getElementById('planSelect').value);
  const months = parseInt(document.getElementById('monthsInput').value);
  const total = planValue * months;
  const output = `
    <strong>Číslo účtu:</strong> 1234567890/0100<br>
    <strong>Částka k zaplacení:</strong> ${total} Kč<br>
    <strong>Poznámka:</strong> Dík za prachy ale je to scam.🙂
  `;
  document.getElementById('paymentDetails').innerHTML = output;
});
