import Vue from 'vue';
export default Vue.component("functional-button", {
    name: 'functional-button',
    functional: true,
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    // props：提供所有 prop 的对象；
    // children：VNode 子节点的数组；通过 children 来获取父组件的插槽内容的
    // slots：一个函数，返回了包含所有插槽的对象；
    // scopedSlots：一个暴露传入的作用域插槽的对象，也以函数形式暴露普通插槽；
    // data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件；
    // parent：对父组件的引用；
    // listeners： 一个包含了所有父组件为当前组件注册的事件监听器的对象，这是 data.on 的一个别名；
    // injections：如果使用了 inject 选项，则该对象包含了应当被注入的 property。
    // 原文链接：https://blog.csdn.net/qq_38374286/article/details/126603282
    render(createElement, { props, listeners, children }) {
        return createElement('button', {
            attrs: props,
            on: {
                click: listeners.click
            }
        }, children)
    }
})

// 基于模板的函数式组件
{/* <script>
<template functional>
  <button v-bind="data.attrs" v-on="listeners">
	<slot></slot>
  </button>
</template>

export default {
  name: 'FuncBtn'
}
</script> */}
