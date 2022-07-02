import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/mensajes/:id',(req: Request, res: Response)=>{

    const cuerpo = req.body.cuerpo;
    const id     = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Get Todo está bien',
        cuerpo,
        id
    });
})


router.post('/mensajes',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'POST Todo está bien'
    });
})