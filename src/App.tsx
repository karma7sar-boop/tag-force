/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  Image as ImageIcon, 
  Type, 
  Video, 
  ShieldCheck, 
  FileText, 
  Plus, 
  Star,
  ChevronRight,
  Menu
} from 'lucide-react';

// --- Components ---

const Nav = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 bg-navy/85 backdrop-blur-xl border-b border-border-main ${isScrolled ? 'py-3.5 px-6 md:px-12' : 'py-5 px-6 md:px-12'}`}>
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-green-brand rounded-lg grid grid-cols-2 gap-[3px] p-1.5">
          <span className="bg-navy rounded-[2px]"></span>
          <span className="bg-navy rounded-[2px]"></span>
          <span className="bg-navy rounded-[2px]"></span>
          <span className="bg-navy rounded-[2px] opacity-35"></span>
        </div>
        <span className="font-display text-lg font-bold text-white tracking-tight">
          Tag<span className="text-green-brand italic font-bold">Force</span>
        </span>
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        {['How it works', 'Services', 'Pricing', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[13px] text-gray-400 hover:text-white transition-colors tracking-wide">
            {link}
          </a>
        ))}
        <button 
          onClick={onOpenModal}
          className="bg-green-brand text-navy font-display text-[13px] font-bold py-2.5 px-5.5 rounded-lg hover:opacity-90 transition-all active:scale-95 tracking-wide"
        >
          Get started free
        </button>
      </div>

      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
};

const Hero = ({ onOpenModal, setEmail }: { onOpenModal: () => void, setEmail: (e: string) => void }) => {
  const [localEmail, setLocalEmail] = useState('');

  const handleCta = () => {
    setEmail(localEmail);
    onOpenModal();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(27,230,124,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-green-dim border border-green-border rounded-full px-4 py-1.5 mb-8"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-green-brand animate-pulse" />
        <span className="text-xs text-green-brand font-medium tracking-wider">Now live — first 200 labels completely free</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-[clamp(40px,7vw,88px)] font-extrabold tracking-tighter leading-[1.0] mb-6"
      >
        AI data labeling <br />
        <span className="text-green-brand">built for</span> <br />
        <span className="text-white/35">startups.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-400 max-w-[480px] mx-auto mb-10 leading-relaxed font-light"
      >
        Get your images, text, and video labeled by trained workers. 50–80% cheaper than Scale AI. Results delivered in 24 hours.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 justify-center mb-20"
      >
        <button 
          onClick={onOpenModal}
          className="bg-green-brand text-navy font-display font-bold text-sm tracking-wide py-3.5 px-8 rounded-xl hover:opacity-90 transition-all active:scale-95"
        >
          Get 200 free labels
        </button>
        <a 
          href="#how-it-works" 
          className="bg-transparent text-white font-display font-semibold text-sm tracking-wide py-3.5 px-8 rounded-xl border border-border-main hover:border-white/20 hover:bg-white/5 transition-all"
        >
          See how it works
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl border-t border-border-main pt-10"
      >
        {[
          { val: '$0.03', label: 'per image labeled' },
          { val: '24hr', label: 'turnaround guaranteed' },
          { val: '100%', label: 'quality guarantee' },
          { val: '12+', label: 'task types supported' },
        ].map((stat, i) => (
          <div key={i} className={`px-6 py-4 md:py-0 ${i !== 3 ? 'md:border-r border-border-main' : ''}`}>
            <div className="font-display text-3xl font-extrabold tracking-tight">
              {stat.val.includes('$') || stat.val.includes('%') || stat.val.includes('+') ? (
                <>
                  {stat.val.replace(/[0-9.]+/, '')}
                  <span className="text-green-brand">{stat.val.match(/[0-9.]+/)}</span>
                </>
              ) : (
                <>
                  {stat.val.match(/[0-9.]+/)}
                  <span className="text-green-brand">{stat.val.replace(/[0-9.]+/, '')}</span>
                </>
              )}
            </div>
            <div className="text-[11px] text-gray-500 mt-1 uppercase tracking-widest font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    "Image annotation", "Text classification", "Video labeling", "Object detection",
    "Semantic segmentation", "Sentiment analysis", "Named entity recognition",
    "Audio transcription", "OCR extraction", "Bounding box labeling",
    "Data verification", "Content moderation"
  ];

  return (
    <div className="py-5 bg-navy-light border-y border-border-main overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-[11px] text-white/35 font-display font-semibold uppercase tracking-[0.1em]">
            <div className="w-1 h-1 rounded-full bg-green-brand flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ label, title, sub }: { label: string, title: string, sub: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <div className="text-[11px] font-bold text-green-brand uppercase tracking-[0.15em] mb-3 font-display">{label}</div>
    <h2 className="font-display text-[clamp(32px,4vw,48px)] font-extrabold tracking-tighter mb-4 leading-none">
      {title.split(' ').map((word, i, arr) => (
        <span key={i} className={i >= arr.length - 2 ? 'text-white/30' : ''}>{word} </span>
      ))}
    </h2>
    <p className="text-base text-gray-400 max-w-[480px] leading-relaxed font-light">{sub}</p>
  </motion.div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="px-6 md:px-12 py-24">
    <SectionHeader 
      label="How it works" 
      title="Three steps to labeled data" 
      sub="No complex setup. No long contracts. Submit your data and receive labeled results within 24 hours."
    />
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-3 gap-px bg-border-main border border-border-main rounded-2xl overflow-hidden"
    >
      {[
        { num: '01', title: 'Submit your project', desc: 'Fill out our order form with your task type, file count, and deadline. Upload your raw data via Google Drive. Takes less than 5 minutes.' },
        { num: '02', title: 'We label it', desc: 'Our trained workers annotate your data according to your guidelines. Every label is quality-reviewed by a second worker before delivery.' },
        { num: '03', title: 'Download and build', desc: 'Receive your fully labeled dataset in your preferred format — CSV, JSON, COCO, YOLO. Ready to plug directly into your training pipeline.' },
      ].map((step, i) => (
        <div key={i} className="bg-navy-mid p-10 hover:bg-navy-light transition-colors group">
          <div className="font-display text-6xl font-extrabold text-green-brand/10 leading-none mb-5 tracking-tighter group-hover:text-green-brand/20 transition-colors">{step.num}</div>
          <h3 className="font-display text-lg font-bold mb-2.5 tracking-tight">{step.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">{step.desc}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <ImageIcon className="text-green-brand" size={20} />, title: 'Image annotation', desc: 'Bounding boxes, polygons, semantic segmentation, and keypoint detection for computer vision.', price: 'from $0.03 / image' },
    { icon: <Type className="text-green-brand" size={20} />, title: 'Text classification', desc: 'Sentiment analysis, intent detection, entity tagging, and content moderation labeling for NLP.', price: 'from $0.02 / item' },
    { icon: <Video className="text-green-brand" size={20} />, title: 'Video annotation', desc: 'Frame-by-frame object tracking, action recognition labeling, and temporal segmentation.', price: 'from $0.10 / frame' },
    { icon: <ShieldCheck className="text-green-brand" size={20} />, title: 'Data verification', desc: 'Quality audit of existing labeled datasets. We review accuracy and flag inconsistencies.', price: 'from $0.01 / item' },
    { icon: <FileText className="text-green-brand" size={20} />, title: 'OCR and transcription', desc: 'Convert handwritten notes, receipts, and scanned forms into clean, structured digital text.', price: 'from $0.05 / page' },
    { icon: <Plus className="text-green-brand" size={20} />, title: 'Custom task', desc: 'Have a unique labeling requirement? Describe your task and we will build a custom workflow.', price: 'custom quote' },
  ];

  return (
    <section id="services" className="bg-navy-light px-6 md:px-12 py-24">
      <SectionHeader 
        label="What we label" 
        title="Every data type your AI needs" 
        sub="From image bounding boxes to text sentiment — we handle all major annotation types at startup-friendly prices."
      />
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="bg-navy-mid border border-border-main rounded-xl p-7 hover:border-green-border hover:-translate-y-1 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <div className="w-11 h-11 rounded-lg bg-green-dim border border-green-border flex items-center justify-center mb-5">
              {s.icon}
            </div>
            <h3 className="font-display text-[15px] font-bold mb-2 tracking-tight">{s.title}</h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-4 font-light">{s.desc}</p>
            <span className="inline-block font-display text-[11px] font-bold text-green-brand uppercase tracking-wider bg-green-dim border border-green-border px-3 py-1 rounded-full">
              {s.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => (
  <section id="process" className="px-6 md:px-12 py-24">
    <SectionHeader 
      label="Our process" 
      title="Built for speed and quality" 
      sub=""
    />
    <div className="flex flex-col">
      {[
        { num: '01', title: 'Worker training and vetting', desc: 'Every TagForce worker completes a skills test before joining. We only accept the top 20% of applicants. Workers sign NDAs to protect your data before accessing any client files.' },
        { num: '02', title: 'Task assignment and guidelines', desc: 'When your order arrives, we match the right workers to your task type and send them your guidelines. If you don\'t have guidelines, we create them for you at no extra cost.' },
        { num: '03', title: 'Dual-review quality control', desc: 'Every labeled item passes through two independent workers. If their labels disagree, a senior reviewer makes the final call. This catches errors before they reach your pipeline.' },
        { num: '04', title: 'Delivery and free revisions', desc: 'Your labeled dataset is delivered to your Google Drive in your requested format within the agreed deadline. If anything is wrong, we fix it for free — no questions asked.' },
      ].map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-0 py-10 border-b border-border-main last:border-none"
        >
          <div className="font-display text-[13px] font-bold text-green-brand tracking-widest pt-1">{step.num}</div>
          <h3 className="font-display text-xl font-extrabold tracking-tight pr-10">{step.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Pricing = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section id="pricing" className="px-6 md:px-12 py-24">
    <SectionHeader 
      label="Pricing" 
      title="Simple, transparent pricing" 
      sub="No hidden fees. No long-term contracts. Pay only for what you need. All plans include the quality guarantee."
    />
    <div className="grid md:grid-cols-3 gap-4 items-start">
      {[
        { tier: 'Starter', name: 'Pay as you go', price: '$0.05', unit: '/image', desc: 'Perfect for small projects and testing. No minimum commitment. Start with the free trial.', features: ['Up to 1,000 items per month', '48-hour turnaround', 'Email support', 'Quality guarantee + free revisions'] },
        { tier: 'Growth', name: 'Scale with us', price: '$0.03', unit: '/image', desc: 'For teams actively building AI products who need consistent volume, speed, and a dedicated point of contact.', features: ['Up to 20,000 items per month', '24-hour turnaround', 'Priority support + account manager', 'Volume discounts on recurring orders'], featured: true },
        { tier: 'Enterprise', name: 'Custom scale', price: 'Custom', unit: '', desc: 'For high-volume teams needing custom workflows, dedicated worker teams, SLA agreements, and API integration.', features: ['Unlimited monthly volume', 'Custom SLA agreement', 'Dedicated worker team', 'API integration support'] },
      ].map((p, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`p-8 rounded-2xl border transition-all ${p.featured ? 'bg-gradient-to-br from-navy-light to-navy-mid border-green-brand relative' : 'bg-navy-mid border-border-main hover:border-white/15'}`}
        >
          {p.featured && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-brand text-navy font-display text-[11px] font-bold py-1 px-4 rounded-full uppercase tracking-wider whitespace-nowrap">
              Most popular
            </div>
          )}
          <div className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-2 font-display">{p.tier}</div>
          <h3 className="font-display text-2xl font-extrabold mb-5 tracking-tight">{p.name}</h3>
          <div className="font-display text-4xl font-extrabold tracking-tighter mb-4">
            {p.price !== 'Custom' && <sup className="text-xl font-semibold align-top top-2 mr-0.5">$</sup>}
            {p.price.replace('$', '')}
            <sub className="text-sm font-normal text-gray-500 tracking-normal bottom-0 ml-1">{p.unit}</sub>
          </div>
          <p className="text-[13px] text-gray-400 leading-relaxed mb-6 font-light">{p.desc}</p>
          <div className="h-px bg-border-main mb-6" />
          <div className="space-y-3 mb-8">
            {p.features.map((f, j) => (
              <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-300 font-light">
                <div className="w-[18px] h-[18px] rounded-full bg-green-dim border border-green-border flex items-center justify-center flex-shrink-0">
                  <Check size={9} className="text-green-brand" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button 
            onClick={onOpenModal}
            className={`w-full py-3.5 rounded-xl font-display text-[13px] font-bold tracking-wide transition-all active:scale-[0.98] ${p.featured ? 'bg-green-brand text-navy hover:opacity-90' : 'bg-transparent text-white border border-border-main hover:border-white/20 hover:bg-white/5'}`}
          >
            {p.price === 'Custom' ? 'Contact us' : 'Get started free'}
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-navy-light px-6 md:px-12 py-24">
    <SectionHeader 
      label="Testimonials" 
      title="Trusted by AI builders" 
      sub="Here is what teams say after completing their first TagForce project."
    />
    <div className="grid md:grid-cols-2 gap-4">
      {[
        { initials: 'JK', name: 'James K.', role: 'CTO, computer vision startup', text: '"We needed 10,000 images labeled for our object detection model. TagForce delivered in under 48 hours at a fraction of what Scale AI quoted us. Accuracy was outstanding."', color: 'bg-green-brand/10 text-green-brand' },
        { initials: 'SR', name: 'Sofia R.', role: 'ML engineer, NLP research team', text: '"The free trial convinced us immediately. 200 images labeled perfectly with no errors. We switched our entire labeling pipeline to TagForce within a week."', color: 'bg-blue-400/10 text-blue-400' },
        { initials: 'AP', name: 'Arjun P.', role: 'Founder, autonomous vehicle AI', text: '"We were burning through our runway paying Scale AI prices. TagForce cut our labeling costs by 70% with no drop in quality. That budget shift gave us three more months of runway."', color: 'bg-yellow-400/10 text-yellow-400' },
        { initials: 'ML', name: 'Maya L.', role: 'Head of AI, social platform', text: '"TagForce handled our content moderation labeling — 50,000 pieces of text classified in 4 days. Responsive team, clear communication, and the quality review process caught every edge case."', color: 'bg-purple-400/10 text-purple-400' },
      ].map((t, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="bg-navy-mid border border-border-main rounded-2xl p-8 hover:border-white/10 transition-colors"
        >
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#1be67c" className="text-green-brand" />)}
          </div>
          <p className="text-sm text-white/75 leading-relaxed italic mb-6 font-light">{t.text}</p>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-[13px] font-bold ${t.color}`}>
              {t.initials}
            </div>
            <div>
              <div className="font-display text-[13px] font-bold text-white tracking-tight">{t.name}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTA = ({ onOpenModal, setEmail }: { onOpenModal: () => void, setEmail: (e: string) => void }) => {
  const [localEmail, setLocalEmail] = useState('');

  const handleCta = () => {
    setEmail(localEmail);
    onOpenModal();
  };

  return (
    <section id="contact" className="relative text-center bg-navy-light py-32 px-6 md:px-12 border-t border-border-main overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(27,230,124,0.07)_0%,transparent_70%)] pointer-events-none" />
      <h2 className="font-display text-[clamp(36px,5vw,60px)] font-extrabold tracking-tighter mb-4 relative">
        Start with <span className="text-green-brand">200 free labels</span> today
      </h2>
      <p className="text-base text-gray-400 mb-10 font-light relative">No credit card. No commitment. Just results delivered to your inbox within 24 hours.</p>
      <div className="flex flex-col md:flex-row gap-2.5 max-w-[420px] mx-auto relative">
        <input 
          type="email" 
          placeholder="Your work email" 
          className="flex-1 bg-white/5 border border-border-main rounded-xl px-4.5 py-3.5 text-sm text-white outline-none focus:border-green-border transition-colors"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
        <button 
          onClick={handleCta}
          className="bg-green-brand text-navy font-display font-bold text-[13px] tracking-wide py-3.5 px-6 rounded-xl hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
        >
          Get started free
        </button>
      </div>
      <div className="text-[12px] text-gray-500 mt-4 relative font-light">Your data is kept strictly confidential. Workers sign NDAs before accessing any client files.</div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#060e1a] px-6 md:px-12 pt-16 pb-8 border-t border-border-main">
    <div className="grid md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-12 mb-12">
      <div>
        <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
          <div className="w-9 h-9 bg-green-brand rounded-lg grid grid-cols-2 gap-[3px] p-1.5">
            <span className="bg-navy rounded-[2px]"></span>
            <span className="bg-navy rounded-[2px]"></span>
            <span className="bg-navy rounded-[2px]"></span>
            <span className="bg-navy rounded-[2px] opacity-35"></span>
          </div>
          <span className="font-display text-lg font-bold text-white tracking-tight">
            Tag<span className="text-green-brand italic font-bold">Force</span>
          </span>
        </a>
        <p className="text-[13px] text-gray-500 leading-relaxed font-light max-w-[260px]">
          Affordable AI data labeling for teams building the future. Fast, accurate, and priced for startups that need to move quickly without burning runway.
        </p>
      </div>
      {[
        { title: 'Services', links: ['Image labeling', 'Text classification', 'Video annotation', 'OCR and transcription', 'Custom tasks'] },
        { title: 'Company', links: ['How it works', 'Our process', 'Pricing', 'Get started'] },
        { title: 'Contact', links: ['tagforce.work@gmail.com', 'Apply as a worker', 'Get a free quote'] },
      ].map((col, i) => (
        <div key={i}>
          <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4 font-display">{col.title}</div>
          <div className="space-y-2.5">
            {col.links.map((link, j) => (
              <a key={j} href="#" className="block text-[13px] text-gray-500 hover:text-white transition-colors font-light no-underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="pt-6 border-t border-border-main flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-[12px] text-white/20 font-light">&copy; 2025 TagForce. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors no-underline font-light">Privacy policy</a>
        <a href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors no-underline font-light">Terms of service</a>
      </div>
    </div>
  </footer>
);

const Modal = ({ isOpen, onClose, initialEmail }: { isOpen: boolean, onClose: () => void, initialEmail: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: initialEmail,
    type: '',
    desc: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, email: initialEmail }));
      setIsSubmitted(false);
    }
  }, [isOpen, initialEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.type || !formData.desc) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-navy-mid border border-border-main rounded-[20px] w-full max-w-[560px] max-h-[90vh] overflow-y-auto p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-border-main text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="font-display text-2xl font-extrabold tracking-tight mb-1.5">Place your order</h2>
                <p className="text-[13px] text-gray-500 mb-8 font-light">Fill in your details and we will confirm within 2 hours. First 200 items are completely free.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="pt-4 border-t border-border-main">
                    <div className="text-[10px] font-bold text-green-brand uppercase tracking-widest mb-4 font-display">Your details</div>
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Full name <span className="text-green-brand">*</span></label>
                        <input 
                          required
                          type="text" 
                          placeholder="Sarah Chen" 
                          className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Work email <span className="text-green-brand">*</span></label>
                        <input 
                          required
                          type="email" 
                          placeholder="sarah@company.com" 
                          className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-medium text-white/60 tracking-wide">Company or project name</label>
                      <input 
                        type="text" 
                        placeholder="VisionAI Labs or personal project" 
                        className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-main">
                    <div className="text-[10px] font-bold text-green-brand uppercase tracking-widest mb-4 font-display">Your task</div>
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Data type <span className="text-green-brand">*</span></label>
                        <select 
                          required
                          className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors appearance-none"
                          value={formData.type}
                          onChange={e => setFormData({...formData, type: e.target.value})}
                        >
                          <option value="" className="bg-navy-mid">Select a type...</option>
                          <option className="bg-navy-mid">Images — bounding boxes, segmentation, classification</option>
                          <option className="bg-navy-mid">Text — sentiment, intent, entity tagging, moderation</option>
                          <option className="bg-navy-mid">Video — frame annotation, object tracking</option>
                          <option className="bg-navy-mid">Audio — transcription, speaker tagging</option>
                          <option className="bg-navy-mid">Documents / OCR — forms, receipts, handwriting</option>
                          <option className="bg-navy-mid">Mixed or not sure — describe below</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Describe the labeling task <span className="text-green-brand">*</span></label>
                        <textarea 
                          required
                          rows={3}
                          placeholder="e.g. Label cats and dogs in photos with bounding boxes. Each image has 1–5 animals..." 
                          className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors resize-none leading-relaxed"
                          value={formData.desc}
                          onChange={e => setFormData({...formData, desc: e.target.value})}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-medium text-white/60 tracking-wide">Number of items <span className="text-green-brand">*</span></label>
                          <select className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors appearance-none">
                            <option className="bg-navy-mid">1–200 (free trial)</option>
                            <option className="bg-navy-mid">201–1,000</option>
                            <option className="bg-navy-mid">1,001–5,000</option>
                            <option className="bg-navy-mid">5,001–20,000</option>
                            <option className="bg-navy-mid">20,000+</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-medium text-white/60 tracking-wide">Deadline needed <span className="text-green-brand">*</span></label>
                          <select className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors appearance-none">
                            <option className="bg-navy-mid">Within 24 hours</option>
                            <option className="bg-navy-mid">Within 48 hours</option>
                            <option className="bg-navy-mid">Within 1 week</option>
                            <option className="bg-navy-mid">Flexible</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-main">
                    <div className="text-[10px] font-bold text-green-brand uppercase tracking-widest mb-4 font-display">Files and delivery</div>
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Google Drive link to your files</label>
                        <input 
                          type="text" 
                          placeholder="https://drive.google.com/... (or write: will send later)" 
                          className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium text-white/60 tracking-wide">Delivery format</label>
                        <select className="w-full bg-white/5 border border-border-main rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none focus:border-green-border transition-colors appearance-none">
                          <option className="bg-navy-mid">CSV file</option>
                          <option className="bg-navy-mid">JSON file</option>
                          <option className="bg-navy-mid">COCO format</option>
                          <option className="bg-navy-mid">YOLO format</option>
                          <option className="bg-navy-mid">Labeled images ZIP</option>
                          <option className="bg-navy-mid">Any format is fine</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full bg-green-brand text-navy font-display font-bold text-sm tracking-wide py-3.5 rounded-xl hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                      Submit order — Get started free
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-3.5 leading-relaxed font-light">
                      We reply within 2 hours. Your data is kept confidential. <br /> Workers sign NDAs before accessing your files.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-dim border border-green-border flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-green-brand" />
                </div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight mb-3">Order received!</h2>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  We will review your request and send a confirmation email within 2 hours with next steps and payment details.
                  <br /><br />
                  Your first 200 items are labeled free — no payment needed yet.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialEmail, setInitialEmail] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <div className="relative z-10">
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} setEmail={setInitialEmail} />
        <Marquee />
        <HowItWorks />
        <Services />
        <Process />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <CTA onOpenModal={() => setIsModalOpen(true)} setEmail={setInitialEmail} />
      </main>

      <Footer />

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialEmail={initialEmail} 
      />
    </div>
  );
}
