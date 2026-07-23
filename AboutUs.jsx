import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://placeholder.com"
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://placeholder.com"
    },
    {
      name: "Alex Lee",
      role: "UI/UX Designer",
      image: "https://placeholder.com"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heading}>About Our Company</h1>
        <p style={styles.subheading}>Innovating the future, one line of code at a time.</p>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.subSectionHeading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to deliver high-quality, scalable digital solutions that empower 
          businesses to achieve their maximum potential. We value creativity, integrity, 
          and continuous learning.
        </p>
      </section>

      {/* Team Section */}
      <section style={styles.section}>
        <h2 style={styles.subSectionHeading}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.card}>
              <img src={member.image} alt={member.name} style={styles.avatar} />
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Simple inline styling for clean look without external CSS
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  section: {
    marginBottom: '50px',
    textAlign: 'center',
  },
  subSectionHeading: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '20px',
    borderBottom: '2px solid #3498db',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  text: {
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#555',
  },
  teamGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '15px',
    objectFit: 'cover',
  },
  memberName: {
    fontSize: '1.3rem',
    margin: '10px 0 5px 0',
    color: '#2c3e50',
  },
  memberRole: {
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default AboutUs;
