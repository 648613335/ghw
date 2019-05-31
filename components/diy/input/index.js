Component({

  behaviors: [],
  options: {
    multipleSlots: true
  },
  // 属性定义（详情参见下文）
  properties: {
    type: {
      type: null,
      value: 'password',
    },
    placeholder: {
      type: null,
      value: ''
    },
    maxlength: {
      type: null,
      value: 99999999
    }
  },

  data: {
    value: ''
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {},
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {}, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready() {},

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() {},
    hide() {},
    resize() {},
  },
  methods: {
    onChanage(e) {
      this.setData({
        value: e.detail.value
      })
      //传递给父级
      this.triggerEvent('onChange', {
        value: e.detail.value
      })
    },

    onClose() {
      this.setData({
        value: ''
      })
    }
  }
})