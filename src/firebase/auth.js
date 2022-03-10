import { app } from "./config.js";
import {signInWithEmailAndPassword, getAuth} from "@firebase/auth"


export const auth = getAuth(app);
//Ingreso de usuario con email y contraseña
export const loginWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

