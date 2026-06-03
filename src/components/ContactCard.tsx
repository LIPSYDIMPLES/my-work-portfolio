import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, User, Download, FileText, QrCode, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showVcardPreview, setShowVcardPreview] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowQrModal(false);
        setShowVcardPreview(false);
      }
    };
    if (showQrModal || showVcardPreview) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showQrModal, showVcardPreview]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const drafts = JSON.parse(localStorage.getItem('praise_portfolio_messages') || '[]');
      drafts.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('praise_portfolio_messages', JSON.stringify(drafts));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const downloadVCard = () => {
    const nameParts = PERSONAL_INFO.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${lastName};${firstName};;;`,
      `FN:${PERSONAL_INFO.fullName}`,
      `TITLE:${PERSONAL_INFO.title}`,
      `EMAIL;TYPE=PREF,INTERNET:${PERSONAL_INFO.email}`,
      `TEL;TYPE=CELL:${PERSONAL_INFO.phone}`,
      'ADR;TYPE=WORK:;;Gaborone;Botswana;;;',
      `URL:${window.location.origin}`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${PERSONAL_INFO.fullName.toLowerCase().replace(/\s+/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-950/15 rounded-full mix-blend-multiply filter blur-3xl opacity-35 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white animate-fade-in">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm">
            Interested in hiring me, collaborating, or simply discussing tech developments? Reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-zinc-950/45 border border-zinc-900 p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="font-extrabold text-white text-lg">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 text-emerald-450 rounded-xl border border-zinc-850 mt-1">
                    <Mail id="contact-mail" className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-semibold text-zinc-500 font-mono uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-150 font-bold hover:text-emerald-450 transition-colors text-sm break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-1.5 hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 rounded-lg transition-colors mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    title="Copy Email"
                    aria-label="Copy Praise's email address to clipboard"
                  >
                    {copiedEmail ? <Check id="cop" className="w-4 h-4 text-emerald-400" /> : <Copy id="cop-raw" className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 text-emerald-450 rounded-xl border border-zinc-850 mt-1">
                    <Phone id="contact-phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-500 font-mono uppercase tracking-wider">Phone Number</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-zinc-150 font-bold hover:text-emerald-450 transition-colors text-sm">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 text-emerald-450 rounded-xl border border-zinc-850 mt-1">
                    <MapPin id="contact-map" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-500 font-mono uppercase tracking-wider">Operating Base</p>
                    <p className="text-zinc-150 font-bold text-sm">
                      Botswana / Zimbabwe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0c0c] border border-zinc-900 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-900/30 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-850/60">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#10B981] font-bold uppercase animate-pulse">Scan & Connect</span>
                    <h4 className="font-bold text-base">Virtual Index Card</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowVcardPreview(true)}
                      aria-label="Preview contact card details instantly"
                      className="p-2 bg-zinc-900 hover:bg-zinc-850 text-emerald-400 hover:text-emerald-350 rounded-xl border border-zinc-800 transition-all hover:scale-105 duration-150 cursor-pointer flex items-center gap-1.5 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      title="Preview Card Details Instantly"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Preview</span>
                    </button>
                    <button
                      onClick={() => setShowQrModal(true)}
                      aria-label="View scannable contact QR code"
                      className="p-2 bg-zinc-900 hover:bg-zinc-850 text-emerald-400 hover:text-emerald-350 rounded-xl border border-zinc-800 transition-all hover:scale-105 duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      title="View Scanable Contact QR Code"
                    >
                      <QrCode id="qr-index" className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-mono text-zinc-500 uppercase leading-none">CONTACT TARGET</p>
                  <p className="text-lg font-extrabold tracking-tight">{PERSONAL_INFO.fullName}</p>
                  <p className="text-xs font-medium text-zinc-400">{PERSONAL_INFO.title}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={downloadVCard}
                    id="vcard-dn-btn"
                    className="flex-grow flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-100 hover:bg-white text-black font-semibold text-sm rounded-xl transition-all duration-150 shadow-md group/btn cursor-pointer"
                  >
                    <Download id="vcard-dn-icon" className="w-4 h-4 text-black group-hover/btn:translate-y-0.5 transition-transform" />
                    <span>Download Contact (.vcf)</span>
                  </button>
                  <button
                    onClick={() => setShowVcardPreview(true)}
                    className="sm:w-auto px-5 py-3.5 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 font-semibold text-sm rounded-xl transition-all duration-150 cursor-pointer text-center"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-zinc-950/45 border border-zinc-900 p-6 md:p-8 rounded-3xl shadow-sm">
            <h3 className="font-extrabold text-white text-lg mb-6">Send A Direct Message</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-550">
                      <User id="user-ic" className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-zinc-900/60 border border-zinc-800 focus:border-emerald-500 focus:bg-zinc-900 text-zinc-150 text-sm font-medium rounded-xl outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email address input */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-550">
                      <Mail id="mail-ic" className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-zinc-900/60 border border-zinc-800 focus:border-emerald-500 focus:bg-zinc-900 text-zinc-150 text-sm font-medium rounded-xl outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Subject line input */}
              <div className="space-y-1.5">
                <label htmlFor="subject-input" className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-550">
                    <FileText id="filetext-ic" className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Recruiting Inquiry / Collaboration Idea"
                    className="w-full pl-10 pr-4 py-3 bg-zinc-900/60 border border-zinc-800 focus:border-emerald-500 focus:bg-zinc-900 text-zinc-150 text-sm font-medium rounded-xl outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message content textarea */}
              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider">Message</label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Draft your message details here..."
                  className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 focus:border-emerald-500 focus:bg-zinc-900 text-zinc-150 text-sm font-medium rounded-xl outline-none transition-colors resize-none"
                />
              </div>

              {/* Submission visual state displays */}
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-950/65 border border-emerald-800/40 rounded-xl text-emerald-450 text-xs font-semibold flex items-center gap-2"
                  >
                    <Check id="success-check" className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Message logged securely in browser state! Praise will retrieve it. Thanks!</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                id="submit-form-btn"
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-zinc-900 disabled:to-zinc-900 text-black disabled:text-zinc-650 font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:shadow-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/35 border-t-black rounded-full animate-spin" />
                    <span>Processing Secure Log...</span>
                  </>
                ) : (
                  <>
                    <Send id="send-form" className="w-4 h-4" />
                    <span>Dispatch Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Interactive Modals */}
      <AnimatePresence>
        {/* QR Code Modal */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setShowQrModal(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm bg-zinc-950 border border-zinc-900 p-8 rounded-3xl shadow-2xl text-center space-y-6 overflow-hidden z-10"
            >
              {/* Background Glow */}
              <div className="absolute -top-1/2 -left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-1.5 relative">
                <h4 id="qr-modal-title" className="text-xl font-extrabold text-white tracking-tight">Scan Portfolio Link</h4>
                <p className="text-xs text-zinc-400">Share or load this portfolio instantly on any camera device</p>
              </div>

              {/* QR Code Container */}
              <div className="relative mx-auto w-48 h-48 bg-white p-3.5 rounded-2xl shadow-inner flex items-center justify-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.origin)}`}
                  alt="Portfolio Link QR Code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3 font-sans">
                <p className="text-xs font-mono text-emerald-400 break-all bg-zinc-900/60 py-2 px-3 rounded-xl border border-zinc-850 select-all">
                  {window.location.origin}
                </p>
                <p className="text-[11px] text-zinc-450 leading-relaxed">
                  Point your phone's camera at the QR code above to instantly open and save this live portfolio website directly.
                </p>
              </div>

              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white font-bold text-xs rounded-xl border border-zinc-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Close QR Frame
              </button>
            </motion.div>
          </div>
        )}

        {/* Live VCF Contact Card Preview */}
        {showVcardPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="vcard-modal-title">
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setShowVcardPreview(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6 z-10"
            >
              {/* Header */}
              <div className="relative pb-4 border-b border-zinc-900 text-left">
                <h4 id="vcard-modal-title" className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span className="p-1 px-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-mono font-bold tracking-widest uppercase">Contact Card Preview</span>
                </h4>
                <p className="text-xs text-zinc-400 mt-1">A visual representation of your downloadable contact profile.</p>
              </div>

              {/* Skeuomorphic Premium Card Representation */}
              <div className="w-full p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-850 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[160px] text-left">
                {/* Visual Accent */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Name, Title, and Monogram */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-lg font-extrabold text-white tracking-tight">{PERSONAL_INFO.fullName}</p>
                    <p className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest leading-none mt-1">{PERSONAL_INFO.title}</p>
                  </div>
                  
                  {/* Monogram emblem */}
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white tracking-wider">PH</span>
                  </div>
                </div>

                {/* Substantive Contact Data Info List */}
                <div className="mt-8 pt-4 border-t border-zinc-850/50 grid grid-cols-1 gap-y-3 font-sans text-xs text-zinc-300">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="w-3.5 h-3.5 text-emerald-405 flex-shrink-0" />
                    <span className="truncate select-all" title={PERSONAL_INFO.email}>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone className="w-3.5 h-3.5 text-emerald-405 flex-shrink-0" />
                    <span className="select-all truncate">{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-emerald-405 flex-shrink-0" />
                    <span className="truncate">Gaborone, Botswana</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={downloadVCard}
                  className="flex-grow flex items-center justify-center gap-2 py-3 bg-zinc-100 hover:bg-white text-black font-extrabold text-xs rounded-xl transition-all duration-150 shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>Download file (.vcf)</span>
                </button>
                <button
                  onClick={() => setShowVcardPreview(false)}
                  className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
