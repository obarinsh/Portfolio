import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Impressive, distinctive screen designs with strong visual identity
const screenStyles = [
  {
    id: 'editorial-fashion',
    name: 'Editorial',
    render: () => (
      <div className="h-full flex flex-col bg-[#F5F2EB] relative overflow-hidden">
        {/* Large typography hero */}
        <div className="flex-1 flex flex-col justify-center px-4 relative z-10">
          <p className="text-[6px] tracking-[0.4em] text-[#7A8B7A] mb-1 uppercase">Collection 24</p>
          <h1 className="text-[22px] leading-[0.9] font-serif text-[#1a1a19] tracking-tight">
            The<br/>
            <span className="italic">Art</span> of<br/>
            Less
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#1a1a19]" />
            <span className="text-[5px] tracking-[0.2em] text-[#888]">EXPLORE</span>
          </div>
        </div>
        
        {/* Floating organic shape */}
        <div className="absolute -right-6 top-12 w-24 h-32 rounded-full bg-[#7A8B7A]/10 blur-sm" />
        <div className="absolute -left-3 bottom-20 w-16 h-16 rounded-full bg-[#C4A35A]/10" />
        
        {/* Bottom section */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[5px] text-[#888] tracking-wider">01</p>
              <p className="text-[7px] text-[#1a1a19] font-medium">Minimal</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#1a1a19] flex items-center justify-center">
              <div className="w-2 h-[1px] bg-[#F5F2EB]" />
              <div className="w-[1px] h-2 bg-[#F5F2EB] absolute" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'luxury-dark',
    name: 'Luxury',
    render: () => (
      <div className="h-full flex flex-col bg-[#0f0f0f] relative overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
        
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center">
          <span className="text-[7px] tracking-[0.3em] text-[#C4A35A]">MAISON</span>
          <div className="flex gap-[2px]">
            <div className="w-[2px] h-[2px] rounded-full bg-[#C4A35A]" />
            <div className="w-[2px] h-[2px] rounded-full bg-[#333]" />
          </div>
        </div>
        
        {/* Central element */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border border-[#C4A35A]/30 absolute -inset-1" />
            <div className="w-16 h-16 rounded-full border border-[#C4A35A]/20 flex items-center justify-center">
              <span className="text-[20px] font-serif text-[#C4A35A]/80 italic">M</span>
            </div>
          </div>
          <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-[#C4A35A]" />
          <div className="absolute bottom-10 left-5 w-1 h-1 rounded-full bg-[#C4A35A]/50" />
        </div>
        
        {/* Bottom */}
        <div className="px-4 pb-4">
          <div className="text-center mb-3">
            <p className="text-[5px] tracking-[0.4em] text-[#555] mb-1">ESTABLISHED</p>
            <p className="text-[8px] tracking-[0.2em] text-[#C4A35A]">MMXXIV</p>
          </div>
          <div className="flex justify-center gap-3">
            {['I', 'II', 'III'].map((n, i) => (
              <span key={i} className={`text-[6px] ${i === 0 ? 'text-[#C4A35A]' : 'text-[#333]'}`}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'organic-wellness',
    name: 'Wellness',
    render: () => (
      <div className="h-full flex flex-col bg-gradient-to-b from-[#F8F6F2] to-[#EBE7DF] relative overflow-hidden">
        {/* Organic blob shapes */}
        <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#7A8B7A" opacity="0.3" />
        </svg>
        <svg className="absolute -bottom-16 -left-8 w-40 h-40 opacity-30" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="45" ry="35" fill="#8B9BA3" opacity="0.4" />
        </svg>
        
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center relative z-10">
          <div className="w-6 h-6 rounded-full bg-[#7A8B7A]/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#7A8B7A]" />
          </div>
          <span className="text-[6px] tracking-[0.3em] text-[#7A8B7A]">BREATHE</span>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
          <p className="text-[5px] tracking-[0.3em] text-[#8B9BA3] mb-2">TODAY'S FOCUS</p>
          <h2 className="text-[18px] font-serif text-[#2C2C2C] text-center leading-tight mb-1">
            Find your<br/><span className="italic text-[#7A8B7A]">calm</span>
          </h2>
          <p className="text-[6px] text-[#888] text-center max-w-[90px]">
            A moment of peace in your day
          </p>
          
          {/* Progress ring */}
          <div className="mt-4 relative">
            <svg className="w-12 h-12" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" fill="none" stroke="#E8E4DC" strokeWidth="3" />
              <circle 
                cx="30" cy="30" r="26" fill="none" stroke="#7A8B7A" strokeWidth="3"
                strokeDasharray="163.36" strokeDashoffset="40" strokeLinecap="round"
                transform="rotate(-90 30 30)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-medium text-[#2C2C2C]">
              75%
            </span>
          </div>
        </div>
        
        {/* Bottom nav */}
        <div className="px-4 pb-4 flex justify-center gap-4 relative z-10">
          {[true, false, false].map((active, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all ${active ? 'bg-[#7A8B7A] scale-125' : 'bg-[#D4D0C8]'}`}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'bold-creative',
    name: 'Creative',
    render: () => (
      <div className="h-full flex flex-col bg-[#1a1a19] relative overflow-hidden">
        {/* Accent shapes */}
        <div className="absolute top-10 right-3 w-12 h-12 rounded-full bg-[#C45A5A]/80" />
        <div className="absolute top-16 right-10 w-6 h-6 rounded-full bg-[#C4A35A]/60" />
        
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center relative z-10">
          <span className="text-[8px] font-bold text-[#F5F2EB] tracking-wider">STU—</span>
          <span className="text-[8px] font-bold text-[#F5F2EB] tracking-wider">—DIO</span>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-end px-4 pb-3 relative z-10">
          <p className="text-[5px] tracking-[0.3em] text-[#C45A5A] mb-1">FEATURED WORK</p>
          <h2 className="text-[20px] font-bold text-[#F5F2EB] leading-[0.95] tracking-tight mb-2">
            Break<br/>
            the<br/>
            <span className="text-[#C4A35A]">rules.</span>
          </h2>
          <p className="text-[6px] text-[#888] max-w-[80px] leading-relaxed">
            Design that challenges convention.
          </p>
        </div>
        
        {/* Bottom */}
        <div className="px-4 pb-4 flex justify-between items-center relative z-10">
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded-full border border-[#333] flex items-center justify-center">
              <span className="text-[5px] text-[#F5F2EB]">←</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#F5F2EB] flex items-center justify-center">
              <span className="text-[5px] text-[#1a1a19]">→</span>
            </div>
          </div>
          <span className="text-[6px] text-[#555]">01 / 04</span>
        </div>
      </div>
    ),
  },
  {
    id: 'minimal-tech',
    name: 'Minimal',
    render: () => (
      <div className="h-full flex flex-col bg-[#FAFAFA] relative">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#1a1a19 1px, transparent 1px), linear-gradient(90deg, #1a1a19 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />
        
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-md bg-[#1a1a19]" />
            <span className="text-[7px] font-medium text-[#1a1a19]">Linear</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#F0F0F0]" />
        </div>
        
        {/* Main */}
        <div className="flex-1 flex flex-col justify-center px-4 relative z-10">
          <p className="text-[5px] tracking-[0.2em] text-[#888] mb-1 uppercase">Dashboard</p>
          <h2 className="text-[16px] font-medium text-[#1a1a19] leading-tight tracking-tight mb-3">
            Build better<br/>products.
          </h2>
          
          {/* Mini cards */}
          <div className="space-y-1.5">
            {[
              { label: 'Active', value: '24', color: '#7A8B7A' },
              { label: 'Review', value: '8', color: '#C4A35A' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 rounded-md bg-white border border-[#F0F0F0]">
                <div className="w-0.5 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1">
                  <p className="text-[5px] text-[#888]">{item.label}</p>
                  <p className="text-[8px] font-medium text-[#1a1a19]">{item.value} tasks</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom */}
        <div className="px-4 pb-4 relative z-10">
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#1a1a19]">
            <span className="text-[6px] text-[#888]">New task</span>
            <div className="w-4 h-4 rounded-md bg-white/10 flex items-center justify-center">
              <span className="text-[8px] text-white">+</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === screenStyles.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? screenStyles.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === screenStyles.length - 1 ? 0 : prev + 1));
  };

  const currentStyle = screenStyles[currentIndex];

  return (
    <div className="flex flex-col items-center">
      {/* Phone with side navigation */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Left arrow */}
        <motion.button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous style"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.button>

        {/* iPhone Frame */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-3 bg-gradient-to-b from-primary/5 to-accent/5 rounded-[40px] blur-xl" />
          
          {/* Phone body */}
          <div className="relative w-[160px] h-[340px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a19] rounded-[32px] p-[6px] shadow-2xl">
            {/* Metallic edge */}
            <div className="absolute inset-[2px] rounded-[30px] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a19] p-[1px]">
              <div className="w-full h-full rounded-[29px] bg-[#0a0a0a]" />
            </div>
            
            {/* Screen */}
            <div className="relative w-full h-full bg-[#0a0a0a] rounded-[26px] overflow-hidden z-10">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0a0a0a] rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
                <div className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
              </div>

              {/* Screen content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStyle.id}
                  className="absolute inset-0 pt-8"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {currentStyle.render()}
                </motion.div>
              </AnimatePresence>

              {/* Home indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full z-20" />
            </div>
          </div>

          {/* Side buttons */}
          <div className="absolute left-[-2px] top-20 w-[2px] h-6 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-28 w-[2px] h-10 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-40 w-[2px] h-10 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute right-[-2px] top-28 w-[2px] h-12 bg-[#2a2a2a] rounded-r-sm" />
        </motion.div>

        {/* Right arrow */}
        <motion.button
          onClick={goToNext}
          className="w-10 h-10 rounded-full border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 flex items-center justify-center group"
          aria-label="Next style"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.button>
      </div>

      {/* Style name */}
      <motion.div 
        className="text-center mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.p 
          key={currentStyle.name}
          className="text-base font-heading font-medium"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentStyle.name}
        </motion.p>
      </motion.div>

      {/* Progress dots - Compact */}
      <div className="flex gap-2 mt-3">
        {screenStyles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className="group relative"
            aria-label={`Go to style ${index + 1}`}
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-5 bg-primary'
                : 'w-1 bg-border group-hover:bg-muted-foreground'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}
