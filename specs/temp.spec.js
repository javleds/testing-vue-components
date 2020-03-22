import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

describe('computed', () => {
  test('celsius', () => {
    const { vm } = mount(Temprature)
    expect(vm.celsius).toBe(0)
    vm.degrees = 23
    expect(vm.celsius).toBe(23)
  })

  test('fahrenheit', () => {
    const { vm } = mount(Temprature)
    expect(vm.fahrenheit).toBe(32)
    vm.degrees = 16
    expect(vm.fahrenheit).toBe(60.8)
  })
})

test('temp', async () => {
  const wrapper = mount(Temprature, {
    propsData: {
      temp: 40
    }
  })
  expect(wrapper.vm.degrees).toBe(40)
  expect(wrapper.vm.type).toBe('celsius')
  wrapper.setProps({
    temp: '50f'
  })
  await wrapper.vm.$nextTick()
  expect(wrapper.vm.degrees).toBe(50)
  expect(wrapper.vm.type).toBe('fahrenheit')
})
