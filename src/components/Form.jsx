export default function Form() {
    return (
        <section id="contact_form">
            <h1>CONTACT FORM</h1>
            <form>
                <input name='name' type="text" placeholder='Name' />
                <input name='email' type="email" placeholder='Email' />
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type message'></textarea>
                <button>Send</button>
            </form>
        </section>
    )
}