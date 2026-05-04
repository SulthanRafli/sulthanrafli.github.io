import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Briefcase, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_ujqz3co';  
const EMAILJS_TEMPLATE_ID = 'template_ukhttah';
const EMAILJS_PUBLIC_KEY = 'VRL3TYRousB55V6cL';   

const YOUR_EMAIL = 'msulthanraflim@gmail.com';

export default function Contact({ lang }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const t = {
    title: { en: 'Get In Touch', id: 'Hubungi Saya' },
    subtitle: { 
      en: "Have a project in mind or want to discuss potential opportunities? I'm always open to talking about new and exciting projects.", 
      id: "Memiliki proyek atau ingin mendiskusikan peluang? Saya selalu terbuka untuk membicarakan proyek baru yang menarik." 
    },
    contactInfo: { en: 'Contact Information', id: 'Informasi Kontak' },
    name: { en: 'Name', id: 'Nama' },
    subject: { en: 'Subject', id: 'Subjek' },
    message: { en: 'Message', id: 'Pesan' },
    placeholders: {
      name: { en: 'Name', id: 'Nama' },
      subject: { en: 'Project Inquiry', id: 'Pertanyaan Proyek' },
      message: { en: 'Hello, I would like to talk about...', id: 'Halo, saya ingin membicarakan tentang...' }
    },
    status: {
      success: { en: "Message sent successfully! I'll get back to you soon.", id: "Pesan berhasil dikirim! Saya akan segera membalas." },
      errorDefault: { en: "Failed to send email. Please try again or contact me directly.", id: "Gagal mengirim email. Silakan coba lagi atau hubungi saya langsung." }
    },
    btn: {
      send: { en: 'Send Message', id: 'Kirim Pesan' },
      sending: { en: 'Sending...', id: 'Mengirim...' },
      sent: { en: 'Sent!', id: 'Terkirim!' }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMsg(error?.text || t.status.errorDefault[lang]);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto mb-20">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {t.title[lang]}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-rose-500 rounded-full origin-left mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[var(--fg-muted)] max-w-2xl mx-auto"
        >
          {t.subtitle[lang]}
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">{t.contactInfo[lang]}</h3>
            <div className="space-y-6">
              <a href={`mailto:${YOUR_EMAIL}`} className="flex items-center gap-4 text-[var(--fg-muted)] hover:text-rose-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-rose-500/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--fg)] mb-1">Email</p>
                  <p>{YOUR_EMAIL}</p>
                </div>
              </a>
              <a href="https://wa.me/6281908150522" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--fg-muted)] hover:text-rose-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-rose-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/Dom" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--fg)] mb-1">Phone</p>
                  <p>+62 819-0815-0522</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sulthan-rafli/" target='_blank' className="flex items-center gap-4 text-[var(--fg-muted)] hover:text-rose-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-rose-500/10 transition-colors">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--fg)] mb-1">LinkedIn</p>
                  <p>Sulthan Rafli</p>
                </div>
              </a>
              <a href="https://github.com/SulthanRafli" target='_blank' className="flex items-center gap-4 text-[var(--fg-muted)] hover:text-rose-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-rose-500/10 transition-colors">
                  <GitBranch size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--fg)] mb-1">GitHub</p>
                  <p>@sulthanrafli</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-[1.5]"
        >
          <form ref={formRef} className="glass-panel p-8 rounded-3xl space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.name[lang]}</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="mt-4 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-[var(--fg)]"
                  placeholder={t.placeholders.name[lang]}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="mt-4 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-[var(--fg)]"
                  placeholder="example@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.subject[lang]}</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-4 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-[var(--fg)]"
                placeholder={t.placeholders.subject[lang]}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.message[lang]}</label>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-4 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all resize-none text-[var(--fg)]"
                placeholder={t.placeholders.message[lang]}
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium"
              >
                <CheckCircle size={16} />
                {t.status.success[lang]}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium"
              >
                <AlertCircle size={16} />
                {errorMsg}
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-4 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors flex items-center justify-center gap-2 shine-effect cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  {t.btn.sending[lang]}
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : status === 'success' ? (
                <>
                  {t.btn.sent[lang]}
                  <CheckCircle size={18} />
                </>
              ) : (
                <>
                  {t.btn.send[lang]}
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
