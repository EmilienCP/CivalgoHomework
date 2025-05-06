import { Pool } from 'pg';
import { Employe } from '../../../common/employes';
import { Evenement } from '../../../common/evenement';

const pool = new Pool({
  user: 'users',
  host: 'localhost',
  database: 'civalgo_db',
  password: 'Civalgo',
  port: 5432,
});

export const getEmployes = async (): Promise<Employe[]> => {
  const result = await pool.query('SELECT id, nom, etat FROM employes');
  return result.rows.map((row: any) => ({ 
    nom: row.nom, 
    etat: row.etat,
    id: row.id
  }));
};

export const selectEmploye = async (id: number): Promise<Employe> => {
  const result = await pool.query('SELECT id, nom, etat FROM employes WHERE id = $1', [id]);
  return result.rows.map((row: any) => ({ 
    nom: row.nom, 
    etat: row.etat,
    id: row.id
  }))[0];
};

export const activerEmploye = async (id: number, etat: boolean): Promise<void> => {
  const result = await pool.query('UPDATE employes SET etat = $1 WHERE id = $2', [etat, id]);
};

export const nouvelEvenement = async (id: number, etat: boolean): Promise<void> => {
  const result = await pool.query('INSERT INTO evenements (employe_id, actif) VALUES ($1, $2)', [id, etat]);
};

export const selectEvenements = async (): Promise<Evenement[]> => {
  const result = await pool.query('SELECT * FROM evenements ORDER BY heure DESC;');
  return result.rows.map((row: any) => ({ 
    id: row.id,
    id_employe: row.employe_id,
    etat: row.actif,
    date: row.heure
  }));
};
