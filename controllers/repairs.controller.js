const { Repair } = require('../models/repairs.model');

// Listar Usuarios
const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: 'pending' } });
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

//crear Usuario
const createRepairs = async (req, res) => {
  try {
    const { date } = req.body;
    console.log(date);
    const newDate = await Repair.create({ date });
    res.status(201).json({ newDate });
  } catch (error) {
    console.log(error);
  }
};

//traer usuario por id
const getRepairsById = async (req, res) => {
  try {
    const { id } = req.params; // { id, postId, comentId }
    //busca algo segun el parametro pasado
    const repair = await Repair.findOne({
      where: { id },
    });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found',
      });
    }

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepairs = async (req, res) => {
  try {
    const { id } = req.params;

    // await User.update({name},{where:{id}})

    const repair = await Repair.findOne({ where: { id } });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    repair.update({ status: 'completed' });

    res.status(200).json({ status: 'succes' });
  } catch (error) {}
};

const deleteRepairs = async (req, res) => {
  try {
    const { id } = req.params;

    // await User.update({name},{where:{id}})

    const repair = await Repair.findOne({ where: { id } });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    await repair.update({ status: 'cancelled' });
  } catch (error) {}
};

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
};
