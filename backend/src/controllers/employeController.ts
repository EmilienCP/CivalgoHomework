import { Request, Response } from 'express';
import { getEmployes, activerEmploye, nouvelEvenement, selectEvenements, selectEmploye } from '../services/dbservice';
import { Employe } from '../../../common/employes';

export const getNomsEmployes = async (req: Request, res: Response) => {
  try {
    const employes: Employe[] = await getEmployes();
    res.json(employes);
  } catch (error) {
    console.error('Erreur lors de la récupération des noms:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getEmploye = async (req: Request, res: Response) => {
  try {
    const employe: Employe = await selectEmploye(+req.params.id);
    res.json(employe);
  } catch (error) {
    console.error('Erreur lors de la récupération des noms:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const activerEmployes = async (req: Request, res: Response) => {
  const rep = { etat: req.body.etat, id: req.body.id };
  try {
    await activerEmploye(rep.id, rep.etat);
    await nouvelEvenement(rep.id, rep.etat);
    res.status(201).json({ message: 'Employé activé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'insertion :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

export const getEvenements = async (req: Request, res: Response) => {
  try {
    const evenements = await selectEvenements();
    res.json(evenements);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

