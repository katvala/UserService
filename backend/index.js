import express from 'express';
import userController from './src/controllers/userController.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Petición exitosa.', status: 'OK' });
});

app.post('/users/register', userController.register);
app.post('/users/login', userController.login);
app.post('/users/reset-password', userController.resetPassword);
app.put('/users/update-profile', userController.updateProfile);

app.listen(port, () => console.log(`Server running on port ${port}`));