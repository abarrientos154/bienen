'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use("App/Models/User")
const Hash = use('Hash')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const userData = [
  {
    email: 'npi@mel.cl',
    password: 'bienen2021',
    name: 'Administrador del Sistema',
    remember_token: 1
  },
   {
    email: 'cho@mel.cl',
    password: 'bienen2021',
    name: 'Administrador del Sistema',
    remember_token: 2
  }

]

class UserSeeder {
  async run () {
    for (let i of userData) {
      //let user = await User.find(i._id)
      if (true) {
        await User.create(i)
      }
      else {
      }
    }
    console.log('Finished User')
  }
}

module.exports = UserSeeder
