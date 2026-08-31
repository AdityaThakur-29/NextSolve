'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Users, MessageSquare, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    designation: '',
    email: '',
    phone: '',
    students: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.institution.trim()) newErrors.institution = 'Please enter your college/institution';
    if (!formData.designation.trim()) newErrors.designation = 'Please enter your designation';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message or requirements';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('submitting');

    // Simulate clean submission handling (ready for backend connection)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        institution: '',
        designation: '',
        email: '',
        phone: '',
        students: '',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-navy-100 p-6 sm:p-10">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">Demo Request Received!</h3>
          <p className="text-sm text-navy-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to NextSolves. Our academic solutions team will contact you shortly to schedule an interactive walkthrough for your institution.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-600" /> Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. Rajesh / Prof. Sharma"
                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all ${
                  errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-navy-200'
                }`}
              />
              {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
            </div>

            {/* Institution */}
            <div>
              <label htmlFor="institution" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-teal-600" /> College / Institution *
              </label>
              <input
                id="institution"
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="e.g. Thakur College of Engineering & Tech"
                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all ${
                  errors.institution ? 'border-rose-500 bg-rose-50/20' : 'border-navy-200'
                }`}
              />
              {errors.institution && <p className="text-[11px] text-rose-600 mt-1">{errors.institution}</p>}
            </div>

            {/* Designation */}
            <div>
              <label htmlFor="designation" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-teal-600" /> Designation / Role *
              </label>
              <input
                id="designation"
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="Principal / HOD / Lab In-charge"
                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all ${
                  errors.designation ? 'border-rose-500 bg-rose-50/20' : 'border-navy-200'
                }`}
              />
              {errors.designation && <p className="text-[11px] text-rose-600 mt-1">{errors.designation}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" /> Institutional Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="faculty@college.edu.in"
                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all ${
                  errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-navy-200'
                }`}
              />
              {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-600" /> Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 text-sm border border-navy-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
            </div>

            {/* Estimated Students */}
            <div>
              <label htmlFor="students" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-teal-600" /> Approx. Students (Optional)
              </label>
              <input
                id="students"
                type="text"
                value={formData.students}
                onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                placeholder="e.g. 1500 students"
                className="w-full px-4 py-2.5 text-sm border border-navy-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" /> Message / Specific Department Requirements *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your upcoming practical/internal examination cycle and schedule preference for a live walkthrough..."
              className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all ${
                errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-navy-200'
              }`}
            />
            {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold text-sm rounded-xl hover:from-navy-800 hover:to-navy-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <span>Schedule an Institutional Demo</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-navy-400 text-center pt-2">
            Your inquiry is handled strictly under NextSolves privacy standards. No spam.
          </p>
        </form>
      )}
    </div>
  );
}
