'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EmployeService from '../../services/employeService';

interface Employe {
  id: number;
  nom: string;
}

const DropdownEmployes: React.FC = () => {
    const [employes, setEmployes] = useState<Employe[]>([]);
    const [selectedEmploye, setSelectedEmploye] = useState<number | null>(null);

    useEffect(() => {
        const fetchEmployes = async () => {
        try {
            const response = await fetch('http://localhost:3001/employes');
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des employés');
            }
            const data = await response.json();
            setEmployes(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchEmployes();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEmploye(Number(event.target.value));
    };
  
    const router = useRouter();

    const handleClick = () => {
        EmployeService.setEmployeId(selectedEmploye+"");
        router.push('/employes')
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
          maxWidth: '500px',
        },
        title: {
          fontSize: '1.8rem',
          color: '#333',
          marginBottom: '1rem',
        },
        description: {
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '1.5rem',
        },
        formGroup: {
          marginBottom: '1rem',
          textAlign: 'left' as const,
        },
        label: {
          fontSize: '1rem',
          color: '#333',
          marginBottom: '0.5rem',
          display: 'block',
        },
        select: {
          width: '100%',
          padding: '0.8rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          color: '#333',
        },
        input: {
          width: '100%',
          padding: '0.8rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          fontSize: '1rem',
          color: '#333',
        },
        button: {
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '0.8rem 2rem',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          width: '100%',
        },
      };

      return (
        <main style={styles.main}>
          <div style={styles.container}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 style={styles.title}>Bienvenue dans l'outil de gestion des employés</h1>
            <p style={styles.description}>Veuillez vous connecter pour accéder à votre espace.</p>
            <div style={styles.formGroup}>
              <label htmlFor="employe-select" style={styles.label}>
                Sélectionner un employé :
              </label>
              <select
                id="employe-select"
                value={selectedEmploye ?? ''}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">-- Choisir un employé --</option>
                {employes.map((employe) => (
                  <option key={employe.id} value={employe.id}>
                    {employe.nom}
                  </option>
                ))}
              </select>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Entrez votre mot de passe :
              </label>
              <input
                id="password"
                type="password"
                style={styles.input}
                required
              />
            </div>
            <button onClick={handleClick} style={styles.button}>
              Confirmer
            </button>
          </div>
        </main>
      );
};

export default DropdownEmployes;