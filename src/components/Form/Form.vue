""" @author: wy @desc： @date: 2021-07-12 16:33:58 """ 0
<template>
  <el-form
    class="props-form"
    :rules="rules"
    :inline="inline"
    v-bind="{ ...formProps }"
    ref="formRef"
  >
    <!-- v-bind="{ ...formProps, ...formAttr }" -->
    <el-form-item
      v-for="(value, key) in finalProps"
      :key="key"
      v-bind="value.formItem && value.formItem"
    >
      <template v-if="value.options">
        <component
          :is="value.component"
          :style="value.style"
          v-model="formState[value.key]"
          v-bind="value.extraProps" 
          v-on="value.events"
        >
          <component
            :is="value.subComponent"
            v-for="(option, k) in value.options"
            :key="k"
            :value="option.value"
            :label="option.label"
          >
          </component>
        </component>
      </template>
      <template v-else>
        <component
          :is="value.component"
          :style="value.style"
          v-model="formState[value.key]"
          v-bind="value.extraProps"
          v-on="value.events"
        >
        </component>
      </template>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    labelPosition: {
      type: String,
      default: "right",
    },
    formAttr: {
      type: Object,
      default: () => ({}),
    },
    componentProps: {
      type: Array,
      required: true,
    },
    form: {
      type: Object, 
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formState: {},
      resetFormItem: {},
      isRound: false,
    };
  },
  computed: {
    finalProps: function () {
      const newProp = this.componentProps.map((v) => {
        const eventName = v.eventName ? v.eventName : "input";
        const key = v.key;
        this.$set(this.formState, key, v.value);
        const obj = {
          ...v,
          eventName,
          events: {
            [eventName]: (e) => {       
             
              console.log(v.component);                                
              const { name } = v.component;
              console.log(name);
              if (name === "ElDatePicker") {
                this.formState[key] = e;
              } else if (name === "ElTimePicker") {
                this.formState[key] = e?[new Date(e[0]).getTime(),new Date(e[1]).getTime()]:[];
              } else if (name === "ElSelect") {
                this.formState[key] = e;
              } else if(name ==="ElRadioGroup"){
                console.log(e);
                this.formState[key] = e;
              }
              else {
                this.formState[key] = e;
                console.log(" this.formState[key]", this.formState[key]);
              }
            },
              
          },
        };
        return obj;
      });
      console.log(newProp);
      return newProp;
    },
    formProps: function () {
      return { model: this.formState };
    },
    // formProps: function () {
    //   return this.form?.layout
    //     ? { ...this.form, model: this.formState }
    //     : {
    //         ...this.form,
    //         layout: "inline",
    //         model: this.formState,
    //       };
    // },
  },

  methods: {
    async onSubmit() {
      try {
        await this.$refs.formRef.validate();
        return Promise.resolve(this.formState);
      } catch (error) {
        console.log("error", error);
      }
    },
    async resetForm() {
      console.log("清空事件", this.$refs.formRef);
      this.$refs.formRef.resetFields();
    },
    // resetFormItem() {
    //   if (formRef.value.$children[num]) {
    //     formRef.value.$children[num].resetField();
    //   }
    // },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-right: 48px;
}
.props-form {
  width: 100%;
}
::v-deep .el-form-item__label {
  font-family: PingFangSC-Medium, PingFang SC;
  padding: 0;
}
</style>
