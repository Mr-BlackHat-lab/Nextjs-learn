'use client';
import "@/styles/contact.css";

export default function Contact() {

   async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "dc6d3120-f2d5-402c-99a1-89076cfc7066");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
             
                alert("Thanks for contacting us! We will get back to you soon.");
                event.target.reset();

          }
      }
  return (
    <main className="page-container">
    <div>
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        Have any questions, feedback, or ideas? Fill out the form below and we’ll get back to you.
      </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <textarea name="message"></textarea>
          <button type="submit">Submit Form</button>
        </form>
        </div>
    </main>
  );
}
