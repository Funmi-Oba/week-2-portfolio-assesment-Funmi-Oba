const form = document.querySelector('form')


const handleSubmit = (event) => {
  event.preventDefault() // Prevent the default form submission behavior

  const firstName = document.querySelector('#firstName').value
const lastName = document.querySelector('#lastName').value
const email = document.querySelector('#email').value
const message = document.querySelector('#msg').value
const resultView = document.querySelector('#result-view')

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  }
 

  console.log(formData)
    resultView.innerHTML = 
    `
    <h3>Thanks for contacting us, kindly confirm your data below:</h3>
    <br/>
    <li> First Name: ${formData.firstName}</li>
    <li> Last Name: ${formData.lastName}</li>
      <li> Email Address: ${formData.email}</li>
      <li> Your Message: ${formData.message}</li>
      <br/>
      <p> We will sure review your message and get back to you as soon as possible via your email!</p>
  
    `
}
form.reset();
form.addEventListener('submit', handleSubmit);

