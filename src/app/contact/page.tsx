import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export const metadata = {
  title: 'Request a Demo / Contact NextSolves — Practical Workflow System',
  description:
    'Schedule a personalized demonstration of PWS for your college administration, principal, or department heads. Contact our Mumbai headquarters.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Direct Institutional Channel
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Request an Institutional Demo
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Experience how NextSolves PWS eliminates paperwork and automates examinations across your college campus.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Info Column */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">
                    Let&apos;s Modernize Your Examination Workflow
                  </h2>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    Whether you are preparing for upcoming practical exams, unit tests, or semester assessments, our team will configure a live interactive walkthrough tailored to your academic departments.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-navy-50/70 rounded-2xl border border-navy-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-400 uppercase tracking-wider">Email Us</div>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-navy-900 hover:text-teal-600 transition-colors">
                        {contactInfo.email}
                      </a>
                      <p className="text-[11px] text-navy-500 mt-0.5">Direct response within 24 hours</p>
                    </div>
                  </div>

                  <div className="p-5 bg-navy-50/70 rounded-2xl border border-navy-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-400 uppercase tracking-wider">Call Directly</div>
                      <div className="space-y-1 mt-0.5">
                        {contactInfo.phone.map((p) => (
                          <div key={p}>
                            <a href={`tel:${p.replace(/\s/g, '')}`} className="text-sm font-bold text-navy-900 hover:text-teal-600 transition-colors">
                              {p}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-navy-50/70 rounded-2xl border border-navy-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-400 uppercase tracking-wider">Headquarters</div>
                      <p className="text-xs font-semibold text-navy-800 mt-0.5 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-900 space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    What Happens Next:
                  </div>
                  <ol className="list-decimal pl-5 space-y-1 text-teal-800 text-[11px]">
                    <li>We review your college student capacity & department count.</li>
                    <li>We schedule a 30-minute interactive live demonstration.</li>
                    <li>We configure a pilot test batch for your faculty.</li>
                  </ol>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
