/*
 * @Author: Ayan
 * @Date: 2023-09-28 11:30:31
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 11:34:35
 * @Description: file not
 */
import { mount } from '@vue/test-utils'
import Test from '../src/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
