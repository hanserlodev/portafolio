'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import SocialLinks from '@/components/SocialLinks';
import { personalInfo } from '@/data/personal';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Verifica si las credenciales de EmailJS están configuradas
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Envío real con EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_email: personalInfo.email,
          },
          publicKey
        );
      } else {
        // Simulación de envío si no hay credenciales configuradas
        console.warn('⚠️ EmailJS no configurado. Configura las variables de entorno en .env.local');
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds con cleanup
      const timeoutId = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timeoutId);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? `Error: ${err.message}` 
        : 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
      setError(errorMessage);
      console.error('Error sending email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="¿Tienes un proyecto en mente? ¡Hablemos!">
          Contacto
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Trabajemos juntos
              </h3>
              <p className="text-muted-foreground mb-6">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente
                para tomar un café virtual. No dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sígueme en redes</h4>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-secondary p-8 rounded-xl"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={20} />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              {isSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                  <p className="text-green-500 text-sm">
                    ¡Gracias por tu mensaje! Te responderé pronto.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
