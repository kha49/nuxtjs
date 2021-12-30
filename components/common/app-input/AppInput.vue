<template>
  <div class="tw-py-2 tw-w-full">
    <div :class="`tw-text-sm tw-mb-1 ${labelClass || ''}`">
      {{ label }}
      <span v-if="isRequire" class="tw-text-primary">*</span>
      <span
        v-if="optional"
        class="tw-text-secondary-medium tw-text-sm tw-font-normal"
      >
        {{ $t('auth.optional') }}
      </span>
    </div>
    <div
      class="tw-relative"
      :class="{ 'tw-flex tw-justify-center tw-items-center': close }"
    >
      <input
        :name="name"
        :type="type"
        :maxlength="maxLength"
        class="
          tw-bg-white
          tw-rounded-lg
          tw-px-2
          tw-py-2
          tw-border
          tw-border-solid
          tw-border-grey-300
          tw-w-full
          tw-outline-none
        "
        :class="{
          'tw-border-grey-600': hover,
          'border-primary': errorMessage,
          'tw-pl-20': phoneNumber,
          'tw-bg-input-bg tw-text-typo-tertiary': readonly,
        }"
        :value="value"
        :placeholder="placeHolder"
        :readonly="readonly"
        @keyup="onKeyup"
        @keypress="onKeyPress"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @mouseover="onHover"
        @mouseleave="onLeave"
      >

      <div
        v-if="phoneNumber"
        class="
          prefix
          tw-bg-input-bg
          tw-absolute
          tw-left-0
          tw-top-0
          tw-h-full
          tw-rounded-l-lg
          tw-flex
          tw-justify-center
          tw-items-center
          tw-text-secondary-light
          tw-w-16
          tw-border
          tw-border-r-0
        "
        :class="{
          'tw-border-grey-600': hover,
          'tw-border-grey-300': !errorMessage,
          'border-primary ': errorMessage,
        }"
      >
        <span>+88</span>
      </div>

      <v-icon
        v-if="isPassword"
        size="24px"
        color="#777576"
        class="eyes-icon"
        @click="onToggleEyes"
      >
        {{ type === 'text' ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}
      </v-icon>

      <div v-if="close" class="tw-cursor-pointer tw-pl-2" @click="onClose">
        <!-- <img src="~/assets/images/icon/cancel_filled.svg" alt=""> -->
      </div>
    </div>
    <p
      v-if="errorMessage && errorMessage !== true"
      class="tw-text-primary tw-text-xs tw-mt-1"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ScgInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: '',
      require: true
    },
    value: {
      type: [String, Number],
      default: ''
    },
    close: {
      type: Boolean,
      default: false
    },
    isRequire: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: [String, Boolean],
      default: ''
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: Boolean,
      default: false
    },
    optional: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: 'tw-font-bold'
    },
    placeHolder: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 300
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    onKeyup (e) {
      this.$emit('keyup', e)
    },
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onToggleEyes () {
      this.$emit('onToggleEyes')
    },
    onKeyPress (e) {
      this.$emit('keypress', e)
    },

    onFocus (e) {
      this.$emit('focus', e)
    },

    onBlur (e) {
      this.$emit('blur', e)
    },
    onClose () {
      this.$emit('close')
    },
    onHover () {
      this.hover = true
    },
    onLeave () {
      this.hover = false
    }
  }
}
</script>

<style lang="scss" scoped>
.eyes-icon {
  position: absolute;
  right: 15px;
  top: 9px;
}
.border-primary {
  border-color: red;
}
</style>
