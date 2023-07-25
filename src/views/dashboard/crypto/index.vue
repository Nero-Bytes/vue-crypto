// used
<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import SwiperCore, { Thumbs, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Thumbs, Pagination, Navigation]);

import Portfolio from "./portfolio.vue";
// import PositionTable from '../../apps/crypto/positions.vue';
// import MarketGraph from "./market-graph.vue";
import News from "./news.vue";
import RecentActivity from "./recent-activity.vue";
import TopProgram from "./top-performers.vue";
import Currencies from "./currencies.vue";
import Trading from "./trading.vue";

export default {
  page: {
    title: "Crypto",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Crypto",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
        {
          text: "Crypto",
          active: true,
        },
      ],
      value2: null,
      chartcolors: {
        colors: ["#f17171"],
      },
      cyptoWidgets: [
        {
          id: 1,
          icon: "ri-money-dollar-circle-fill",
          label: "Total Invested",
          counter: "2390.68",
          badge: "ri-arrow-up-s-fill",
          badgeColor: "success",
          percentage: "6.24",
        },
        {
          id: 2,
          icon: "ri-arrow-up-circle-fill",
          label: "Total Change",
          counter: "19523.25",
          badge: "ri-arrow-up-s-fill",
          badgeColor: "success",
          percentage: "3.67",
        },
        {
          id: 3,
          icon: "ri-arrow-down-circle-fill",
          label: "Day Change",
          counter: "14799.44",
          badge: "ri-arrow-down-s-fill",
          badgeColor: "danger",
          percentage: "4.80",
        },
      ],
      cryptoSlider: [
        {
          id: 1,
          img: require("@/assets/images/svg/crypto-icons/btc.svg"),
          label: "Bitcoin",
          price: "$1,523,647",
          change: "+13.11%",
          changeClass: "success",
          coinName: "btc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Bitcoin",
              data: [85, 68, 35, 90, 8, 11, 26, 54],
            },
          ],
        },
        {
          id: 2,
          img: require("@/assets/images/svg/crypto-icons/ltc.svg"),
          label: "Litecoin",
          price: "$2,145,687",
          change: "+15.08%",
          changeClass: "success",
          coinName: "ltc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Litecoin",
              data: [25, 50, 41, 87, 12, 36, 9, 54],
            },
          ],
        },
        {
          id: 3,
          img: require("@/assets/images/svg/crypto-icons/eth.svg"),
          label: "Eathereum",
          price: "$3,312,870",
          change: "+08.57%",
          changeClass: "success",
          coinName: "etc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Eathereum",
              data: [36, 21, 65, 22, 35, 50, 29, 44],
            },
          ],
        },
        {
          id: 4,
          img: require("@/assets/images/svg/crypto-icons/bnb.svg"),
          label: "Binance",
          price: "$1,820,045",
          change: "-09.21%",
          changeClass: "danger",
          coinName: "bnb",
          chartsColor: "#F06548",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#F06548"],
          },
          series: [
            {
              name: "Binance",
              data: [30, 58, 29, 89, 12, 36, 9, 54],
            },
          ],
        },
        {
          id: 5,
          img: require("@/assets/images/svg/crypto-icons/dash.svg"),
          label: "Dash",
          price: "$9,458,153",
          change: "+12.07%",
          changeClass: "success",
          coinName: "dash",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Dash",
              data: [24, 68, 39, 86, 29, 42, 11, 58],
            },
          ],
        },
        {
          id: 6,
          img: require("@/assets/images/svg/crypto-icons/usdt.svg"),
          label: "Tether",
          price: "$5,201,458",
          change: "+14.99%",
          changeClass: "success",
          coinName: "usdt",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Dash",
              data: [13, 76, 12, 85, 25, 60, 9, 54],
            },
          ],
        },
        {
          id: 7,
          img: require("@/assets/images/svg/crypto-icons/neo.svg"),
          label: "NEO",
          price: "$6,147,957",
          change: "-05.07%",
          changeClass: "danger",
          coinName: "neo",
          chartsColor: "#F06548",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#F06548"],
          },
          series: [
            {
              name: "Neo",
              data: [9, 66, 41, 89, 12, 36, 25, 54],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          width: 130,
          height: 46,
          type: "area",
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1.5,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [50, 100, 100, 100],
          },
        },
        colors: ["#67b173"],
      },
      transactions: [
        {
          icon: "ri-arrow-right-up-fill",
          date: "24 Dec, 2021",
          time: "08:58AM",
          image: require("@/assets/images/svg/crypto-icons/btc.svg"),
          currency: "BTC",
          from: "Wallet",
          to: "Thomas Taylor",
          details: "Membership Fees",
          id: "16b1d9234b61e8778d9e3588f20",
          type: "Withdraw",
          amount: "-142.35 BTC",
          amount1: "$697.88k",
          status: "Processing",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "16 Dec, 2021",
          time: "10:58AM",
          image: require("@/assets/images/svg/crypto-icons/eth.svg"),
          currency: "ETH",
          from: "Tonya Noble",
          to: "Wallet",
          details: "Spring Telephone Network",
          id: "0a4b5e0e15d70ce79809eabbe",
          type: "Deposit",
          amount: "+342.35 ETH",
          amount1: "$14565.35",
          status: "Success",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "04 Jan, 2021",
          time: "10:58AM",
          image: require("@/assets/images/svg/crypto-icons/eur.svg"),
          currency: "EUR",
          from: "Nancy Martino",
          to: "Wallet",
          details: "Funding Purse with Payment Check",
          id: "cca3da2b7711985361825f615e9",
          type: "Deposit",
          amount: "+174.23 EUR",
          amount1: "$354.14",
          status: "Failed",
        },
        {
          icon: "ri-arrow-right-up-fill",
          date: "28 Oct, 2021",
          time: "11:42AM",
          image: require("@/assets/images/svg/crypto-icons/gbp.svg"),
          currency: "GBP",
          from: "Wallet",
          to: "Michael Morris",
          details: "British Pound Sterling Block",
          id: "062e0e0123f2b1e9862f659c28",
          type: "Withdraw",
          amount: "-365.00 GBP",
          amount1: "$7532.21",
          status: "Success",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "14 Nov, 2021",
          time: "12:38PM",
          image: require("@/assets/images/svg/crypto-icons/jpy.svg"),
          currency: "JPY",
          from: "Alexis Clarke",
          to: "Wallet",
          details: "Platinum Business",
          id: "1deffa9713917ee0af26bbb5f272",
          type: "Deposit",
          amount: "+341.74 JPY",
          amount1: "$748.10",
          status: "Processing",
        },
        {
          icon: "ri-arrow-right-up-fill",
          date: "02 Jan, 2021",
          time: "08:58AM",
          image: require("@/assets/images/svg/crypto-icons/xrp.svg"),
          currency: "XRP",
          from: "Wallet",
          to: "Kevin Dawson",
          details: "Business Advantage Fundaments - Banking",
          id: "186aa96d8014061d994f025ac4",
          type: "Withdraw",
          amount: "-240.74 XRP",
          amount1: "$3254.20",
          status: "Failed",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "17 Oct, 2021",
          time: "07:08PM",
          image: require("@/assets/images/svg/crypto-icons/ltc.svg"),
          currency: "LTC",
          from: "Tonya Noble",
          to: "Wallet",
          details: "Litecoin Sale",
          id: "c94b5581418c41c2c74448a5ec",
          type: "Deposit",
          amount: "+298.72 LTC",
          amount1: "$149.32",
          status: "Success",
        },
        {
          icon: "ri-arrow-right-up-fill",
          date: "27 Dec, 2021",
          time: "01:24PM",
          image: require("@/assets/images/svg/crypto-icons/xmr.svg"),
          currency: "XMR",
          from: "Wallet",
          to: "Mary Cousar",
          details: "Monero Purchase",
          id: "9a592451d1b0e0e5af6d4908f7",
          type: "Withdraw",
          amount: "-365.13 XMR",
          amount1: "$754.91",
          status: "Failed",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "23 Dec, 2021",
          time: "01:47AM",
          image: require("@/assets/images/svg/crypto-icons/xpm.svg"),
          currency: "XPM",
          from: "Glen Matney",
          to: "Wallet",
          details: "British Pound Sterling Block",
          id: "c1bf44fd100fff59a5c64c28dfe0",
          type: "Deposit",
          amount: "+174.09 XPM",
          amount1: "$657.28",
          status: "Processing",
        },
        {
          icon: "ri-arrow-left-down-fill",
          date: "15 Dec, 2021",
          time: "08:58AM",
          image: require("@/assets/images/svg/crypto-icons/ppt.svg"),
          currency: "PPT",
          from: "Timothy Smith",
          to: "Wallet",
          details: "British Pound Sterling Block",
          id: "v98p141d5f4j145614sdsa78gh48t98",
          type: "Withdraw",
          amount: "-142.35 PPT",
          amount1: "$398.35",
          status: "Success",
        },
      ],
      page: 1,
      perPage: 9,
      pages: [],
      searchQuery: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    Portfolio,
    // PositionTable,
    // MarketGraph,
    Multiselect,
    RecentActivity,
    TopProgram,
    News,
    Currencies,
    Trading,
    Swiper,
    SwiperSlide,
  },
  computed: {
    sortTransactions() {
      return this.dateSort(this.transactions);
    },

    displayedPosts() {
      return this.paginate(this.sortTransactions);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.date.toLowerCase().includes(search) ||
            data.time.toLowerCase().includes(search) ||
            data.from.toLowerCase().includes(search) ||
            data.to.toLowerCase().includes(search) ||
            data.details.toLowerCase().includes(search) ||
            data.amount.toLowerCase().includes(search) ||
            data.amount1.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.type.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    transactions() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    dateSort(inputArray) {
      return inputArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    setPages() {
      let numberOfPages = Math.ceil(this.transactions.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(transactions) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return transactions.slice(from, to);
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <b-row>
      <b-col xxl="3">
        <Portfolio />
      </b-col>

      <b-col xxl="9" order-xxl="0" class="order-first">
        <b-row>
          <b-col
            lg="4"
            md="6"
            v-for="(item, index) of cyptoWidgets"
            :key="index"
          >
            <b-card no-body>
              <b-card-body>
                <div class="d-flex align-items-center">
                  <div class="avatar-sm flex-shrink-0">
                    <span
                      class="avatar-title bg-light text-primary rounded-circle fs-3"
                    >
                      <i :class="`${item.icon} align-middle`"></i>
                    </span>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                      {{ item.label }}
                    </p>
                    <h4 class="mb-0">
                      $
                      <span class="counter-value">
                        {{ item.counter }}
                      </span>
                    </h4>
                  </div>
                  <div class="flex-shrink-0 align-self-end">
                    <span :class="`badge badge-soft-${item.badgeColor}`">
                      <i :class="`${item.badge} align-middle me-1`"></i>
                      {{ item.percentage }} %
                      <span></span>
                    </span>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col xl="12">
            <div class="d-flex justify-content-center gap-2">
              <div class="btn btn-info">
                <i class="ri-dashboard-line"></i>
              </div>
              <div class="btn btn-info">
              <i class="ri-coin-line"></i>
              </div>
            </div>
            <!-- <PositionTable /> -->
            <!-- <MarketGraph /> -->
            <!-- position table content here start -->

            <b-row class="align-items-center mb-4 g-3">
              <b-col sm="3">
                <div class="d-flex align-items-center gap-2">
                  <span class="text-muted flex-shrink-0">Sort by: </span>

                  <Multiselect
                    class="form-control"
                    v-model="value2"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="[
                      { value: 'All', label: 'All' },
                      { value: 'USD', label: 'USD' },
                      { value: 'ETH', label: 'ETH' },
                      { value: 'BTC', label: 'BTC' },
                      { value: 'EUR', label: 'EUR' },
                      { value: 'JPY', label: 'JPY' },
                    ]"
                  />
                </div>
              </b-col>
              <b-col sm="auto" class="ms-auto">
                <div class="d-flex gap-2">
                  <b-link href="javascript:void(0);" class="btn btn-info"
                    >Deposite</b-link
                  >
                  <b-link href="javascript:void(0);" class="btn btn-danger"
                    >Withdraw</b-link
                  >
                </div>
              </b-col>
            </b-row>

            <b-card no-body id="contactList">
              <b-card-header>
                <b-row class="align-items-center g-3">
                  <b-col md="3">
                    <h5 class="card-title mb-0">All Positions</h5>
                  </b-col>
                  <b-col md="auto" class="ms-auto">
                    <div class="d-flex gap-2">
                      <div class="search-box">
                        <input
                          type="text"
                          class="form-control search"
                          placeholder="Search for transactions..."
                          v-model="searchQuery"
                        />
                        <i class="ri-search-line search-icon"></i>
                      </div>
                      <b-button variant="success">
                        <i class="ri-equalizer-line align-bottom me-1"></i>
                        Filters
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-card-body>
                <div class="table-responsive table-card">
                  <table
                    class="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <thead class="table-light text-muted">
                      <tr>
                        <th
                          class="sort"
                          data-sort="name"
                          scope="col"
                          style="width: 60px"
                        ></th>
                        <th class="sort" data-sort="date" scope="col">
                          Timestamp
                        </th>
                        <th class="sort" data-sort="currency_name" scope="col">
                          Currency
                        </th>
                        <th class="sort" data-sort="form_name" scope="col">
                          Form
                        </th>
                        <th class="sort" data-sort="to_name" scope="col">To</th>
                        <th class="sort" data-sort="details" scope="col">
                          Details
                        </th>
                        <th class="sort" data-sort="transaction_id" scope="col">
                          Transaction ID
                        </th>
                        <th class="sort" data-sort="type" scope="col">Type</th>
                        <th class="sort" data-sort="amount" scope="col">
                          Amount
                        </th>
                        <th class="sort" data-sort="status" scope="col">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="list form-check-all">
                      <tr v-for="(data, index) of resultQuery" :key="index">
                        <td class="id" style="display: none">
                          <b-link
                            href="javascript:void(0);"
                            class="fw-medium link-primary"
                            >#VZ001</b-link
                          >
                        </td>
                        <td>
                          <div class="avatar-xs">
                            <div
                              class="avatar-title rounded-circle fs-16"
                              :class="{
                                'text-success bg-soft-success':
                                  data.icon == 'ri-arrow-left-down-fill',
                                'bg-soft-danger text-danger':
                                  data.icon == 'ri-arrow-right-up-fill',
                              }"
                            >
                              <i :class="data.icon"></i>
                            </div>
                          </div>
                        </td>
                        <td class="date">
                          {{ data.date }}
                          <small class="text-muted">{{ data.time }}</small>
                        </td>
                        <td class="currency_name">
                          <div class="d-flex align-items-center">
                            <img
                              :src="data.image"
                              alt=""
                              class="avatar-xxs me-2"
                            />
                            {{ data.currency }}
                          </div>
                        </td>
                        <td class="form_name">{{ data.from }}</td>
                        <td class="to_name">{{ data.to }}</td>
                        <td class="details">{{ data.details }}</td>
                        <td class="transaction_id">{{ data.id }}</td>
                        <td class="type">{{ data.type }}</td>
                        <td>
                          <h6
                            class="mb-1 amount"
                            :class="{
                              'text-success':
                                data.icon == 'ri-arrow-left-down-fill',
                              'text-danger':
                                data.icon == 'ri-arrow-right-up-fill',
                            }"
                          >
                            {{ data.amount }}
                          </h6>
                          <p class="text-muted mb-0">{{ data.amount1 }}</p>
                        </td>
                        <td class="status">
                          <span
                            class="badge fs-11"
                            :class="{
                              'badge-soft-success': data.status == 'Success',
                              'badge-soft-danger': data.status == 'Failed',
                              'badge-soft-warning': data.status == 'Processing',
                            }"
                            ><i class="ri-time-line align-bottom"></i>
                            {{ data.status }}</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="noresult" style="display: none">
                    <div class="text-center">
                      <lottie
                        colors="primary:#121331,secondary:#08a88a"
                        :options="defaultOptions2"
                        :height="75"
                        :width="75"
                      />
                      <h5 class="mt-2">Sorry! No Result Found</h5>
                      <p class="text-muted mb-0">
                        We've searched more than 150+ transactions We did not
                        find any transactions for you search.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                  <div
                    class="pagination-wrap hstack gap-2"
                    style="display: flex"
                  >
                    <b-link
                      class="page-item pagination-prev"
                      :class="{ disabled: page == 1 }"
                      v-if="page != 1"
                      href="#"
                      @click="page--"
                    >
                      Previous
                    </b-link>
                    <ul class="pagination listjs-pagination mb-0">
                      <li
                        :class="{
                          active: pageNumber == page,
                          disabled: pageNumber == '...',
                        }"
                        v-for="(pageNumber, index) in pages"
                        :key="index"
                        @click="page = pageNumber"
                      >
                        <b-link
                          class="page"
                          href="#"
                          data-i="1"
                          data-page="8"
                          >{{ pageNumber }}</b-link
                        >
                      </li>
                    </ul>
                    <b-link
                      class="page-item pagination-next"
                      href="#"
                      @click="page++"
                      v-if="page < pages.length"
                    >
                      Next
                    </b-link>
                  </div>
                </div>
              </b-card-body>
            </b-card>

            <!-- position table content End here -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="12">
        <swiper
          class="cryptoSlider"
          :slidesPerView="1"
          :loop="false"
          :spaceBetween="24"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }"
        >
          <template v-for="(item, index) of cryptoSlider" :key="index">
            <swiper-slide>
              <b-card no-body>
                <b-card-body>
                  <div class="float-end">
                    <div class="dropdown">
                      <b-link
                        class="text-reset"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="text-muted fs-18">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </span>
                      </b-link>
                      <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Details</b-link>
                        <b-link class="dropdown-item" href="#">Cancel</b-link>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.img"
                      class="bg-light rounded-circle p-1 avatar-xs img-fluid"
                      alt
                    />
                    <h6 class="ms-2 mb-0 fs-14">{{ item.label }}</h6>
                  </div>
                  <b-row class="align-items-end g-0">
                    <b-col cols="6">
                      <h5 class="mb-1 mt-4">{{ item.price }}</h5>
                      <p class="text-success fs-13 fw-medium mb-0">
                        {{ item.change }}
                        <span class="text-muted ms-2 fs-10 text-uppercase"
                          >({{ item.coinName }})</span
                        >
                      </p>
                    </b-col>
                    <b-col cols="6">
                      <apexchart
                        class="apex-charts"
                        :options="item.chartOptions"
                        height="50"
                        dir="ltr"
                        :series="item.series.length > 0 ? item.series : []"
                        :key="item.id"
                      ></apexchart>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </swiper-slide>
          </template>
        </swiper>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="8">
        <Currencies />
      </b-col>
      <b-col xl="4">
        <Trading />
      </b-col>
    </b-row>

    <b-row>
      <b-col xxl="4" lg="6">
        <RecentActivity />
      </b-col>
      <b-col xxl="4" lg="6">
        <TopProgram />
      </b-col>
      <b-col xxl="4" lg="6">
        <News />
      </b-col>
    </b-row>
  </Layout>
</template>