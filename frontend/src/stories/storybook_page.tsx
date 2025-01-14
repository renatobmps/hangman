import { Title, Controls, Subtitle, Primary, Stories } from "@storybook/blocks";

const StorybookPage = ({ description }: { description?: string }) => (
  <>
    <Title />
    {description && <Subtitle>{description}</Subtitle>}
    <Primary />
    <Controls />
    <Stories />
  </>
);

export default StorybookPage;