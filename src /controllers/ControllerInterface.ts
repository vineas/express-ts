import {Request, Response} from 'express'

interface IController {
    index(req: Request, res: Response):Response //untuk menampilkan data 
    create(req: Request, res: Response):Response //membuat data
    show(req: Request, res: Response):Response //menampilkan 1 data saja
    update(req: Request, res: Response):Response //memperbarui data
    delete(req: Request, res: Response):Response //menghapus data
}

export default IController;