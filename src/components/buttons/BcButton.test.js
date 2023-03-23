import BcButton from "./BcButton.vue";
import { mount } from "@vue/test-utils";

test("HelloWorld Component renders the correct text", () => {
  const wrapper = mount(BcButton);
  expect(wrapper).toBeTruthy();
});