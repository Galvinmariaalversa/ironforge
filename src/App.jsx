import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';
import TrainerModal from './components/TrainerModal';
import LightboxModal from './components/LightboxModal';
import VipModal from './components/VipModal';
import ManifestoModal from './components/ManifestoModal';

// Sections
import Hero from './sections/Hero';
import Metrics from './sections/Metrics';
import About from './sections/About';
import Programs from './sections/Programs';
import Trainers from './sections/Trainers';
import ClassSchedule from './sections/ClassSchedule';
import Gallery from './sections/Gallery';
import Membership from './sections/Membership';
import Transformations from './sections/Transformations';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CtaBanner from './sections/CtaBanner';
import Contact from './sections/Contact';

// Data
import { GALLERY_DATA } from './data/gymData';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('annual');
  const [toastMessage, setToastMessage] = useState(null);

  // Modals state
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [manifestoModalOpen, setManifestoModalOpen] = useState(false);

  // Tour / Enquiry Form state
  const [tourForm, setTourForm] = useState({
    name: '',
    email: '',
    phone: '',
    membershipPlan: 'Forge Pro',
    goal: 'Hypertrophy & Muscle Growth',
    timePreference: 'Morning (6 AM - 11 AM)',
    notes: ''
  });

  // Handle header scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleTourSubmit = (data) => {
    if (!data.name || !data.email || !data.phone) {
      triggerToast('Please complete all required fields.');
      return;
    }
    triggerToast(`Tour booked for ${data.name}! Our director will contact you.`);
    setTourForm({
      name: '',
      email: '',
      phone: '',
      membershipPlan: 'Forge Pro',
      goal: 'Hypertrophy & Muscle Growth',
      timePreference: 'Morning (6 AM - 11 AM)',
      notes: ''
    });
  };

  const handleVipSubmit = (data) => {
    triggerToast(`7-Day VIP Pass Issued for ${data.name || 'you'}! Check your inbox.`);
  };

  const handleSubscribe = (email) => {
    triggerToast(`Subscribed ${email} to Forge Dispatch newsletter.`);
  };

  const handleSelectPlan = (tier) => {
    setTourForm((prev) => ({
      ...prev,
      membershipPlan: tier.name
    }));
    triggerToast(`Selected ${tier.name}! Proceed to the tour & consultation form.`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClass = (classItem) => {
    setTourForm((prev) => ({
      ...prev,
      notes: `Interested in booking: ${classItem.title} on ${classItem.day} (${classItem.time}) with ${classItem.trainer}`
    }));
    triggerToast(`Reserved inquiry for ${classItem.title}. Finish details below.`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSessionWithTrainer = (trainer) => {
    setTourForm((prev) => ({
      ...prev,
      notes: `Requesting 1-on-1 private coaching session with ${trainer.name} (${trainer.role})`
    }));
    triggerToast(`Selected coach ${trainer.name}. Complete your details below.`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProgramEnroll = (program) => {
    setTourForm((prev) => ({
      ...prev,
      goal: program.title,
      notes: `Enquiry regarding curriculum enrollment: ${program.title} (${program.duration})`
    }));
    triggerToast(`Inquiring about ${program.title}. Confirm details below.`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gallery Lightbox Navigation
  const handleOpenGallery = (item) => {
    const idx = GALLERY_DATA.findIndex((g) => g.id === item.id);
    setSelectedGalleryIndex(idx >= 0 ? idx : 0);
  };

  const handlePrevGallery = () => {
    setSelectedGalleryIndex((prev) =>
      prev === 0 ? GALLERY_DATA.length - 1 : prev - 1
    );
  };

  const handleNextGallery = () => {
    setSelectedGalleryIndex((prev) =>
      prev === GALLERY_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const activeGalleryItem =
    selectedGalleryIndex !== null ? GALLERY_DATA[selectedGalleryIndex] : null;

  return (
    <div className="forge-app">
      {/* 1. Header / Navigation */}
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onJoinClick={() => setVipModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onClaimPass={() => setVipModalOpen(true)}
        onExploreFacility={() => {}}
      />

      {/* 3. Impact Metrics Bar */}
      <Metrics />

      {/* 4. Philosophy / Temple */}
      <About onReadManifesto={() => setManifestoModalOpen(true)} />

      {/* 5. Training Programs */}
      <Programs onSelectProgram={(prog) => setSelectedProgram(prog)} />

      {/* 6. Class Schedule */}
      <ClassSchedule onBookClass={handleBookClass} />

      {/* 7. Coaches / Vanguard */}
      <Trainers onSelectTrainer={(trainer) => setSelectedTrainer(trainer)} />

      {/* 8. Facilities Gallery */}
      <Gallery onSelectImage={handleOpenGallery} />

      {/* 9. Membership / Pricing */}
      <Membership
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
        onSelectPlan={handleSelectPlan}
      />

      {/* 10. Transformations */}
      <Transformations />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ Accordion */}
      <FAQ />

      {/* 13. Pre-Footer Call to Action */}
      <CtaBanner onClaimPass={() => setVipModalOpen(true)} />

      {/* 14. Contact & Consultation Booking Form */}
      <Contact
        formData={tourForm}
        setFormData={setTourForm}
        onSubmit={handleTourSubmit}
      />

      {/* 15. Footer */}
      <Footer onSubscribe={handleSubscribe} />

      {/* Modals */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={handleProgramEnroll}
      />

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onBookSession={handleBookSessionWithTrainer}
      />

      <LightboxModal
        item={activeGalleryItem}
        onClose={() => setSelectedGalleryIndex(null)}
        onPrev={handlePrevGallery}
        onNext={handleNextGallery}
      />

      <VipModal
        isOpen={vipModalOpen}
        onClose={() => setVipModalOpen(false)}
        onSubmit={handleVipSubmit}
      />

      <ManifestoModal
        isOpen={manifestoModalOpen}
        onClose={() => setManifestoModalOpen(false)}
      />

      {/* Toast Notifications */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={20} className="text-orange" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
