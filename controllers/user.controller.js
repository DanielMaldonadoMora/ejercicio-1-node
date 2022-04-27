const { User } = require('../models/user.model');

// Listar Usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

//crear Usuario
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name);
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

//traer usuario por id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // { id, postId, comentId }
    //busca algo segun el parametro pasado
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // await User.update({name},{where:{id}})

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    user.update({ name });

    res.status(200).json({ status: 'succes' });
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // await User.update({name},{where:{id}})

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    await user.update({ status: 'deleted' });
  } catch (error) {}
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
