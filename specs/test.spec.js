import { mount } from '@vue/test-utils'
import TestComponent from '@/test'
import ListComponent from '@/list'

// eslint-disable-next-line no-undef
test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool'
    }
  })
  // eslint-disable-next-line no-undef
  expect(wrapper).toMatchSnapshot()
})

// eslint-disable-next-line no-undef
test('ListComponent', async () => {
  const wrapper = mount(ListComponent)
  const movies = wrapper.vm.marvelMovies
  wrapper.setData({ marvelMovies: [...movies, 'Endgame'] })
  await wrapper.vm.$nextTick()
  // eslint-disable-next-line no-undef
  expect(wrapper).toMatchSnapshot()
})
