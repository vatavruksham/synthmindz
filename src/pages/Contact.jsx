import { useState } from 'react';
import { Send, Mail, CheckCircle } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';
import Input from '../components/ui/Input';
import { validateEmail } from '../utils/validation';

export default function Contact() {
  useDocumentTitle('Contact',
    'Get in touch with the SynthMindz team for support, partnerships, or general inquiries.'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <div className="glass rounded-2xl p-10">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold font-display text-ink mb-4">
                Message Sent!
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Thank you for reaching out. Our team will get back to you within
                24 hours. Check your inbox for a confirmation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Have a question, partnership idea, or need support? We'd love to hear from you."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-surface-50 border border-surface-200">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-ink-soft">
                Or email us directly at{' '}
                <a
                  href="mailto:support@synthmindz.com"
                  className="text-primary-dark font-medium hover:underline"
                >
                  support@synthmindz.com
                </a>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What's this about?"
                required
              />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink-soft"
                >
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  required
                  className={`w-full px-4 py-2.5 bg-white border rounded-lg text-ink placeholder-ink-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:border-transparent resize-none ${
                    errors.message
                      ? 'border-red-500 ring-1 ring-red-500'
                      : 'border-surface-200 hover:border-surface-300'
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-glow bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
