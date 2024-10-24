function generateResume() {
  document.getElementById('resume-name').textContent = document.getElementById('name').value;
  document.getElementById('resume-email').textContent = document.getElementById('email').value;
  document.getElementById('resume-phone').textContent = document.getElementById('phone').value;
  document.getElementById('resume-summary').textContent = document.getElementById('summary').value;
  document.getElementById('resume-experience').textContent = document.getElementById('experience').value;
  document.getElementById('resume-education').textContent = document.getElementById('education').value;
  document.getElementById('resume-skills').textContent = document.getElementById('skills').value;
}