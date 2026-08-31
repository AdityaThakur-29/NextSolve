'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const proofImages = [
  {
    id: 1,
    src: '/assets/proof/proof-1.jpeg',
    title: 'Computer Lab Examination Session 1',
    location: 'Thakur Polytechnic / Thakur Shyamnarayan Degree College, Kandivali (E), Mumbai',
    date: 'March 2026',
    description: 'Students actively taking digital practical examinations in computer labs using PWS locked environment.',
  },
  {
    id: 2,
    src: '/assets/proof/proof-2.jpeg',
    title: 'Zero-Paper Lab Deployment',
    location: 'Thakur Polytechnic / Thakur Shyamnarayan Degree College, Mumbai',
    date: 'March 2026',
    description: 'Students entering code and output screenshots directly on lab workstations without paper answer sheets.',
  },
  {
    id: 3,
    src: '/assets/proof/proof-3.jpeg',
    title: 'Full Batch Practical Examination',
    location: 'Computer Lab 102, Kandivali (E)',
    date: 'March 2026',
    description: 'Complete batch synchronized attendance and real-time faculty monitoring in progress.',
  },
  {
    id: 4,
    src: '/assets/proof/proof-4.jpeg',
    title: 'Live Lab Session & Monitoring',
    location: 'Kandivali East Lab Facility',
    date: 'March 2026',
    description: 'Examiner supervising live workstation statuses and randomized slip assignments.',
  },
  {
    id: 5,
    src: '/assets/proof/proof-5.jpeg',
    title: 'Safe Exam Browser in Operation',
    location: 'Thakur Campus, Mumbai',
    date: 'March 2026',
    description: 'Workstations locked to prevent external tab switching and unauthorized tool access.',
  },
  {
    id: 6,
    src: '/assets/proof/proof-6.jpeg',
    title: 'Concurrent Student Assessments',
    location: 'IT & CS Department Labs',
    date: 'March 2026',
    description: 'High-density student examination batch successfully conducted with zero paper printouts.',
  },
];

export default function DeploymentGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % proofImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + proofImages.length) % proofImages.length);
  };

  return (
    <div>
      {/* Proof Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proofImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImage(index)}
            className="group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden bg-navy-950">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Deployment
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1 text-[11px] text-teal-300 mb-0.5">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">Thakur College Campus, Mumbai</span>
                </div>
                <h4 className="font-bold text-sm text-white truncate">{img.title}</h4>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between bg-white">
              <p className="text-xs text-navy-600 line-clamp-2 leading-relaxed">
                {img.description}
              </p>
              <div className="mt-3 pt-3 border-t border-navy-100 flex items-center justify-between text-[11px] text-navy-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-teal-600" /> {img.date}
                </span>
                <span className="text-teal-600 font-semibold group-hover:underline flex items-center gap-0.5">
                  View Photo <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-navy-900 rounded-2xl overflow-hidden border border-navy-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-white hover:bg-navy-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-96 sm:h-[480px] w-full bg-black">
                <Image
                  src={proofImages[selectedImage].src}
                  alt={proofImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-navy-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proofImages[selectedImage].location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {proofImages[selectedImage].title}
                  </h3>
                  <p className="text-xs text-navy-300 mt-1 max-w-xl">
                    {proofImages[selectedImage].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevImage}
                    className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-navy-400 font-mono">
                    {selectedImage + 1} / {proofImages.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
