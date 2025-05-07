'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const gestionnaireClick = () => {
    router.push('/gestionnaire')
  };
  const employeClick = () => {
    router.push('/connection');
  };

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      width: '90%',
      maxWidth: '600px',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '1rem',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      padding: '0.8rem 2rem',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: '45%',
    },
  };
  
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 style={styles.title}>Bienvenue à l'outil de gestion des employés</h1>
        <p style={styles.description}>
          Choisissez votre rôle pour accéder aux fonctionnalités appropriées.
        </p>
        <div style={styles.buttonContainer}>
          <button onClick={gestionnaireClick} style={styles.button}>Gestionnaire</button>
          <button onClick={employeClick} style={styles.button}>Employé</button>
        </div>
      </div>
    </main>
  );
}
