export default function Form() {
    return (
        <section id="contact_form">
            <h1>CONTACT FORM</h1>
            <form>
                <input name='name' type="text" placeholder='Giorgi Kartsivadze' />
                <input name='email' type="email" placeholder='email@mail.com' />
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type message'></textarea>
            </form>
        </section>
    )
}