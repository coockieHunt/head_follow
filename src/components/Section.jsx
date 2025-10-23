import './Section.css';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;