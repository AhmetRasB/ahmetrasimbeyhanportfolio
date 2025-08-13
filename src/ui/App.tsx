import React from 'react';
import tr from '../../trdata.json';
import { en } from '../utils/enData';

type Lang = 'tr' | 'en';

function useLanguage(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = React.useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'tr' || saved === 'en') return saved;
    const browser = navigator.language.toLowerCase();
    return browser.startsWith('tr') ? 'tr' : 'en';
  });
  React.useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  return [lang, setLang];
}

export const App: React.FC = () => {
  const [lang, setLang] = useLanguage();
  const data = lang === 'tr' ? tr : en;

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="lang-switcher">
          <button 
            className={lang === 'tr' ? 'active' : ''} 
            onClick={() => setLang('tr')}
          >
            TR
          </button>
          <button 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          {lang === 'tr' ? 'Merhaba, Ben' : 'Hi, I\'m'} {data.personal.name} 👋🏻
        </h1>
        <p className="hero-subtitle">{data.personal.title}</p>
        <div className="hero-initials">AR</div>
      </section>

      {/* About Section */}
      <section className="section">
        <h2 className="section-title">{lang === 'tr' ? 'Hakkımda' : 'About'}</h2>
        <p className="section-text">{data.personal.bio}</p>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">{lang === 'tr' ? 'Yetenekler' : 'Skills'}</h2>
        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-item">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">{lang === 'tr' ? 'İş Deneyimi' : 'Work Experience'}</h2>
        <div className="timeline">
          {data.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  <span className="company-initial">{exp.company.charAt(0)}</span>
                  {exp.company}
                </h3>
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-position">{exp.position}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2 className="section-title">{lang === 'tr' ? 'Eğitim' : 'Education'}</h2>
        <div className="timeline">
          {data.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  <span className="company-initial">{edu.institution.charAt(0)}</span>
                  {edu.institution}
                </h3>
                <div className="timeline-period">{edu.period}</div>
                <div className="timeline-position">{edu.degree}</div>
                <p className="timeline-description">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Contact Section */}
      <section className="section contact-section">
        <h2 className="section-title">{lang === 'tr' ? 'İletişim' : 'Get in Touch'}</h2>
        <p className="section-text">
          {lang === 'tr' 
            ? 'Sohbet etmek ister misiniz? Bana e-posta gönderin ve elimden geldiğince yanıtlayacağım.'
            : 'Want to chat? Just shoot me an email and I\'ll respond whenever I can.'
          }
        </p>
        <div className="contact-links">
          <a href={`mailto:${data.personal.email}`} className="contact-link">
            {data.personal.email}
          </a>
          <a href={`tel:${data.personal.phone}`} className="contact-link">
            {data.personal.phone}
          </a>
        </div>
      </section>
    </div>
  );
};


