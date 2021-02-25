<template>
  <div style="height:100%;width:100%">
    <div class="absolute-center" style="width:35%; height:auto">
      <q-card class="justify-center q-px-md q-py-lg column" style="border-radius: 12px; height:100%">
          <q-input rounded outlined type="email" class="q-mb-md" v-model="form.email" label="Ingrese su email" dense error-message="Este campo es requerido"/>
          <q-input rounded outlined :type="isPwd ? 'password' : 'text'" class="q-mb-md" v-model="form.password" label="Ingrese su contraseña" dense error-message="Este campo es requerido">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
            </template>
          </q-input>
          <q-btn class="q-mx-xl" rounded color="primary" text-color="white" glossy label="Iniciar Sesión" @click="loguear()" :loading="loading"/>
      </q-card>
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
