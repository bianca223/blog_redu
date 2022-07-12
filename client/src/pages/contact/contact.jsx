import './contact.css';

export default function Contact(){
  return (
    <div className='contact'>
      <div className='contactTitle'>
        Contact Us
      </div>
      <form className='contactForm'>
        <label>Nume</label>
        <input className="contactInput" type='text' placeholder='Enter your name...' />
        <label>Email</label>
        <input className="contactInput" type='text' placeholder='Enter your email...' />
        <label>Cu ce te putem ajuta?</label>
        <textarea placeholder='Tell your story...' type="text" className='contactInput contactTextarea'></textarea>
        <button className='contactButton'>Trimite</button>
      </form>
    </div>
  );
}