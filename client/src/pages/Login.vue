<template>
  <div style="height:100%;width:100%">
    <div class="absolute-center" style="width:250px; height:auto">
      <q-card class="justify-between items-center q-px-md q-py-lg column" style="border-radius: 12px; height:100%">
        <div class="q-mb-md row justify-center">
          <q-img :src="url" spinner-color="white" style="height: auto; width: 100px"/>
        </div>
        <q-input rounded outlined type="email" class="q-mb-md" v-model="form.email" label="Ingrese su email" dense error-message="Este campo es requerido" style="width: 100%"/>
        <q-input rounded outlined :type="isPwd ? 'password' : 'text'" class="q-mb-md" v-model="form.password" label="Ingrese su contraseña" dense error-message="Este campo es requerido" style="width: 100%">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
          </template>
        </q-input>
        <q-btn rounded color="primary" text-color="white" glossy label="Iniciar Sesión" @click="loguear()" :loading="loading"/>
        <q-btn rounded color="secondary" text-color="white" glossy label="Iniciar Sesión" @click="$router.push('/inicio')" :loading="loading"/>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      loading: false,
      form: {
      },
      isPwd: true,
      url: 'Logotipo.png'
    }
  },
  validations: {
    form: {
      email: { required },
      password: { required }
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    loguear () {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login', this.form).then(res => {
        if (res) {
          console.log(res, 'ressssssssssss')
          this.user = res.TRI_SESSION_INFO
          console.log('user', this.user)
          this.login(res)
          this.$router.push('/inicio')
        } else {
          console.log('error de ususario')
          this.loading = false
          this.$q.loading.hide()
        }
        this.$q.loading.hide()
      })
    }
  }
}
</script>
