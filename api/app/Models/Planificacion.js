'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Planificacion extends Model {
     static get table () {
    return 'planificacion'
  }
}

module.exports = Planificacion
