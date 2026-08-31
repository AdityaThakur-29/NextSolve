import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { features, featureCategories, FeatureCategory } from '@/data/features';
import {
  FileText,
  Database,
  LayoutTemplate,
  Shuffle,
  Settings,
  Code,
  CheckSquare,
  Monitor,
  Radio,
  UserCheck,
  Users,
  Lock,
  Eye,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  FileText,
  Database,
  LayoutTemplate,
  Shuffle,
  Settings,
  Code,
  CheckSquare,
  Monitor,
  Radio,
  UserCheck,
  Users,
  Lock,
  Eye,
};

export const metadata = {
  title: 'PWS Features Architecture — Comprehensive Module Breakdown',
  description:
    'Detailed technical capabilities of the Practical Workflow System: instant exam automation, random question distribution, live surveillance, automated grading, and Safe Exam Browser security.',
};

export default function FeaturesPage() {
  const categories = Object.keys(featureCategories) as FeatureCategory[];

  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Technical Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              PWS Feature Architecture
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Every confirmed tool and system mechanism organized by operational category.
            </p>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom space-y-16 max-w-6xl">
            {categories.map((catKey) => {
              const catInfo = featureCategories[catKey];
              const catFeatures = features.filter((f) => f.category === catKey);

              if (catFeatures.length === 0) return null;

              return (
                <div key={catKey} className="space-y-6">
                  <div className="border-b border-navy-100 pb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                      {catInfo.label}
                    </h2>
                    <p className="text-xs sm:text-sm text-navy-500 mt-1">
                      {catInfo.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catFeatures.map((feat) => {
                      const IconComponent = iconMap[feat.icon] || CheckCircle2;
                      return (
                        <div
                          key={feat.id}
                          className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 hover:border-teal-300 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-navy-900 mb-2">{feat.title}</h3>
                            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy-900 text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Evaluate PWS for Your Institution</h2>
            <p className="text-sm sm:text-base text-navy-300 mt-3 mb-8">
              Experience the live workflow with a personalized walkthrough for your department.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl shadow-lg transition-colors text-base"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
