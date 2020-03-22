import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

jest.useFakeTimers()

describe('lifecycle methods', () => {

  test('mounted assings an interval', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.interval).not.toBe(undefined)
  })
  test('counter works', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.counter).toBe(0)

    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(1)
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(2)
  })

  test('instance gets destroyed', () => {
    // It has to be called before the mount method
    const beforeDestoryedSpy = jest.spyOn(AlertMessage, 'beforeDestroy')
    const wrapper = mount(AlertMessage)
    wrapper.vm.counter = wrapper.vm.timer - 1
    jest.advanceTimersByTime(1000)
    expect(beforeDestoryedSpy).toHaveBeenCalled()
  })
})
