// Select all read-more buttons
const buttons = document.querySelectorAll('.read-more');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.article');  // find the article div
    const fullText = article.querySelector('.full-text');

    // Toggle visibility
    fullText.classList.toggle('hidden');

    // Change button text
    if (fullText.classList.contains('hidden')) {
      button.textContent = 'read_more';
    } else {
      button.textContent = 'show_less';
    }
  });
});
