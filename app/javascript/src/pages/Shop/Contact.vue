<template>
  <div class="contact-area pt-100 pb-100">
    <div class="container">
      <ContactInfo></ContactInfo>
      <ContactForm></ContactForm>
      <ContactMap></ContactMap>
    </div>
  </div>
</template>

<script>
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import ContactMap from "../../components/Contact/ContactMap";

export default {
  components: {
    ContactInfo,
    ContactForm,
    ContactMap
  },
};
</script>

<style lang="scss"></style>
