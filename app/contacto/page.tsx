"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:johannyantoniorodriguezgmai@gmail.com?subject=Contacto%20de%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Tu correo electrónico"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Escribe tu mensaje aquí"
          />
        </div>
        <Button type="submit" className="w-full">
          Enviar mensaje
        </Button>
      </form>
    </div>
  );
}
