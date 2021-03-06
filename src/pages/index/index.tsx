import { ComponentType } from 'react'
import Taro, { Component, Config, navigateTo } from '@tarojs/taro-weapp'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  onLinkUIDemo = () => {
    navigateTo({
      url: '/pages/demo/index'
    })
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <AtButton type='primary' onClick={() => this.onLinkUIDemo()}>babab</AtButton>
        lalala
      </View>
    )
  }
}

export default Index  as ComponentType
