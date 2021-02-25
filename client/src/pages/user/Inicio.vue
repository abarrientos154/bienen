<template>
    <div class="row justify-between" style="height: 100%;">
        <div class="column col-2">
            <div avatar class="row justify-center">
                <q-avatar rounded class="q-mb-sm" style="width: 75px; height: 75px">
                    <img src="">
                </q-avatar>
            </div>
            <q-list>
                <q-card class="bg-primary q-pa-sm q-mx-xs q-mb-sm items-center row justify-between" v-for="i in 7" :key="i" style="border-radius: 8px;" @click="mostrarDatos(i)">
                    <div class="col text-weight-bolder text-black">Planta: {{i}}</div>
                </q-card>
            </q-list>
        </div>
        <q-separator vertical color="black"/>
        <div class="column col-6">
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-label class="text-h6 text-black text-weight-bolder">Titulo de planta</q-item-label>
                <q-select rounded outlined label="Semana" v-model="semana" dense :options="['Semana 1','Semana 2']" style="width: 125px"/>
            </q-card>
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-label class="text-black text-weight-bolder">Actividades Planificadas</q-item-label>
            </q-card>
            <div class="row justify-between">
                <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                    <q-item-section>
                        <q-item-label class="text-black">Cantidad de PMO1: 00</q-item-label>
                    </q-item-section>
                </q-card>
                <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                    <q-item-section>
                        <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                    </q-item-section>
                </q-card>
            </div>
            <div class="row justify-between">
                <q-card class="bg-positive col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                    <q-item-section>
                        <q-item-label class="text-black">Cantidad de PMO2: 00</q-item-label>
                    </q-item-section>
                </q-card>
                <q-card class="bg-positive col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                    <q-item-section>
                        <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                    </q-item-section>
                </q-card>
            </div>
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-label class="text-black text-weight-bolder">Cumplimientos</q-item-label>
            </q-card>
            <div class="q-mb-sm row">
                <div class="col">
                    <q-card class="bg-secondary col items-center q-pa-xs q-ml-xs justify-between" style="border-radius: 0px;">
                        <q-item-label class="text-center text-black">PMO1</q-item-label>
                    </q-card>
                    <div class="row">
                        <q-card class="bg-info col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">Hechos</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">No Hechos</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                    </div>
                </div>
                <div class="col">
                    <q-card class="bg-secondary col items-center q-pa-xs q-mr-xs justify-between" style="border-radius: 0px;">
                        <q-item-label class="text-center text-black">PMO2</q-item-label>
                    </q-card>
                    <div class="row">
                        <q-card class="bg-positive col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">Hechos</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="bg-positive col items-center row q-pa-sm q-mr-xs justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">No Hechos</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                    </div>
                </div>
            </div>
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-label class="text-black text-weight-bolder">Actividades Imprevistas</q-item-label>
            </q-card>
            <div class="row justify-between">
                <q-card class="bg-warning col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                    <q-item-label class="text-black">Cantidad de PMO3: 00</q-item-label>
                </q-card>
                <q-card class="bg-warning col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                    <q-item-label class="text-black">Distribucion de HH: 00h</q-item-label>
                </q-card>
            </div>
            <q-card class="bg-primary items-center q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-label class="text-black text-weight-bolder">Adherencia al Plan</q-item-label>
            </q-card>
            <q-card class="row bg-secondary items-center q-pa-sm q-mx-xs justify-between" style="border-radius: 8px;">
            </q-card>
        </div>
        <q-separator vertical color="black" />
        <div class="column col-3">
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                <q-item-section>
                    <q-item-label class="text-black text-weight-bolder">Nombre</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <q-avatar size="40px">
                        <img src="">
                    </q-avatar>
                </q-item-section>
            </q-card>
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm" style="border-radius: 8px;">
                <q-avatar rounded class="q-mb-sm" style="width: 100%; height: 100px;">
                    <img src="">
                </q-avatar>
            </q-card>
            <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-label class="text-black text-weight-bolder">Resumen del Mes</q-item-label>
            </q-card>
            <div class="q-mb-sm">
                <q-card class="bg-secondary items-center q-pa-xs q-ml-xs justify-between" style="border-radius: 0px;" >
                    <q-item-label class="text-center text-black">PMO1</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="bg-info col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Hechos</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">No Hechos</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="bg-secondary items-center q-pa-xs q-ml-xs justify-between" style="border-radius: 0px;">
                    <q-item-label class="text-center text-black">PMO2</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="bg-positive col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Hechos</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-positive col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">No Hechos</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="bg-secondary items-center q-pa-xs q-ml-xs justify-between" style="border-radius: 0px;">
                    <q-item-label class="text-center text-black">Total Actividades</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="bg-info col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">PMO1</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-positive col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">PMO2</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
            </div>
            <div class="q-mb-sm">
                <q-card class="bg-secondary items-center q-pa-xs q-ml-xs justify-between" style="border-radius: 0px;">
                    <q-item-label class="text-center text-black">PMO3</q-item-label>
                </q-card>
                <div class="row">
                    <q-card class="bg-warning col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                        <q-item-section class="items-center">
                            <q-item-label class="text-black">Cantidad</q-item-label>
                            <q-item-label class="text-black">00</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-warning col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
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
      semana: ''
    }
  },
  mounted () {
  },
  methods: {
    mostrarDatos (index) {
    //   console.log('mostrando datos de la planta' + index)
    }
  }
}
</script>
