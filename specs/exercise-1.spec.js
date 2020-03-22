import UserList from '@/exercise-1'
import { mount } from '@vue/test-utils'

describe('Exercise1Component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(UserList)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should display an empty list if there is not users', () => {
    expect(wrapper.findAll('li').length).toBe(0)
  })

  it('should display a list users', async () => {
    const users = ['jledezma']

    wrapper.setProps({ users: [...users] })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(1)

    wrapper.setProps({ users: [...users, 'punksolid'] })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(2)
  })

  it('should have a filter input with with binding value', () => {
    const inputValue = 'jledezma'
    const input = wrapper.find('input')
    input.element.value = inputValue
    input.trigger('input')
    expect(wrapper.vm.filter).toBe(inputValue)
  })

  it('should filter uses with reactivity', async () => {
    const filterValue = 'jledezma'
    const expectedResults = 1

    const users = ['jledezma', 'punksolid', 'mccelso']
    wrapper.setProps({ users })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(users.length)

    const input = wrapper.find('input')
    input.element.value = filterValue
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(expectedResults)
  })

  it('should display the right user', async () => {
    const expectedUser = 'jledezma'
    const users = ['jledezma']
    wrapper.setProps({ users })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('li').text()).toBe(expectedUser)
  })
})
