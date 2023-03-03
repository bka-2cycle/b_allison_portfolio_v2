import React from 'react'



const ContactForm = () => {

  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

  return (
    
      
      <div className="oatmeal"><br></br><br></br>
      <span className="sugar">Reach Out</span><br></br>
      <span className="quote">'Great things start with a conversation.'</span><p></p>
      <p className="contact">Located in the Los Angeles area and currently open to
      full-time opportunities<br></br>both remote and on-site for development or design work.<br></br></p>
      <p className="info"> <span className="reach"> I can be reached via cell or email:</span><br></br>
      Brian Allison<br></br>
      818-326-9899<br></br>
      <Mailto email="brian.keith.allison@gmail.com" subject="Design and/or Develop" body="Hello Brian,">
    Shoot me an email
  </Mailto>
</p><div><p>&nbsp;</p></div>
     </div>
    
  );
};






//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }
//   return (
//     <div className="container mt-5">
//       <span className="eggs">Reach Out</span>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )
// }
export default ContactForm