import express from 'express';
import { getNomsEmployes, activerEmployes, getEvenements, getEmploye } from '../controllers/employeController';;

const router = express.Router();

router.get('/employes', getNomsEmployes);
router.post('/activer', activerEmployes);
router.get('/evenements', getEvenements);
router.get('/employes/:id', getEmploye);

export default router;

