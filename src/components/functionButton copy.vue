<!-- <template functional>
  <div>
    <div name="foo">
      <p>foo插槽之前显示的内容</p>
      <slot></slot>
      <p>foo插槽之后显示的内容</p>
    </div>
    <p>-------------------------------------------</p>
    <div>
      <p>默认插槽之前</p>
      <slot></slot>
      <p>默认插槽之后</p>
    </div>
    <button v-bind="data.attrs" v-on="listeners">{{props.text}}</button>
  </div>
</template> -->
<script>
export default {
  name: 'FuncText',
  functional: true,
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  render(createElement, { props, data, slots, children,  }) {
    console.log(data);
    console.log(children);
    return createElement('div', {}, [createElement('div', slots().foo),
    createElement('div', slots().default),
    // data：传递给组件的整个数据对象，作为createElement的第二个参数传入组件；
    createElement('button', data,props.text)])
    // createElement('button', {
    //   attrs: props,
    //   on: {
    //     click: listeners.click
    //   }
    // }, children)
    // ])
  }
}
</script>
