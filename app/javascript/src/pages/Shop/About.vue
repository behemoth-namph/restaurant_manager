<template>
  <div class="about-page">
    <AboutUs></AboutUs>
    <ProjectCount></ProjectCount>
    <Skill></Skill>
    <Team></Team>
    <BrandLogo></BrandLogo>
  </div>
</template>

<script>
import BrandLogo from "../../components/Shared/BrandLogo";
import AboutUs from "../../components/About/AboutUs";
import ProjectCount from "../../components/About/ProjectCount";
import Skill from "../../components/About/Skill";
import Team from "../../components/About/Team";

export default {
  components: {
    BrandLogo,
    AboutUs,
    ProjectCount,
    Skill,
    Team,
  },
};
</script>

<style lang="scss"></style>
