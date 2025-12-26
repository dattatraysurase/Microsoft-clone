const Frequently_asked_questions_item = document.querySelectorAll('.Frequently-asked-questions-item');
const expandAllBtn = document.getElementById('expandAll');
const collapseAllBtn = document.getElementById('collapseAll');

Frequently_asked_questions_item.forEach(item => {
  item.querySelector('.Frequently-asked-question').addEventListener('click', () => {
    item.classList.toggle('active');
    
  });
});


expandAllBtn.addEventListener('click', () => {
  Frequently_asked_questions_item.forEach(item => item.classList.add('active'));
});

collapseAllBtn.addEventListener('click', () => {
  Frequently_asked_questions_item.forEach(item => item.classList.remove('active'));
});

