import React, { useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar({
  isScrolled,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onJoinClick
}) {
  const navItems = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'programs', label: 'Programs', href: '#programs' },
    { id: 'schedule', label: 'Schedule', href: '#schedule' },
    { id: 'coaches', label: 'Coaches', href: '#coaches' },
    { id: 'facilities', label: 'Facilities', href: '#facilities' },
    { id: 'pricing', label: 'Membership', href: '#pricing' },
    { id: 'transformations', label: 'Results', href: '#transformations' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Visit', href: '#contact' }
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const heroElem = document.getElementById('hero');
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
    if (onJoinClick) {
      onJoinClick();
    }
  };

  return (
    <header className={`forge-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a
          href="#hero"
          className="logo-brand"
          aria-label="Ironforge Fitness - Return to top"
          onClick={handleLogoClick}
        >
          <img
            src="/images/Ironforge Fitness Shield Logo.png"
            alt="Ironforge Fitness Logo"
            className="navbar-brand-logo"
          />
        </a>

        <nav aria-label="Main Navigation">
          <ul
            id="primary-navigation"
            className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}
            role="menubar"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} role="none">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <Button
            variant="primary"
            className="nav-cta-btn"
            onClick={handleCtaClick}
            icon={ArrowRight}
            aria-label="Claim VIP pass and book private tour"
          >
            JOIN NOW
          </Button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
