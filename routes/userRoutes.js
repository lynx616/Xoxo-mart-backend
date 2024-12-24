import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// POST: Create a new user
router.post('/', createUser);

// GET: Get all users
router.get('/', getUsers);

// GET: Get a specific user by ID
router.get('/:id', getUserById);

// PUT: Update user by ID
router.put('/:id', updateUser);

// DELETE: Delete user by ID
router.delete('/:id', deleteUser);

export default router;
