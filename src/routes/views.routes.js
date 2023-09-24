import { Router } from 'express';
import {isConnected, isDisconnected, isUserPremiumOrAdmin} from "../middlewares/middlewares.js";
import { validateToken } from '../utils.js';
import { addMessage, getMessages, register, login, profile} from "../controllers/views.controller.js"


const router = Router();


router.post("/chat/:user/:message", addMessage)

router.get("/chat", isUserPremiumOrAdmin,  getMessages)

router.get('/register', isConnected, register)

router.get('/login', isConnected, login)

router.get('/current', isDisconnected, isUserPremiumOrAdmin, profile)

router.get("/restorepass/:token", validateToken, (req, res) => {
    res.render('restorePass', { token: req.params.token });
  })



export default router;