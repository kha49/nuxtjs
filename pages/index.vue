<template>
  <div class="homepage tw-py-10">
    <Container>
      <app-button color="primary">
        Button
      </app-button>
      <app-input
        v-model="rePassword"
        name="rePassword"
        label="Re Password"
        is-password
        :error-message="rePasswordErrMessage"
        :type="reInputType"
        @onToggleEyes="onToggleEyes"
        @keyup="$v.rePassword.$touch()"
      />
    </Container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Homepage',
  data () {
    return {
      homepageData: {},
      rePassword: '',
      reInputType: 'password'
    }
  },

  computed: {
    rePasswordErrMessage () {
      if (!this.$v.rePassword.required && this.$v.rePassword.$dirty) {
        return 'Please enter re password'
      }

      if (!this.$v.rePassword.minLength && this.$v.rePassword.$dirty) {
        return 'Min length of password is 5'
      }
      return ''
    }
  },
  created () {
    this.getDataHomepage() // or this.getData()
  },

  validations: {
    rePassword: {
      required,
      minLength: minLength(5)
    }
  },

  methods: {
    ...mapActions({
      getData: 'homePage/getAll'
    }),

    async getDataHomepage () {
      try {
        const homepage = await this.$repo.home.getAll()
        if (homepage) {
          this.homepageData = homepage.data.Data
        }
      } catch (error) {}
    },

    onToggleEyes () {
      if (this.reInputType === 'password') {
        this.reInputType = 'text'
      } else {
        this.reInputType = 'password'
      }
    }
  }
}
</script>
<style lang="scss">
</style>
