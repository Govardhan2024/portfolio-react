import  './Contact.css'
import mail_icon from '../../assets/Images/mail_icon.svg'
import location_icon from '../../assets/Images/location_icon.svg'
import call_icon from '../../assets/Images/call_icon.svg'
const Contact = () => {
  return (
    <div className='Contact'>
        <div className='letstalk'>
            <h1>Lets Talk</h1>
            <p>i am currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className='contact-details'>
                 <div className='contact-detail'>
                   <img src={mail_icon}  alt=''/> <p>reddygovardhan@gmail.com</p>
               </div>
               <div className='contact-detail'>
               <img src={call_icon} alt=''/><p>15377652782</p>
              </div>
              <div className='contact-detail'>
              <img src={location_icon} alt=''/><p>Hyderabad</p>
              </div>
            </div>
            </div>
            <div>
         <form className='contact-right'>
          <label htmlFor=''> Your name</label>
          <input type='text' placeholder='Enter your name' name='name'/>
          <label htmlFor=''>Your Email</label>
          <input type='text' placeholder='Enter your Email' name='Email'/>
          <label htmlFor=''> Write Your meassage</label>
          <textarea name='meassege' rows="8" placeholder='Enter Your meassege'></textarea>
          <button type='submit' className='btn-4'>Submit Now</button>
         </form>
         </div>

        </div>
            
  )
}

export default Contact
