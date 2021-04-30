import { Router } from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "./repositories/SettingsRepository";


const routes = Router();

/**
 * Tipos de parâmetros
 * Route Params => parâmetros de rota
 * Query Params => Filtros e buscas
 * Body Params => json{}
 * 
 **/

routes.post("/settings", async (request, response) =>{
  const { chat, username} = request.body


  const settingsRepository   = getCustomRepository(SettingsRepository)

  const settings = settingsRepository.create({
    chat, 
    username
  })

  await settingsRepository.save(settings)
})

export {routes}