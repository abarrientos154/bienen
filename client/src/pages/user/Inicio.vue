<template>
    <div>
        <div class="q-pa-sm row justify-between" style="height: 100%;" v-if="movil === false">
            <div class="column col-2">
                <div class="q-mb-md row justify-center">
                    <q-img :src="url" spinner-color="white" style="height: auto; width: 50px"/>
                </div>
                <div class="q-pa-md" style="width: 100%">
                    <q-list bordered padding class="rounded-borders text-primary">
                        <q-item clickable v-ripple :active="seleccion === i" v-for="(i, index) in plantas" :key="index" @click="mostrarDatos(i)" active-class="my-menu-link">
                            <q-item-section>{{i.area}}</q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>
            <q-separator vertical color="black"/>
            <div class="column col-6">
                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-label class="text-h6 text-black text-weight-bolder">{{area.area ? area.area : 'Planta'}}</q-item-label>
                    <div class="row">
                        <q-select class="col-1 q-ml-xs" :disable="!area" rounded outlined label="Año" v-model="year" dense :options="years" style="width: 80px" @input="change"/>
                        <q-select class="col-2 q-ml-xs" :disable="!year" rounded outlined label="Semana" v-model="week" dense :options="weeks" style="width: 110px" @input="infoFiltrada"/>
                    </div>
                </q-card>
                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-label class="text-black text-weight-bolder">Actividades Planificadas</q-item-label>
                </q-card>
                <div class="row justify-between">
                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                        <q-item-section>
                            <q-item-label class="text-black">Cantidad de PMO1: {{form.pm01 ? form.pm01.length : '00'}}</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                        <q-item-section>
                            <q-item-label class="text-black">Distribucion de HH: {{form.pm01hh ? form.pm01hh : '00'}}h</q-item-label>
                        </q-item-section>
                    </q-card>
                </div>
                <div class="row justify-between">
                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                        <q-item-section>
                            <q-item-label class="text-black">Cantidad de PMO2: {{form.pm02 ? form.pm02.length : '00'}}</q-item-label>
                        </q-item-section>
                    </q-card>
                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                        <q-item-section>
                            <q-item-label class="text-black">Distribucion de HH: {{form.pm02hh ? form.pm02hh : '00'}}h</q-item-label>
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
                                    <q-item-label class="text-black">{{form.pm01 ? form.pm01.filter(v => v.realizada == 'Si').length : '00'}}</q-item-label>
                                </q-item-section>
                            </q-card>
                            <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                                <q-item-section class="items-center">
                                    <q-item-label class="text-black">No Hechos</q-item-label>
                                    <q-item-label class="text-black">{{form.pm01 ? form.pm01.filter(v => v.realizada == 'No').length : '00'}}</q-item-label>
                                </q-item-section>
                            </q-card>
                        </div>
                    </div>
                    <div class="col">
                        <q-card class="bg-secondary col items-center q-pa-xs q-mr-xs justify-between" style="border-radius: 0px;">
                            <q-item-label class="text-center text-black">PMO2</q-item-label>
                        </q-card>
                        <div class="row">
                            <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                                <q-item-section class="items-center">
                                    <q-item-label class="text-black">Hechos</q-item-label>
                                    <q-item-label class="text-black">{{form.pm02 ? form.pm02.filter(v => v.realizada == 'Si').length : '00'}}</q-item-label>
                                </q-item-section>
                            </q-card>
                            <q-card class="bg-info col items-center row q-pa-sm q-mr-xs justify-between" style="border-radius: 0px;">
                                <q-item-section class="items-center">
                                    <q-item-label class="text-black">No Hechos</q-item-label>
                                    <q-item-label class="text-black">{{form.pm02 ? form.pm02.filter(v => v.realizada == 'No').length : '00'}}</q-item-label>
                                </q-item-section>
                            </q-card>
                        </div>
                    </div>
                </div>
                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-label class="text-black text-weight-bolder">Actividades Imprevistas</q-item-label>
                </q-card>
                <div class="row justify-between">
                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                        <q-item-label class="text-black">Cantidad de PMO3: {{form.pm03 ? form.pm03.length : '00'}}</q-item-label>
                    </q-card>
                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                        <q-item-label class="text-black">Distribucion de HH: {{form.pm03hh ? form.pm03hh : '00'}}h</q-item-label>
                    </q-card>
                </div>
                <q-card class="bg-primary items-center q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-label class="text-black text-weight-bolder">Adherencia al Plan</q-item-label>
                </q-card>
                <q-card class="row bg-secondary items-center q-pa-sm q-mx-xs justify-between" style="border-radius: 8px;">
                    <GChart style="width: 100%" type="ColumnChart" :data="chartData" :options="chartOptions"/>
                </q-card>
            </div>
            <q-separator vertical color="black" />
            <div class="column col-3">
                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                    <q-item-section>
                        <q-item-label class="text-black text-weight-bolder">{{user.name}}</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                        <q-avatar class="bg-white" icon="person" size="40px"></q-avatar>
                    </q-item-section>
                    <q-btn class="q-ml-xs" round size="8px" color="secondary" icon="logout" @click="$router.push('/login')"/>
                </q-card>
                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm" style="border-radius: 8px;">
                    <q-avatar rounded icon="insert_photo" class=" bg-white" style="width: 100%; height: 100px;"></q-avatar>
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
                        <q-item-label class="text-center text-black">Total Actividades</q-item-label>
                    </q-card>
                    <div class="row">
                        <q-card class="bg-info col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">PMO1</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
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
                        <q-card class="bg-info col items-center row q-pa-sm q-ml-xs justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">Cantidad</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                        <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                            <q-item-section class="items-center">
                                <q-item-label class="text-black">HH</q-item-label>
                                <q-item-label class="text-black">00</q-item-label>
                            </q-item-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <q-layout view="lhh LpR lff" container style="height: 600px">
                <q-header reveal class="bg-primary">
                    <q-toolbar>
                        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
                        <div class="row justify-center">
                            <q-img :src="url" spinner-color="white" style="height: auto; width: 20px"/>
                        </div>
                        <q-toolbar-title>Bienen</q-toolbar-title>
                        <q-item-section avatar>
                            <q-avatar class="bg-white text-black" icon="person" size="40px"></q-avatar>
                        </q-item-section>
                        <q-btn round size="8px" color="secondary" icon="logout" @click="$router.push('/login')"/>
                    </q-toolbar>
                </q-header>
                <q-drawer v-model="drawerLeft" :width="150" :breakpoint="700" bordered content-class="bg-grey-3">
                    <q-scroll-area class="fit">
                        <div class="q-pa-sm">
                            <div class="q-mb-sm row justify-center">
                                <q-img :src="url" spinner-color="white" style="height: auto; width: 50px"/>
                            </div>
                            <div>
                            </div>
                            <div class="q-pa-sm" style="width: 100%">
                                <q-list bordered padding class="rounded-borders text-primary">
                                    <q-item clickable v-ripple :active="seleccion === i" v-for="(i, index) in plantas" :key="index" @click="mostrarDatos(i)" active-class="my-menu-link">
                                        <q-item-section>{{i.area}}</q-item-section>
                                    </q-item>
                                </q-list>
                            </div>
                        </div>
                    </q-scroll-area>
                </q-drawer>
                <q-page-container>
                    <q-page style="padding-top: 60px" class="q-pa-md">
                        <div class="row">
                            <div class="column col">
                                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                                    <q-item-label class="text-black text-weight-bolder">Actividades Planificadas</q-item-label>
                                </q-card>
                                <div class="row justify-between">
                                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                                        <q-item-section>
                                            <q-item-label class="text-black">Cantidad de PMO1: {{form.pm01 ? form.pm01.length : '00'}}</q-item-label>
                                        </q-item-section>
                                    </q-card>
                                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                                        <q-item-section>
                                            <q-item-label class="text-black">Distribucion de HH: {{form.pm01hh ? form.pm01hh : '00'}}h</q-item-label>
                                        </q-item-section>
                                    </q-card>
                                </div>
                                <div class="row justify-between">
                                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                                        <q-item-section>
                                            <q-item-label class="text-black">Cantidad de PMO2: {{form.pm02 ? form.pm02.length : '00'}}</q-item-label>
                                        </q-item-section>
                                    </q-card>
                                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                                        <q-item-section>
                                            <q-item-label class="text-black">Distribucion de HH: {{form.pm02hh ? form.pm02hh : '00'}}h</q-item-label>
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
                                                    <q-item-label class="text-black">{{form.pm01 ? form.pm01.filter(v => v.realizada == 'Si').length : '00'}}</q-item-label>
                                                </q-item-section>
                                            </q-card>
                                            <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                                                <q-item-section class="items-center">
                                                    <q-item-label class="text-black">No Hechos</q-item-label>
                                                    <q-item-label class="text-black">{{form.pm01 ? form.pm01.filter(v => v.realizada == 'No').length : '00'}}</q-item-label>
                                                </q-item-section>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <q-card class="bg-secondary col items-center q-pa-xs q-mr-xs justify-between" style="border-radius: 0px;">
                                            <q-item-label class="text-center text-black">PMO2</q-item-label>
                                        </q-card>
                                        <div class="row">
                                            <q-card class="bg-info col items-center row q-pa-sm justify-between" style="border-radius: 0px;">
                                                <q-item-section class="items-center">
                                                    <q-item-label class="text-black">Hechos</q-item-label>
                                                    <q-item-label class="text-black">{{form.pm02 ? form.pm02.filter(v => v.realizada == 'Si').length : '00'}}</q-item-label>
                                                </q-item-section>
                                            </q-card>
                                            <q-card class="bg-info col items-center row q-pa-sm q-mr-xs justify-between" style="border-radius: 0px;">
                                                <q-item-section class="items-center">
                                                    <q-item-label class="text-black">No Hechos</q-item-label>
                                                    <q-item-label class="text-black">{{form.pm02 ? form.pm02.filter(v => v.realizada == 'No').length : '00'}}</q-item-label>
                                                </q-item-section>
                                            </q-card>
                                        </div>
                                    </div>
                                </div>
                                <q-card class="bg-primary items-center row q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                                    <q-item-label class="text-black text-weight-bolder">Actividades Imprevistas</q-item-label>
                                </q-card>
                                <div class="row justify-between">
                                    <q-card class="bg-info col-5 items-center row q-pa-sm q-ml-xs q-mb-sm justify-between">
                                        <q-item-label class="text-black">Cantidad de PMO3: {{form.pm03 ? form.pm03.length : '00'}}</q-item-label>
                                    </q-card>
                                    <q-card class="bg-info col-6 items-center row q-pa-sm q-mr-xs q-mb-sm justify-between">
                                        <q-item-label class="text-black">Distribucion de HH: {{form.pm03hh ? form.pm03hh : '00'}}h</q-item-label>
                                    </q-card>
                                </div>
                                <q-card class="bg-primary items-center q-pa-sm q-mx-xs q-mb-sm justify-between" style="border-radius: 8px;">
                                    <q-item-label class="text-black text-weight-bolder">Adherencia al Plan</q-item-label>
                                </q-card>
                                <q-card class="row bg-secondary items-center q-pa-sm q-mx-xs justify-between" style="border-radius: 8px;">
                                    <GChart style="width: 100%" type="ColumnChart" :data="chartData" :options="chartOptions"/>
                                </q-card>
                            </div>
                        </div>
                        <q-page-sticky position="top" expand class="bg-secondary text-white">
                            <q-toolbar>
                                <q-toolbar-title class="text-black text-weight-bolder">{{area.area ? area.area : 'Planta'}}</q-toolbar-title>
                                <div class="row">
                                    <q-select class="col q-ml-xs" :disable="!area" rounded outlined label="Año" v-model="year" dense :options="years" @input="change"/>
                                    <q-select class="col q-ml-xs" :disable="!year" rounded outlined label="Semana" v-model="week" dense :options="weeks" @input="infoFiltrada"/>
                                </div>
                            </q-toolbar>
                        </q-page-sticky>
                    </q-page>
                </q-page-container>
            </q-layout>
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  data () {
    return {
      loading: false,
      form: {
      },
      user: {
        name: 'Invitado'
      },
      isPwd: true,
      semana: '',
      plantas: [],
      years: [],
      year: '',
      weeks: [],
      week: '',
      allData: [],
      info: [],
      bar: false,
      area: {},
      url: 'Logotipo.png',
      chartDataHeader: ['Element', 'Realizadas', 'No Realizadas', { role: 'annotation' }],
      charDataRows: [
        ['Mes', 20, 80, '']
      ],
      updatedChartData: [
        ['Mes', 20, 80, '']
      ],
      seleccion: '',
      movil: true,
      drawerLeft: false,
      datos: [
        { name: 'a' },
        { name: 'b' },
        { name: 'c' },
        { name: 'd' },
        { name: 'e' }
      ],
      chartOptions: {
        title: 'Porcentaje de adherencia al plan semanal',
        height: 200,
        bar: { groupWidth: '50%' },
        legend: { position: 'top' },
        isStacked: 'percent',
        vAxis: { minValue: 0, ticks: [0, 0.25, 0.5, 0.75, 1] }
      },
      pp: ''
    }
  },
  mounted () {
    this.pp = this.$q.platform.is.desktop
    console.log(this.pp)
    this.getData()
  },
  computed: {
    chartData () {
      console.log([this.chartDataHeader, ...this.updatedChartData], 'www')
      return [this.chartDataHeader, ...this.updatedChartData]
    }
  },
  methods: {
    updateData (data) {
      console.log(this.updatedChartData, data, 'luj')
      this.updatedChartData[0] = data
      this.info = [this.chartDataHeader, ...this.updatedChartData]
      this.bar = true
    },
    infoFiltrada () {
      this.$q.loading.show({
        message: 'Cargando Datos'
      })
      this.$api.post('info_filtrada', { week: this.week, year: this.year, area: this.area.id }).then(v => {
        if (v) {
          this.form = v
          console.log(this.chartData)
          const a = ['Actividades', this.form.pm01.filter(v => v.realizada === 'Si').length + this.form.pm02.filter(v => v.realizada === 'Si').length, this.form.pm01.filter(v => v.realizada === 'No').length + this.form.pm02.filter(v => v.realizada === 'No').length, '']
          this.updateData(a)
          console.log(v)
          console.log(this.chartData)
          this.$q.loading.hide()
        }
        this.$q.loading.hide()
      })
    },
    change () {
      console.log(this.allData, this.year)
      this.weeks = this.allData.data[this.year].sort(function (a, b) {
        return a - b
      })
    },
    getData () {
      this.$api.get('index').then(v => {
        if (v) {
          this.user = v.user
          this.plantas = v.areas
        }
        console.log(v)
      })
    },
    mostrarDatos (element) {
      this.seleccion = element
      this.$q.loading.show({
        message: 'Cargando Datos'
      })
      this.$api.get('por_area/' + element.id).then(v => {
        if (v) {
          this.area = element
          this.years = v.years
          this.allData = v
          this.$q.loading.hide()
        }
        console.log(v)
        this.$q.loading.hide()
      })
    //   console.log('mostrando datos de la planta' + index)
    }
  },
  components: {
    GChart
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: blue
</style>
