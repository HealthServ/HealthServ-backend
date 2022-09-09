import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import cors from 'cors';
import express from 'express';
import serviceAccount from '../serviceAccountKey.json';
import validateFirebaseIdToken from './middleware/authMiddleware';
import cookieParser from 'cookie-parser';
import authRegister from './controller/authController';

// set admin credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// Init express app
const app = express();
// Connect to firestore database
// const db = admin.firestore();
// Cors config
app.use(cors({ origin: true }));
app.use(cookieParser());

// MOST LIKELY CAN BE REMOVED AND REPLACED WITH DIFFERENT AUTH METHODS
app.post('/auth', authRegister);

// Auth middleware
app.use(validateFirebaseIdToken);

// Restricted Routes

app.post('/user', authRegister);

app.get('/test', (req, res) => res.status(200).send('Hey threre!'));

export default functions.https.onRequest(app);
