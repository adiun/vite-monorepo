import { Meta, Story } from "@storybook/react";
import React from "react";

import { MockAppContextProvider } from "../mocks/MockAppContextProvider";
import { Props, Shell } from "./Shell";

export default {
  component: Shell,
  title: "Shell",
} as Meta;

const Template: Story<Props> = (args, { argTypes }) => {
  return (
    <MockAppContextProvider>
      <Shell {...args} />
    </MockAppContextProvider>
  );
};

const divStyles: React.CSSProperties = {
  /* stylelint-disable-next-line */
  background: "red",
};

export const Primary = Template.bind({});
Primary.args = {
  children: <div style={divStyles}>Simple Div</div>,
};

export const TallContent = Template.bind({});
TallContent.args = {
  children: <div style={{ ...divStyles, height: 2000 }}>height: 2000px</div>,
};

export const WideContent = Template.bind({});
WideContent.args = {
  children: <div style={{ ...divStyles, width: 2000 }}>width: 2000px</div>,
};
