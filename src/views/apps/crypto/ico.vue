<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
  page: {
    title: "Strategies",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Strategies",
      items: [
        {
          text: "Crypto",
          href: "/",
        },
        {
          text: "Strategies",
          active: true,
        },
      ],
      value: null,
      value1: null,
      date: null,
      rangeDateconfig: {
        mode: "range",
        dateFormat: "d M, Y",
      },
      icosData: [
        {
          title: 'Active ICOs',
          icos: [
            {
              icon: '/assets/images/svg/crypto-icons/btc.svg',
              name: 'Data Wallet',
              category: 'Blockchain Services',
              amount: '$15,00,000 / $13,75,954',
              percentage: '89.97%',
              stars: '4.8',
              days: '05 Days',
            },
            {
              icon: '/assets/images/companies/img-6.png',
              name: 'GreatRiver Technology',
              category: 'Information Technology',
              amount: '$39,00,000 / $31,57,654',
              percentage: '84.57%',
              stars: '4.4',
              days: '15 Days',
              visited: 'Visit Website',
            },
            {
              icon: '/assets/images/svg/crypto-icons/vtc.svg',
              name: 'Manta Network Finance',
              category: 'Finance Services',
              amount: '$42,50,000 / $30,84,214',
              percentage: '70.24%',
              stars: '2.7',
              days: '25 Jan, 2022',
              visited: 'Visit Website',
            },
            {
              icon: '/assets/images/svg/crypto-icons/xsg.svg',
              name: 'Goldfinch Network',
              category: 'Blockchain Services',
              amount: '$42,50,000 / $30,84,214',
              percentage: '70.24%',
              stars: '2.7',
              days: '25 Jan, 2022',
              visited: 'Visit Website',
            },
          ]
        },
        {
          title: 'Trading ICOs',
          icos: [
            {
              icon: require('@/assets/images/svg/crypto-icons/bcbc.svg'),
              name: 'PowerCoin',
              category: 'Blockchain Services',
              amount: '$1,50,00,000 / $1,11,65,368',
              percentage: '86.61%',
              stars: '4.9',
              days: '16 Feb, 2022',
            },
            {
              icon: require('@/assets/images/svg/crypto-icons/bix.svg'),
              name: 'Cyber Wonder',
              category: 'Platform',
              amount: '$80,00,000 / $36,40,352',
              percentage: '48.08%',
              stars: '4.7',
              days: '23 Jan, 2022',
            },
            {
              icon: require('@/assets/images/svg/crypto-icons/rise.svg'),
              name: 'RootCoin',
              category: 'Blockchain Services',
              amount: '$95,00,000 / $78,95,041',
              percentage: '76.05%',
              stars: '3.2',
              days: '30 Dec, 2021',
            },
            {
              icon: require('@/assets/images/svg/crypto-icons/ark.svg'),
              name: 'Arcana Finance',
              category: 'Finance Services',
              amount: '$68,00,000 / $45,85,367',
              percentage: '71.16%',
              stars: ' 3.2',
              days: '02 Dec, 2021',
            },
            // List of trading ICOs
            // Example:
            // { name: 'PowerCoin', category: 'Blockchain Services', ... },
            // { name: 'Cyber Wonder', category: 'Platform', ... },
            // Add more trading ICOs as needed
          ]
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    flatPickr,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row class="row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1">
      <b-col>
        <b-card no-body>
          <b-card-body class="d-flex">
            <div class="flex-grow-1">
              <h4>4751</h4>
              <h6 class="text-muted fs-13 mb-0">ICOs Published</h6>
            </div>
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-soft-warning text-warning fs-22 rounded">
                <i class="ri-upload-2-line"></i>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body>
          <b-card-body class="d-flex">
            <div class="flex-grow-1">
              <h4>3423</h4>
              <h6 class="text-muted fs-13 mb-0">Active ICOs</h6>
            </div>
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-soft-success text-success fs-22 rounded">
                <i class="ri-remote-control-line"></i>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body>
          <b-card-body class="d-flex">
            <div class="flex-grow-1">
              <h4>354</h4>
              <h6 class="text-muted fs-13 mb-0">ICOs Trading</h6>
            </div>
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-soft-info text-info fs-22 rounded">
                <i class="ri-flashlight-fill"></i>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body>
          <b-card-body class="d-flex">
            <div class="flex-grow-1">
              <h4>2762</h4>
              <h6 class="text-muted fs-13 mb-0">Funded ICOs</h6>
            </div>
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-soft-danger text-danger fs-22 rounded">
                <i class="ri-hand-coin-line"></i>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body>
          <b-card-body class="d-flex">
            <div class="flex-grow-1">
              <h4>1585</h4>
              <h6 class="text-muted fs-13 mb-0">Upcoming ICO</h6>
            </div>
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-soft-primary text-primary fs-22 rounded">
                <i class="ri-donut-chart-line"></i>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-card no-body>
      <b-card-body>
        <b-row class="g-3">
          <b-col xxl="4" lg="6">
            <div class="search-box">
              <input type="text" class="form-control" placeholder="Search to ICOs..." />
              <i class="ri-search-line search-icon"></i>
            </div>
          </b-col>
          <b-col xxl="3" lg="6">
            <flat-pickr v-model="date" placeholder="Select date" :config="rangeDateconfig" class="form-control">
            </flat-pickr>
          </b-col>
          <b-col xxl="2" lg="4">
            <Multiselect class="form-control" v-model="value" :close-on-select="true" :searchable="true"
              :create-option="true" :options="[
                { value: 'Active', label: 'Active' },
                { value: 'Ended', label: 'Ended' },
                { value: 'Upcoming', label: 'Upcoming' },
              ]" />
          </b-col>
          <b-col xxl="2" lg="4">
            <Multiselect class="form-control" v-model="value1" :close-on-select="true" :searchable="true"
              :create-option="true" :options="[
                { value: '', label: 'Select Rating' },
                { value: '1', label: '1 star' },
                { value: '2', label: '2 star' },
                { value: '3', label: '3 star' },
                { value: '4', label: '4 star' },
                { value: '5', label: '5 star' },
              ]" />
          </b-col>
          <b-col xxl="1" lg="4">
            <b-button variant="primary" class="w-100">
              <i class="ri-equalizer-line align-bottom me-1"></i> Filters
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>

    <b-row>
      <b-col md="12">
        <div class="d-flex mb-2">
          <button class="btn btn-success" >
            <i class="ri-add-line"></i> Add ICOs
          </button>
        </div>
      </b-col>
      <b-col xxl="3" md="6" v-for="(group, index) in icosData" :key="index">
        <b-card no-body class="overflow-hidden">
          <b-card-body class="bg-soft-success">
            <h5 class="fs-17 text-center mb-0">{{ group.title }}</h5>
          </b-card-body>
        </b-card>
        <b-card no-body class="mb-2" v-for="(ico, i) in group.icos" :key="i">
         <b-card-body>
           <div class="d-flex mb-3">
             <div class="flex-shrink-0 avatar-sm">
               <div class="avatar-title bg-light rounded">
                 <img :src="ico.icon" alt="" class="avatar-xxs" />
               </div>
             </div>
             <div class="flex-grow-1 ms-3">
               <h5 class="fs-15 mb-1">{{ ico.name }}</h5>
               <p class="text-muted mb-2">{{ ico.category }}</p>
             </div>
             <div>
               <b-link v-if="ico && ico.visited" href="javascript:void(0);" class="badge badge-soft-primary">{{ ico.visited }}
                 <i class="ri-arrow-right-up-line align-bottom"></i>
               </b-link>
             </div>
           </div>
           <h6 class="text-muted mb-0">
             {{ ico.amount }}
             <b-badge variant="soft-success" class="badge-soft-success">{{ ico.percentage }}</b-badge>
           </h6>
         </b-card-body>
         <b-card-body class="border-top border-top-dashed">
           <div class="d-flex">
             <div class="flex-grow-1">
               <h6 class="mb-0">
                 {{ ico.stars }} <i class="ri-star-fill align-bottom text-warning"></i>
               </h6>
             </div>
             <h6 class="flex-shrink-0 text-danger mb-0">
               <i class="ri-time-line align-bottom"></i> {{ ico.days }}
             </h6>
           </div>
         </b-card-body>
         <div class='d-flex align-items-center justify-content-between m-1'>
            <!-- Button for editing data -->
            <button class="btn btn-outline-warning" >
              <i class="ri-edit-line"></i> Edit
            </button>
            <!-- Button for adding data -->
            <button class="btn btn-outline-danger" >
              <i class="ri-delete-bin-line"></i> Delete
            </button>
         </div>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>
