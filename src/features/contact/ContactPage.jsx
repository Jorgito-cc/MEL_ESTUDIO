import React from 'react';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import './styles/contact.css';

export const ContactPage = () => {
  return (
    <section className="contacto">
      <div className="contacto__card">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
