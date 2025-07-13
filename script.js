
 document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const ref = document.getElementById("ref").value;
      const adresse = document.getElementById("adresse").value;

      alert(`Thank you ${nom} !\nWe have successfully received your order.\nEmail : ${email}\nRf : ${ref}\nAdresse : ${adresse}`);
      console.log("Nom :", nom);
      console.log("Email :", email);
      console.log("Ref :", ref);
      console.log("Adresse :", adresse);
    });
  }


  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const dob = document.getElementById("dob").value;

      if (!dob) {
        alert("Veuillez entrer votre date de naissance.");
        return;
      }

      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      alert(`thank you ${name}, your registration has been recieved !\nEmail : ${email}\nAge : ${age} old`);
      console.log("Nom :", name);
      console.log("Email :", email);
      console.log("Date of birth :", dob);
      console.log("Age :", age);
    });
  }
});
