import { render } from "@testing-library/vue";
import TestComponent from "../../src/components/Test/Test.vue";

test("it should work!", () => {
  const { getByText } = render(TestComponent, { props: {} });
  getByText("This component is for testing!");
});
