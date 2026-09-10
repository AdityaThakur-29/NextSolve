import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileQuestion, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32">
        <div className="container-custom text-center max-w-md space-y-6">
          <div className="w-20 h-20 bg-blue-50 text-primary rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-blue-100">
            <FileQuestion className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Error 404
          </span>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            The examination workflow or page you requested could not be located. It might have been moved or converted to our unified single-page platform.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full text-xs shadow-sm transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200 rounded-full text-xs transition-colors cursor-pointer"
            >
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
