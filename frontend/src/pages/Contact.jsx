import React from "react";
import "../pages/Contact.css";
import { useRef } from "react";
// import emailjs from "@emailjs/browser"; 

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     // console.log("click");

//     emailjs
//       .sendForm(
//         "service_u2oef3r",
//         "template_ko7u6sk",
//         form.current,
//         "TVb-37yGkP9W0p6-w"
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="contact_section">
//             <div className="contact_info">
//               <span>Information</span>
//               <h2>Contact Us</h2>
//               <p>
//                 As you might expect of a company that began as a high-end
//                 interiors contractor, we pay strict attention.
//               </p>
//             </div>

//             <div className="contact_address">
//               <h3>Bangalore</h3>
//               <p>1/268, Parker Square, Avenue</p>
//               <p>+91 7010707230</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="contact_form">
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="row">
//                 <div className="col-md-6">
//                   <input type="text" name="user_name" placeholder="Name" />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="email" name="user_email" placeholder="Email" />
//                 </div>
//                 <div className="col-md-12">
//                   <textarea name="message" placeholder="Message"></textarea>
//                   <button type="submit" className="msg_btm">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us at contact@example.com.</p>
    </div>
  );
}

export default Contact;

