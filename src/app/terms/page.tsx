import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/navigation';

export const metadata = {
  title: 'Terms & Conditions — NextSolves PWS',
  description:
    'Official Terms and Conditions for NextSolves Practical Workflow System (PWS). User representations, intellectual property, institutional service management, and dispute resolution.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="bg-navy-900 text-white py-14">
          <div className="container-custom max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Legal Documentation</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Terms and Conditions</h1>
            <p className="text-xs text-navy-300 mt-2">Last Updated: August 02, 2026</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl prose prose-navy prose-sm sm:prose-base space-y-8 text-navy-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Agreement to Our Legal Terms</h2>
              <p>
                We are NextSolves (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). We operate the website, as well as any other related products and services that refer or link to these legal terms (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p>
                The <strong>Practical Workflow System (PWS)</strong> is an end-to-end software solution that fully digitizes the examination lifecycle. For practical exams, teachers upload a question bank, and the system automatically analyzes and distributes randomized digital question slips. Students take their exams in a locked digital environment, writing code directly into the system and uploading their outputs — eliminating the need to write anything on paper. Teachers can monitor live progress, approve submissions, track attendance, and assign grades from a real-time digital dashboard. For internal MCQ exams, the system fully automates question distribution and grading, instantly generating comprehensive results.
              </p>
              <p>
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;), and NextSolves, concerning your access to and use of the Services. By accessing the Services, you agree to be bound by all of these Legal Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. Intellectual Property Rights</h2>
              <p>
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &ldquo;Content&rdquo;), as well as the trademarks, service marks, and logos contained therein (&ldquo;Marks&rdquo;).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. User Representations & Institutional Accounts</h2>
              <p>
                By using the Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>All registration information you submit is true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Legal Terms.</li>
                <li>You will not access the Services through automated or non-human means, whether through a bot, script, or otherwise, except as authorized by NextSolves.</li>
                <li>You will not use the Services for any illegal or unauthorized purpose, nor violate any applicable law or institutional examination code of conduct.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. Examination Integrity & Prohibited Activities</h2>
              <p>
                You may not access or use the Services for any purpose other than that for which we make the Services available. As a user or student examinee, you agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Attempt to bypass, disable, or tamper with the Safe Exam Browser lock, monotonic heartbeat monitors, or tab-switch telemetry.</li>
                <li>Systematically retrieve data or other content from the Services to create or compile a collection or database without written permission.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                <li>Upload malicious scripts, files exceeding permitted storage parameters, or unsupported MIME types.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Governing Law & Dispute Resolution</h2>
              <p>
                These Legal Terms shall be governed by and defined following the laws of India. NextSolves and yourself irrevocably consent that the courts of Mumbai, Maharashtra, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </div>

            <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100 not-prose">
              <h3 className="text-base font-bold text-navy-900 mb-2">Contact Us Regarding Legal Terms</h3>
              <p className="text-xs text-navy-600 mb-4">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <div className="space-y-1.5 text-xs text-navy-700">
                <p><strong>NextSolves</strong></p>
                <p>{contactInfo.address}</p>
                <p>Email: <a href={`mailto:${contactInfo.email}`} className="text-teal-600 hover:underline">{contactInfo.email}</a></p>
                <p>Phone: {contactInfo.phone.join(' / ')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
