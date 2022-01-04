<template>
  <div>
    

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="''">
          <template v-slot:preview>

            <v-card>
              <v-card-title>
                Data Ziswaf
                <v-spacer></v-spacer>
                <router-link   to="/vuetify/forms">
                    <v-btn color="primary"   text><v-icon x-small class="mr-3">mdi-plus</v-icon>Tambah</v-btn>
                </router-link>
              </v-card-title>
              <v-data-table
                :headers="code4.headers"
                :items="code4.desserts"
                :search="code4.search"
              ></v-data-table>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
  code4: {
        html: `<v-card>
  <v-card-title>
    Nutrition
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
  ></v-data-table>
</v-card>`,
        js: ` export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 22-12-2021,
          fat: 6.0,
          carbs: 24000,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 22-12-2021,
          fat: 9.0,
          carbs: 37000,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 22-12-2021,
          fat: 16.0,
          carbs: 23000,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 22-12-2021,
          fat: 3.7,
          carbs: 67000,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 22-12-2021,
          fat: 16.0,
          carbs: 49000,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 22-12-2021,
          fat: 0.0,
          carbs: 94000,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 22-12-2021,
          fat: 0.2,
          carbs: 98000,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 22-12-2021,
          fat: 3.2,
          carbs: 87000,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 22-12-2021,
          fat: 25.0,
          carbs: 51000,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 22-12-2021,
          fat: 26.0,
          carbs: 65000,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}`,
        search: "",
        headers: [
          {
            text: "Nama lengkap",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Tanggal", value: "calories" },
          { text: "Nomor", value: "fat" },
          { text: "Nominal", value: "carbs" },
          { text: "Untuk", value: "protein" },
          { text: "Nama Penerima", value: "iron" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 24.000,
            protein: "Infaq",
            iron: "ojan"
          },
          {
            name: "Ice cream sandwich",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 37.000,
            protein: "Infaq",
            iron: "ojan"
          },
          {
            name: "Eclair",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 23.000,
            protein: "Infaq",
            iron: "ojan"
          },
          {
            name: "Cupcake",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 67.000,
            protein: "Sodakoh",
            iron: "ojan"
          },
          {
            name: "Gingerbread",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 49.000,
            protein: "Infaq",
            iron: "ojan"
          },
          {
            name: "Jelly bean",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 94.000,
            protein: "Zakat",
            iron: "ojan"
          },
          {
            name: "Lollipop",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 98.000,
            protein: "Zakat",
            iron: "ojan"
          },
          {
            name: "Honeycomb",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 87.000,
            protein: "Infaq",
            iron: "ojan"
          },
          {
            name: "Donut",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 51.000,
            protein: "sodakoh",
            iron: "ojan"
          },
          {
            name: "KitKat",
            calories: "22-12-2021",
            fat: 1234567,
            carbs: 65.000,
            protein: 'Zakat',
            iron: "ojan"
          }
        ]
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Data Tables" }
    ]);
  }
};
</script>
