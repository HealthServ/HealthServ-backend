import admin from 'firebase-admin';
import { Request, Response } from 'firebase-functions/node_modules/@types/express';

const authRegister = (req: Request, res: Response): any => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(422).json({
            email: 'email is required',
            password: 'password is required',
            name: 'name is required',
        });
    }
    admin
        .auth()
        .createUser({
            email: req.body.email,
            emailVerified: false,
            password: req.body.password,
            displayName: req.body.name,
            disabled: false,
        })
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            return res.status(201).json(userRecord);
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
            return res.status(500).json({ error: error.message });
        });
};

export default authRegister;
