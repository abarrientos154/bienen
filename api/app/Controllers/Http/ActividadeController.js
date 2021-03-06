'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Actividade = use("App/Models/Actividade")
const Area = use("App/Models/Area")
const Planificacione = use("App/Models/Planificacion")
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
  async info_filtrada ({ request, response, auth }) {
    /* const user = (await auth.getUser()).toJSON()
    let areas = (await Area.query().where({id_gerencia: user.remember_token}).fetch()).toJSON() */
    const data = request.all()
    let tareas = (await Actividade.query().where({id_area: data.area}).fetch()).toJSON()
    var planificaciones = []
    for (let x = 0; x < tareas.length; x++) {
      const element = tareas[x];
      if (!planificaciones.find(v => v == element.id_planificacion)) {
        planificaciones.push(element.id_planificacion)
      }
    }
    var totales_por_year = {}
    for (let x = 0; x < planificaciones.length; x++) {
      const element = planificaciones[x];
      let plani = (await Planificacione.query().where({id: element}).fetch()).toJSON()
      //console.log(plani, '-*-')
      if (!totales_por_year.hasOwnProperty(plani[0].anio)){
        totales_por_year[plani[0].anio] = []
        totales_por_year[plani[0].anio].push(plani[0])
      } else {  
        totales_por_year[plani[0].anio].push(plani[0])
      }
    }
    var resp = totales_por_year[data.year]
    resp = resp.find(v => v.semana == data.week)
    console.log(resp, 'aqui')
    let fin = (await Actividade.query().where({id_planificacion: resp.id, id_area: data.area}).fetch()).toJSON()
    var info = {}
    info.pm01 = fin.filter(v => v.tipo == 'PM01')
    info.pm01hh = 0
    for (let x = 0; x < info.pm01.length; x++) {
      const element = info.pm01[x]
      info.pm01hh += element.duracion_real
    }
    info.pm02 = fin.filter(v => v.tipo == 'PM02')
    info.pm02hh = 0
    for (let x = 0; x < info.pm02.length; x++) {
      const element = info.pm02[x]
      info.pm02hh += element.duracion_real
    }
    info.pm03 = fin.filter(v => v.tipo == 'PM03')
    info.pm03hh = 0
    for (let x = 0; x < info.pm03.length; x++) {
      const element = info.pm03[x]
      info.pm03hh += element.duracion_real
    }
    response.send(info)
  }
  async info_filtrada_annio ({ request, response, auth }) {
    const data = request.all()
    let tareas = (await Actividade.query().where({id_area: data.area}).fetch()).toJSON()
    var planificaciones = []
    for (let x = 0; x < tareas.length; x++) {
      const element = tareas[x];
      if (!planificaciones.find(v => v == element.id_planificacion)) {
        planificaciones.push(element.id_planificacion)
      }
    }
    var totales_por_year = {}
    for (let x = 0; x < planificaciones.length; x++) {
      const element = planificaciones[x];
      let plani = (await Planificacione.query().where({id: element}).fetch()).toJSON()
      //console.log(plani, '-*-')
      if (!totales_por_year.hasOwnProperty(plani[0].anio)){
        totales_por_year[plani[0].anio] = []
        totales_por_year[plani[0].anio].push(plani[0])
      } else {  
        totales_por_year[plani[0].anio].push(plani[0])
      }
    }
    var resp = totales_por_year[data.year]
    //resp = resp.find(v => v.semana == data.week)
    var totalActividades = []
    console.log(resp, 'aqui')
    for (let x = 0; x < resp.length; x++) {
      const element = resp[x];
      var fin = (await Actividade.query().where({id_planificacion: element.id, id_area: data.area}).fetch()).toJSON()
      totalActividades = totalActividades.concat(fin)
      //console.log(totalActividades, fin)
    }
    var info = {}
    info.pm01 = totalActividades.filter(v => v.tipo == 'PM01')
    info.pm01_si = info.pm01.filter(v => v.realizada == 'Si').length
    info.pm01_no = info.pm01.filter(v => v.realizada == 'No').length

    info.pm02 = totalActividades.filter(v => v.tipo == 'PM02')
    info.pm02_si = info.pm02.filter(v => v.realizada == 'Si').length
    info.pm02_no = info.pm02.filter(v => v.realizada == 'No').length
   
    info.pm03 = totalActividades.filter(v => v.tipo == 'PM03')
    info.pm03hh = 0
    for (let x = 0; x < info.pm03.length; x++) {
      const element = info.pm03[x]
      info.pm03hh += element.duracion_real
    }
    response.send({info, resp})
  }
  async index ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    let areas = (await Area.query().where({id_gerencia: user.remember_token}).fetch()).toJSON()
    /* const data = request.all()
    let tareas = (await Actividade.query().where({id_area: data.id_planificacion}).fetch()).toJSON() */

    response.send({user, areas})
  }
  async por_area ({ params, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    //let areas = (await Area.query().where({id_gerencia: user.remember_token}).fetch()).toJSON()
    let tareas = (await Actividade.query().where({id_area: params.id}).fetch()).toJSON()
    var planificaciones = []
    for (let x = 0; x < tareas.length; x++) {
      const element = tareas[x];
      if (!planificaciones.find(v => v == element.id_planificacion)) {
        planificaciones.push(element.id_planificacion)
      }
    }
    var totales_por_year = {}
    for (let x = 0; x < planificaciones.length; x++) {
      const element = planificaciones[x];
      let plani = (await Planificacione.query().where({id: element}).fetch()).toJSON()
      //console.log(plani, '-*-')
      if (!totales_por_year.hasOwnProperty(plani[0].anio)){
        totales_por_year[plani[0].anio] = []
        totales_por_year[plani[0].anio].push(plani[0])
      } else {  
        totales_por_year[plani[0].anio].push(plani[0])
      }
    }
    var data_final = {}
    var annios = []
    for (let prop in totales_por_year) {
      annios.push(prop)
      data_final[prop] = []
      for (let x = 0; x < totales_por_year[prop].length; x++) {
        const element = totales_por_year[prop][x];
        if (!data_final[prop].find(v=> v == element.semana)){
          data_final[prop].push(element.semana)
        }
      }
    }
    response.send({data: data_final, years: annios})
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
