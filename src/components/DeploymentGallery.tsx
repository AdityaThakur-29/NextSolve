'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Marquee } from '@/components/ui/marquee';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const proofImages = [
  {
    id: 1,
    src: '/assets/proof/proof-1.jpeg',
    title: 'Digital Practical Lab Session 1',
    location: 'Thakur Polytechnic / Thakur Shyamnarayan Degree College, Mumbai',
    date: 'Academic Year 2025–26',
    description: 'Students actively taking synchronized digital practical examinations in computer labs using PWS locked environment.',
  },
  {
    id: 2,
    src: '/assets/proof/proof-2.jpeg',
    title: 'Zero-Paper Workstation Terminal',
    location: 'Thakur Polytechnic / Thakur Shyamnarayan Degree College, Mumbai',
    date: 'Academic Year 2025–26',
    description: 'Students entering code and output screenshots directly on lab workstations with zero physical answer sheets.',
  },
  {
    id: 3,
    src: '/assets/proof/proof-3.jpeg',
    title: 'Full Batch Practical Examination',
    location: 'Computer Lab 102, Kandivali (E), Mumbai',
    date: 'Academic Year 2025–26',
    description: 'Complete batch synchronized attendance and real-time faculty monitoring across all terminals.',
  },
  {
    id: 4,
    src: '/assets/proof/proof-4.jpeg',
    title: 'Real-Time Lab Proctoring',
    location: 'Kandivali East Lab Facility',
    date: 'Academic Year 2025–26',
    description: 'Examiner supervising live workstation statuses and randomized question assignments from central console.',
  },
  {
    id: 5,
    src: '/assets/proof/proof-5.jpeg',
    title: 'Safe Exam Browser in Operation',
    location: 'Thakur Campus, Mumbai',
    date: 'Academic Year 2025–26',
    description: 'Workstations locked to prevent external tab switching and unauthorized tool access during test.',
  },
  {
    id: 6,
    src: '/assets/proof/proof-6.jpeg',
    title: 'Concurrent Department Assessments',
    location: 'IT & CS Department Labs',
    date: 'Academic Year 2025–26',
    description: 'High-density student examination batch successfully conducted with 100% paperless workflow.',
  },
];

const firstRow = [proofImages[0], proofImages[1], proofImages[2]];
const secondRow = [proofImages[3], proofImages[4], proofImages[5]];

function ProofCard({ img, onClick }: { img: (typeof proofImages)[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative w-[270px] sm:w-[370px] shrink-0 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col mx-2"
    >
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={img.src}
          alt={img.title}
          fill
          sizes="(max-width: 768px) 310px, 370px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <ProgressiveBlur
          position="bottom"
          height="60%"
          className="pointer-events-none z-10"
          blurLevels={[0.5, 1, 2, 4, 8, 16]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity z-10 pointer-events-none"></div>

        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 z-20">
          <CheckCircle2 className="w-3 h-3" /> Verified Deployment
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white z-20">
          <div className="flex items-center gap-1 text-[11px] text-emerald-200 mb-0.5">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">Thakur College Campus, Mumbai</span>
          </div>
          <h4 className="font-bold text-sm text-white truncate">{img.title}</h4>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between bg-white">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {img.description}
        </p>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-500 font-medium">
            <Calendar className="w-3 h-3 text-primary" /> {img.date}
          </span>
          <span className="text-primary font-semibold group-hover:underline flex items-center gap-0.5">
            <span className="hidden sm:inline">Inspect Photo</span>
            <span className="sm:hidden">Tap Photo</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

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
    <div className="relative w-full flex flex-col gap-4 overflow-hidden py-4">
      {/* Row 1: Moving to the Left */}
      <Marquee direction="left" pauseOnHover className="[--duration:35s]">
        {firstRow.map((img) => (
          <ProofCard
            key={img.id}
            img={img}
            onClick={() => setSelectedImage(proofImages.findIndex((p) => p.id === img.id))}
          />
        ))}
      </Marquee>

      {/* Row 2: Moving to the Right */}
      <Marquee direction="right" pauseOnHover className="[--duration:35s]">
        {secondRow.map((img) => (
          <ProofCard
            key={img.id}
            img={img}
            onClick={() => setSelectedImage(proofImages.findIndex((p) => p.id === img.id))}
          />
        ))}
      </Marquee>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{ transformOrigin: 'center' }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 sm:h-[480px] w-full bg-slate-950 shrink-0">
                <Image
                  src={proofImages[selectedImage].src}
                  alt={proofImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
                <ProgressiveBlur
                  position="bottom"
                  height="30%"
                  className="pointer-events-none z-10"
                  blurLevels={[0.5, 1, 2, 4, 8, 16]}
                />
              </div>

              <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proofImages[selectedImage].location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {proofImages[selectedImage].title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                    {proofImages[selectedImage].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevImage}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-500 font-mono font-medium px-2">
                    {selectedImage + 1} / {proofImages.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
