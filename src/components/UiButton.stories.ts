import UiButton from "./UiButton.vue";
export default {
  component: UiButton,
  title: "Components/UiButton",
};

export const Primary = () => ({
  components: { UiButton },
  template: `
    <UiButton primary label="Button">
    yes
    </UiButton>
  `,
});
