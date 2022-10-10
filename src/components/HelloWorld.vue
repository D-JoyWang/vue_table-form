<template>
  <div>
    <table-page :renderEvents="renderEvents()" :columns="columns" :tableData="tableData"></table-page>
    <FormProp :rules="rules" :componentProps="formData" ref="FormPropRef" />
    <button @click="btnClick">点击我哦</button>
  </div>
</template>

<script>
import {
  Input,
  DatePicker,
  Select,
  Option,
  TimePicker,
  Radio,
  InputNumber,
  RadioGroup,
} from "element-ui";
// import { Input, Select, Option } from "element-ui";
export default {
  components: {},
  data() {
    return {
      text: "click me",
      columns: [
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "province",
          label: "省份",
        },
        {
          prop: "city",
          label: "市区",
          width: "",
        },
        {
          prop: "address",
          label: "地址",
          render: (h, scope) => {
            return <p class="color-red">{scope.row.address}</p>;
          },
        },
        {
          prop: "zip",
          label: "邮编",
          formatter: (row) => {
            return row.zip + "formatter";
          },
        },
        {
          label: "操作",
          render: (h, scope, listeners) => {
            const look = (
              <el-button
                type="text"
                size="small"
                onClick={() => {
                  listeners.look(scope);
                }}
              >
                查看
              </el-button>
            );
            const deal = (
              <el-button
                type="text"
                size="small"
                onClick={() => {
                  listeners.deal(scope);
                }}
              >
                删除
              </el-button>
            );
            return (
              <div>
                {look}
                {deal}
              </div>
            );
          },
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      formData: [
        {
          component: Input,
          key: "keyword",
          style: {
            width: "400px",
          },
          value: "哈哈哈哈",
          extraProps: {
            clearable: true,
            placeholder: "请输入机构名称/单位名称/设备名称/设备编号/通道编号",
          },
          formItem: {
            label: "关键词：",
            prop: "keyword", // 对应校验规则字段名
          },
        },
        {
          component: DatePicker,
          key: "date",
          style: {
            width: "300px",
          },
          value: [],
          extraProps: {
            "value-format": "yyyy-MM-dd",
            type: "daterange",
            "range-separator": "-",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
          },
          formItem: {
            label: "日期",
            prop: "date",
          },
        },
        {
          component: Select,
          subComponent: Option,
          key: "status", // 返回参数名称
          style: {
            width: "300px",
          },
          value: null,
          options: [{ label: "全部", value: null }],
          formItem: {
            label: "状态：",
            prop: "status",
          },
        },
        {
          component: TimePicker,
          key: "time", // 返回参数名称
          style: {
            width: "300px",
          },
          // value: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          // value: [],不给初始值
          extraProps: {
            "is-range": true,
            "range-separator": "-",
            "start-placeholder": "开始时间",
            "end-placeholder": "结束时间",
            "picker-options": {
              selectableRange: "18:30:00 - 20:30:00",
            },
          },

          formItem: {
            label: "时间",
            prop: "time",
          },
        },
        {
          component: RadioGroup,
          subComponent: Radio,
          options: [{ label: "备选项1", value: 1 },{ label: "备选项2", value: 2 }],
          key: "radio", // 返回参数名称
          style: {
            width: "300px",
          },
          extraProps: {},
          eventName: "change",
          formItem: {
            label: "单选：",
            prop: "radio",
          },
        },
        {
          component: InputNumber,
          key: "number", // 返回参数名称
          style: {
            width: "300px",
          },
          extraProps: {},
          eventName: "change",
          formItem: {
            label: "计数器",
            prop: "number",
          },
        },
      ],
    };
  },
  methods: {
    btnClick() {
      console.log(this.$refs.FormPropRef.formState);
    },
    click() {
      console.log("点击事件");
    },
    renderEvents() {
      const renderEventsArray = {
        look: () => {
          console.log("咯噢噢噢噢");
        },
        deal: ({ row }) => {
          console.log(row, "删除事件");
        },
      };
      return renderEventsArray;
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
