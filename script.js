// script.js

document.addEventListener('DOMContentLoaded', function () {

  // Set current year in footer

  const y = document.getElementById('year');

  if (y) y.textContent = new Date().getFullYear();

  // Mobile navigation toggle

  const navToggle = document.getElementById('nav-toggle');

  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {

    navToggle.addEventListener('click', function () {

      const expanded = this.getAttribute('aria-expanded') === 'true';

      this.setAttribute('aria-expanded', !expanded);

      navList.classList.toggle('show');

    });

  }

  // Simple contact form handling (demo only)

  const form = document.getElementById('contact-form');

  const msg = document.getElementById('form-msg');

  if (form) {

    form.addEventListener('submit', function (e) {

      e.preventDefault();

      const name = form.name.value.trim();

      const email = form.email.value.trim();

      const message = form.message.value.trim();

      if (!name || !email || !message) {

        msg.textContent = '⚠️ Please fill all fields before sending.';

        msg.style.color = 'red';

        return;

      }

      const emailRegex = /^\S+@\S+\.\S+$/;

      if (!emailRegex.test(email)) {

        msg.textContent = '⚠️ Please provide a valid email address.';

        msg.style.color = 'red';

        return;

      }

      msg.textContent = `✅ Thanks ${name.split(' ')[0] || name}! Your message is ready to send (demo only).`;

      msg.style.color = 'green';

      form.reset();

    });

  }

  // Smooth scrolling for navigation links

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {

    a.addEventListener('click', function (e) {

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {

        e.preventDefault();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }

    });

  });

});