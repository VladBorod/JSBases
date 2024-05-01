'use strict';

const replyButtons = document.querySelectorAll('.reply-button');

replyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const comment = button.closest('.comment');
    const replyForm = comment.querySelector('.reply-form');

    const allReplyForms = document.querySelectorAll('.reply-form');
    allReplyForms.forEach((form) => {
      if (form !== replyForm) {
        form.style.display = 'none';
      }
    });

    replyForm.style.display = 'block';
  });
});