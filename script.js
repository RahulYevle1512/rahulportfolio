document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Pretending to send message via AWS Lambda...";
      status.className = "form-status";

      // Demo only: simulate API call.
      setTimeout(() => {
        status.textContent =
          "Message sent successfully (demo). In a real setup this would call an AWS Lambda endpoint.";
        status.className = "form-status success";
        form.reset();
      }, 900);
    });
  }
});

