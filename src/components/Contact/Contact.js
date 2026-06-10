"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      if (!contactEndpoint) {
        const subject = encodeURIComponent(
          `Portfolio message from ${form.name}`,
        );
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus({
          type: "success",
          message: "Opening your email app to send the message.",
        });
        return;
      }

      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: data.message || "Message sent successfully.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className={styles.section} id="contact">
      <SectionHeading eyebrow="Contact Me" title="Let's Keep In Touch" />
      <div className={styles.grid}>
        <div className={styles.info}>
          <p>
            Have a role, product idea, or backend challenge where reliability
            matters? Send the details and I will get back to you.
          </p>
          <a href={`mailto:${profile.email}`}>
            <Mail size={20} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
            <Phone size={20} />
            {profile.phone}
          </a>
          <span>
            <MapPin size={20} />
            {profile.location}
          </span>
        </div>
        <form className={styles.form} onSubmit={submitForm}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={updateField}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              required
              rows={6}
            />
          </label>
          {status.message ? (
            <p className={`${styles.status} ${styles[status.type]}`}>
              {status.message}
            </p>
          ) : null}
          <button type="submit" disabled={isSending}>
            <Send size={18} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
