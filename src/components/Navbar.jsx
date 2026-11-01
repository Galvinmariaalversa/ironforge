import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  onJoinClick
}) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Membership', href: '#pricing' },
    { label: 'Results', href: '#transformations' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Visit', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`forge-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-brand" aria-label="Ironforge Fitness Home">
          <img
            src="/images/Ironforge Fitness Shield Logo.png"
            alt="Ironforge Fitness"
            className="navbar-brand-logo"
          />
        </a>

        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Button
            variant="primary"
            className="nav-cta-btn"
            onClick={onJoinClick}
            icon={ArrowRight}
          >
            JOIN NOW
          </Button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
