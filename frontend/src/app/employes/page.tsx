'use client';

import { useEffect, useState } from 'react';
import { Employe } from '../../../../common/employes';
import EmployeService from '../../services/employeService';

export default function AboutPage() {
  const [employe, setEmployes] = useState<Employe>();
  useEffect(() => {
    fetch('http://localhost:3001/employes/'+EmployeService.getEmployeId())
      .then((res) => {
        if (!res.ok) {
          throw new Error('Problème lors de la récupération des employés');
        }
        return res.json();
      })
      .then((data) => {
        setEmployes(data);
      });
  }, []);

  const handlePostEmploye = async () => {
    try {
      const res = await fetch('http://localhost:3001/activer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: employe?.id, etat: !employe?.etat,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Erreur API');

      setEmployes({...employe!, etat: !employe?.etat});
    } catch (err) {
      console.error(err);
    }
  };

  const styles = {
    main: {
      padding: '2rem',
      backgroundColor: '#f4f7fc',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: 'auto',
      textAlign: 'center' as const,
    },
    title: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '1rem',
    },
    status: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: '#333', // Couleur du texte "État"
    },
    statusText: {
        fontWeight: 'bold',
        color: '#333', // Couleur du texte "Actif" ou "Inactif"
    },
    active: {
      color: '#28a745',
      fontWeight: 'bold' as const,
    },
    inactive: {
      color: '#dc3545',
      fontWeight: 'bold' as const,
    },
    buttonInactive: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonActive: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <main style={styles.main}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 style={styles.title}>Informations de l'employé</h1>
      <h2 style={styles.subtitle}>Nom: {employe?.nom}</h2>
      <h3 style={styles.status}>
      État : <span style={styles.statusText}>{employe?.etat ? 'Actif' : 'Inactif'}</span>
      </h3>
      <button
        onClick={handlePostEmploye}
        style={employe?.etat ? styles.buttonActive : styles.buttonInactive}
      >
        {employe?.etat ? 'Désactiver' : 'Activer'}
      </button>
    </main>
  );

  
  }