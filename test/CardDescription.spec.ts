import { mount } from "@vue/test-utils";
import CardDescription from "../components/CardDescription.vue";

describe("<CardDescription />", () => {
  test("Render successfully", () => {
    const wrapper = mount(CardDescription);
    expect(wrapper).toBeTruthy();
  });

  test("Should mount component and contain main div", () => {
    const wrapper = mount(CardDescription);
      expect(wrapper.html()).toContain('<div class="card-description">')
  });
});
