const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.getIncomes);
router.post('/', incomeController.addIncome);

module.export = router;