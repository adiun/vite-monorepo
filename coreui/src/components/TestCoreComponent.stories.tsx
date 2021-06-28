import { Meta, Story } from "@storybook/react";

import { TestCoreComponent } from "./TestCoreComponent";

export default {
  component: TestCoreComponent,
  title: "TestCoreComponent",
} as Meta;

const Template: Story = (args, { argTypes }) => {
  return <TestCoreComponent />;
};

export const Primary = Template.bind({});
Primary.args = {};
