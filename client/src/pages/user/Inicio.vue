<template>
    <div class="row justify-between" style="height: 100%;">
        <div class="column col-2">
            <div avatar class="row justify-center" >
                <q-avatar rounded class="q-mb-sm" color="primary" text-color="white">Log</q-avatar>
            </div>
            <q-list >
                <q-card class="q-mx-xs q-mb-sm items-center row justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <div class="text-center q-pa-sm text-weight-bolder text-black">Planta</div>
                </q-card>
            </q-list>
        </div>
        <q-separator vertical color="black" />
        <div class="column col-6">
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-label class="text-black">Titulo de planta</q-item-label>
            </q-card>
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: blue; border-radius: 5px;" >
                    <q-item-label class="text-white">Actividades Planificadas</q-item-label>
            </q-card>
            <div class="row justify-between">
                <q-card class="col-4 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-section>
                        <q-item-label class="text-black">PMO1: 00</q-item-label>
                    </q-item-section>
                </q-card>
                <q-card class="col-7 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-section>
                        <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                    </q-item-section>
                </q-card>
            </div>
            <div class="row justify-between">
                <q-card class="col-4 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-section>
                        <q-item-label class="text-black">PMO2: 00</q-item-label>
                    </q-item-section>
                </q-card>
                <q-card class="col-7 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-section>
                        <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                    </q-item-section>
                </q-card>
            </div>
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                <q-item-label class="text-center text-white">Cumplimientos</q-item-label>
            </q-card>
            <div class="q-mb-sm row">
                <div class="col">
                    <q-card class="col items-center q-pa-xs q-ml-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                        <q-item-label class="text-center text-white">PMO1</q-item-label>
                    </q-card>
                    <div class="row">
                        <q-card class="col items-center row q-pa-sm q-ml-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">Si</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">No</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                    </div>
                </div>
                <div class="col">
                    <q-card class="col items-center q-pa-xs q-mr-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                        <q-item-label class="text-center text-white">PMO2</q-item-label>
                    </q-card>
                    <div class="row">
                        <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">Si</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="col items-center row q-pa-sm q-mr-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">No</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                    </div>
                </div>
            </div>
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: blue; border-radius: 5px;" >
                <q-item-label class="text-white">Actividades Imprevistas</q-item-label>
            </q-card>
            <div class="row justify-between">
                <q-card class="col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-label class="text-black">PMO3: 00</q-item-label>
                </q-card>
                <q-card class="col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                </q-card>
            </div>
            <q-card class="items-center q-pa-xs q-mx-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 3px;" >
                <q-item-label class="text-white">Adherencia al Plan</q-item-label>
            </q-card>
        </div>
        <q-separator vertical color="black" />
        <div class="column col-3">
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                <q-item-section>
                    <q-item-label class="text-black text-weight-bolder">Nombre</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <q-avatar size="30px" color="primary" text-color="white">Fot</q-avatar>
                </q-item-section>
            </q-card>
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                <div>
                    <q-img style="width: 100%; height: 65px;" />
                </div>
            </q-card>
            <q-card class="items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 5px;" >
                    <q-item-label class="text-black">Resumen Mes</q-item-label>
            </q-card>
            <div class="q-mb-sm">
                <q-card class="items-center q-pa-xs q-ml-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                    <q-item-label class="text-center text-white">PMO1</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="col items-center row q-pa-sm q-ml-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Si</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">No</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="items-center q-pa-xs q-ml-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                    <q-item-label class="text-center text-white">PMO2</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="col items-center row q-pa-sm q-ml-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Si</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">No</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="items-center q-pa-xs q-ml-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                    <q-item-label class="text-center text-white">Total Act</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="col items-center row q-pa-sm q-ml-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">PMO1</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">PMO2</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="items-center q-pa-xs q-ml-xs justify-between" style=" solid $primary; background-color: blue; border-radius: 0px;" >
                    <q-item-label class="text-center text-white">PMO3</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="col items-center row q-pa-sm q-ml-xs justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Cant</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="col items-center row q-pa-sm justify-between" style=" solid $primary; background-color: rgba(202, 202, 202, 0.474); border-radius: 0px;" >
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">HH</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      form: {
      },
      isPwd: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.post('index', { id_planificacion: 13 }).then(v => {
        if (v) {
          this.plantas = v.areas
        }
        console.log(v)
      })
    }
  }
}
</script>
