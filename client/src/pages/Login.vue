<template>
  <div style="height:100%;width:100%">
    <div class="absolute-center" style="width:80%; height:85%">
      <div class="absolute-center full-width">
          <div class="row justify-center">
            <q-input
              style="width: 100%"
              autofocus
              outlined
              v-model="form.email"
              error-message="Este campo es requerido"
              type="email"
              placeholder="Ingrese su email" />
          </div>
          <div class="row justify-center q-mt-md">
            <q-input
              style="width: 100%"
              autofocus
              outlined
              v-model="form.password"
              error-message="Este campo es requerido"
              :type="isPwd ? 'password' : 'text'"
              placeholder="Ingrese su contraseña">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
            </q-input>
          </div>
          <div class="q-mt-md row justify-center">
              <q-btn color="primary" text-color="white" label="Iniciar Sesión" :loading="loading" @click="loguear()"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      loading: false,
      form: {
      },
      isPwd: true
    }
  },
  validations: {
    form: {
      email: { required },
      password: { required }
    }
  },
  methods: {
    loguear () {
      if (this.form.email === 'admin@bienen.com' && this.form.password === '1234') {
        this.$router.push('/inicio')
      }
    }
  }
}
</script>
