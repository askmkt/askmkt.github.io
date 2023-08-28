import { useState } from "react";

interface ContactFormProps {
  onSubmit: (
    event: React.FormEvent,
    sendEmail: () => Promise<boolean>
  ) => Promise<void>;
}

const ContactForm: React.ComponentType<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function sendEmail(): Promise<boolean> {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      return false;
    } else {
      setName("");
      setEmail("");
      setMessage("");
      return true;
    }
  }

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={(e) => {
        onSubmit(e, sendEmail);
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="How may we call you?"
        className="w-full px-5 py-2.5 rounded-lg bg-zinc-700 text-white placeholder:text-zinc-400"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="What is your email?"
        className="w-full px-5 py-2.5 rounded-lg bg-zinc-700 text-white placeholder:text-zinc-400"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        placeholder="Write your message here."
        className="w-full px-5 py-2.5 rounded-lg bg-zinc-700 text-white placeholder:text-zinc-400"
      />
      <input
        type="submit"
        value="Send Now"
        className="px-8 py-3 rounded-lg bg-blue-500 lg:hover:bg-blue-400 font-medium text-lg"
      />
    </form>
  );
};

export default ContactForm;
