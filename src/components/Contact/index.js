import React from 'react'
import {ContactWrapper, ContactTitle, ContactSection, ContactText} from './ContactElements'

const Contact = () => {
    return (
        <ContactWrapper>
            <ContactTitle>Contacto</ContactTitle>
            <ContactSection>
                <ContactText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus ligula lectus, et sagittis ligula ultricies et
                </ContactText>
                <form>
                    <label for="first-names">Nombres:</label><br />
                    <input type="text" id="first-names" name="first-names"></input><br />
                    <label for="last-names">Apellidos:</label><br />
                    <input type="text" id="last-names" name="last-names"></input><br />
                    <label for="email">Correo:</label><br />
                    <input type="text" id="email" name="email"></input><br />
                    <label for="message">Mensaje:</label><br />
                    <input type="text" id="message" name="message"></input><br />
                </form>
            </ContactSection>
        </ContactWrapper>
    )
}

export default Contact
