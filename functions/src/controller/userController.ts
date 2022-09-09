// import admin from 'firebase-admin';
import { Request, Response } from 'firebase-functions/node_modules/@types/express';

export const userInfo = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should get users basic info for homepage');
};

export const userRoutines = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should return users routines');
};

export const userSubscribedRoutines = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should be able to subscribe to routines');
};

export const userRoutineProgress = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should be able to log progress for routines');
};

export const userRateRoutine = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should be used to like routines');
};

export const userCreateRoutine = (req: Request, res: Response): any => {
    // admin.firestore().collection('routines');
    return res.status(200).send('should be used to Create Routine');
};
