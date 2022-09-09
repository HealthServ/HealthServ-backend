import admin from 'firebase-admin';
import { Request, Response } from 'firebase-functions/node_modules/@types/express';

const userController = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('Hey threre!');
};

export default userController;
