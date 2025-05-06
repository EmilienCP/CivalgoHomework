'use client';

import { useEffect, useState } from 'react';
import { Employe } from '../../../../common/employes';
import { Evenement } from '../../../../common/evenement';

export default function AboutPage() {
  const [employes, setEmployes] = useState<Employe[]>([]);
  const [evenements, setEvenements] = useState<Evenement[]>([]);
  useEffect(() => {
    // Appel API à notre backend
    fetch('http://localhost:3001/employes') // Point d'API backend
      .then((res) => {
        if (!res.ok) {
          throw new Error('Problème lors de la récupération des employés');
        }
        return res.json();
      })
      .then((data) => {
        setEmployes(data); // On met à jour l'état avec les employés
      });
  }, []);
  useEffect(() => {
    // Appel API à notre backend
    fetch('http://localhost:3001/evenements') // Point d'API backend
      .then((res) => {
        if (!res.ok) {
          throw new Error('Problème lors de la récupération des évenements');
        }
        return res.json();
      })
      .then((data) => {
        setEvenements(data); // On met à jour l'état avec les employés
      });
  }, []);
  const employesActifs = employes.filter(employe => {
    return employe.etat
  });

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f7fc',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      width: '90%',
      maxWidth: '800px',
    },
    title: {
      fontSize: '2rem',
      color: '#000000',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#000000',
      marginBottom: '1rem',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      marginBottom: '2rem',
    },
    listItem: {
      fontSize: '1.2rem',
      color: '#000000',
      marginBottom: '0.5rem',
    },
    tableContainer: {
    },
    table: {
      width: '100%',
      marginTop: '1rem',
    },
    tableHeader: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '0.8rem',
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '0.8rem',
      color: '#000000',
    },
  };


  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Liste des employés actifs</h1>
        <ul style={styles.list}>
          {employesActifs.map((item) => (
            <li key={item.id} style={styles.listItem}>
              {item.nom}
            </li>
          ))}
        </ul>
        <div style={styles.tableContainer}>
          <h2 style={styles.subtitle}>Liste des Événements</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Nom de l'employé</th>
                <th style={styles.tableHeader}>État</th>
                <th style={styles.tableHeader}>Date</th>
              </tr>
            </thead>
            <tbody>
              {evenements.map((e) => (
                <tr key={e.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{employes.filter((ep)=>ep.id==e.id_employe)[0].nom}</td>
                  <td style={styles.tableCell}>
                    {e.etat ? '✅ Actif' : '❌ Inactif'}
                  </td>
                  <td style={styles.tableCell}>
                    {new Date(e.date).toLocaleString('fr-CA', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
  }