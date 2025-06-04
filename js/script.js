document.addEventListener('DOMContentLoaded', () => {
  // Email form validation
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.querySelector('.error-message');

  if (emailForm && emailInput && errorMessage) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('error');
      } else {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
        // Here you would typically send the form data to a server
        console.log('Form submitted with email:', email);
      }
    });
  }

  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
          item.hidden = true;
          item.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current answer
      answer.hidden = !answer.hidden;
      question.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Add smooth scrolling for email form links
  document.querySelectorAll('a[href="#email-form"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Optional: Add intersection observer for animation effects
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe feature cards and trending items for animation
  document.querySelectorAll('.feature-card, .trending-item').forEach(item => {
    observer.observe(item);
  });
});
