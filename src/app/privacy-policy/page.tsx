import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/navigation';
import { ShieldCheck, Lock, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — NextSolves PWS',
  description:
    'Official Privacy Policy for NextSolves and Practical Workflow System (PWS). Information collection, data retention, user privacy rights, and institutional security.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="bg-navy-900 text-white py-14">
          <div className="container-custom max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Legal Documentation</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Privacy Policy</h1>
            <p className="text-xs text-navy-300 mt-2">Last Updated: August 02, 2026</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl prose prose-navy prose-sm sm:prose-base space-y-8 text-navy-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Overview</h2>
              <p>
                This Privacy Notice for NextSolves (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) describes how and why we might collect, store, use, and/or share (&ldquo;process&rdquo;) your personal information when you use our services (&ldquo;Services&rdquo;), including when you access the Practical Workflow System (PWS) website or related software products.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. What Information Do We Collect?</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Personal Information Provided by You:</strong> Names, phone numbers, email addresses, job titles/designations, college/institution names, and passwords for authenticated access.</li>
                <li><strong>Student & Examination Data:</strong> Student roster identifiers, enrolled practical subjects, examination submissions (code scripts, MCQ responses), and grading records uploaded by designated college faculty.</li>
                <li><strong>Log & Heartbeat Telemetry:</strong> Device metadata, IP addresses, browser types, session timestamps, and server-enforced monotonic heartbeat activity during active examination sessions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. How Do We Process Your Information?</h2>
              <p>
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>To facilitate account creation, authentication, and Role-Based Access Control (RBAC).</li>
                <li>To deliver, administer, and maintain the digital practical and internal examination lifecycle.</li>
                <li>To safeguard examination integrity through Safe Exam Browser enforcement and tab-switch anomaly detection.</li>
                <li>To generate and provide authorized administrators and faculty with instant scorecards and attendance records.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. How Do We Keep Your Information Safe?</h2>
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. These include multi-tenant database isolation, scoped Firestore security rules, Firebase ID token verification, path traversal prevention, CORS restrictions, rate-limiting on sensitive endpoints, and tamper-proof server-side audit logs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Data Retention</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the academic and legal purposes set out in this notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">6. Your Privacy Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to request access to the personal information we collect from you, review or correct inaccuracies, withdraw consent, or request deletion. You may exercise these rights at any time by contacting our Data Protection Officer.
              </p>
            </div>

            <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100 not-prose">
              <h3 className="text-base font-bold text-navy-900 mb-2">Contact Our Data Protection Officer (DPO)</h3>
              <p className="text-xs text-navy-600 mb-4">
                If you have questions or comments about this notice, you may contact us by post, phone, or email:
              </p>
              <div className="space-y-1.5 text-xs text-navy-700">
                <p><strong>NextSolves Data Protection Officer</strong></p>
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
