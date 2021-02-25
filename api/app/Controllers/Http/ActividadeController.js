'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Actividade = use("App/Models/Actividade")
const Area = use("App/Models/Area")
/**
 * Resourceful controller for interacting with actividades
 */
class ActividadeController {
  /**
   * Show a list of all actividades.
   * GET actividades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    let areas = (await Area.query().where({id_gerencia: user.remember_token}).fetch()).toJSON()
    const data = request.all()
    let tareas = (await Actividade.query().where({id_planificacion: data.id_planificacion}).fetch()).toJSON()
    response.send({tareas, areas})
  }

  /**
   * Render a form to be used for creating a new actividade.
   * GET actividades/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new actividade.
   * POST actividades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single actividade.
   * GET actividades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing actividade.
   * GET actividades/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update actividade details.
   * PUT or PATCH actividades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a actividade with id.
   * DELETE actividades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ActividadeController
