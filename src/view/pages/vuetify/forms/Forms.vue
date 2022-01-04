<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <KTCodePreview >
          <template v-slot:preview>
            
            <v-form ref="form" v-model="code1.valid" lazy-validation>
              <v-row>
                <v-col xl="4" md="6" sm="4" cols="4">
                  Tanggal terima 
                </v-col>
                <v-col xl="8" md="6" sm="8" cols="8">
                  <v-text-field outlined dense type="date"   label="Tanggal terima" clearable  hide-details></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col xl="4" md="6" sm="4" cols="4">
                  Masukan Nomor 
                </v-col>
                <v-col xl="8" md="6" sm="8" cols="8">
                  <v-text-field
                outlined
                dense
                  v-model="code1.name"
                  :counter="10"
                  :rules="code1.nameRules"
                  label="Name"
                  required
                ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col xl="4" md="6" sm="4" cols="4">
                  Sudah diterima dari Bapak / Ibu 
                </v-col>
                <v-col xl="8" md="6" sm="8" cols="8">
                  <v-text-field
                  dense
                outlined
                  v-model="code1.name"
                  :counter="10"
                  :rules="code1.nameRules"
                  label="Name"
                  required
                ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col xl="4" md="6" sm="4" cols="4">
                  Alamat Bapak / Ibu 
                </v-col>
                <v-col xl="8" md="6" sm="8" cols="8">
                  <v-textarea
                  dense
                  outlined
                    label="Alamat bapak / ibu"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row>
                <v-col xl="4" md="6" sm="4" cols="4">
                  No telp atau  HP Bapak / Ibu 
                </v-col>
                <v-col xl="8" md="6" sm="8" cols="8">
                  <v-text-field
                  dense
                outlined
                  v-model="code1.name"
                  :counter="10"
                  :rules="code1.nameRules"
                  label="Telp / HP"
                  required
                ></v-text-field>
                </v-col>
              </v-row>

              <v-select
                v-model="code1.select"
                :items="code1.items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-btn
                :disabled="!code1.valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Simpan
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
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
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      code1: {
        html: `<v-form
  ref="form"
  v-model="valid"
  lazy-validation
>
  <v-text-field
    v-model="name"
    :counter="10"
    :rules="nameRules"
    label="Name"
    required
  ></v-text-field>

  <v-text-field
    v-model="email"
    :rules="emailRules"
    label="E-mail"
    required
  ></v-text-field>

  <v-select
    v-model="select"
    :items="items"
    :rules="[v => !!v || 'Item is required']"
    label="Item"
    required
  ></v-select>

  <v-checkbox
    v-model="checkbox"
    :rules="[v => !!v || 'You must agree to continue!']"
    label="Do you agree?"
    required
  ></v-checkbox>

  <v-btn
    :disabled="!valid"
    color="success"
    class="mr-4"
    @click="validate"
  >
    Validate
  </v-btn>

  <v-btn
    color="error"
    class="mr-4"
    @click="reset"
  >
    Reset Form
  </v-btn>

  <v-btn
    color="warning"
    @click="resetValidation"
  >
    Reset Validation
  </v-btn>
</v-form>`,
        js: ` export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}`,
        valid: true,
        name: "",
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Input data Zizwaf" }
    ]);
  },

  methods: {
    // code 1
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }

  
};
</script>
