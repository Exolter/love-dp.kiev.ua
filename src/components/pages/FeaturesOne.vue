<template>
  <div>
    <Navbar />
    <PageTitle />
    <VideoTitle />
    <Services />
    <ServicesTwo />
    <ServicesThree />
    <ReadyToTalk />
    <Partner />
    <!-- <AppDownload /> -->
    <AccountCreate />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../layout/Navbar";
import PageTitle from "../features-one/PageTitle";
import VideoTitle from "../features-one/Video";
import Services from "../common/Services";
import ServicesTwo from "../common/ServicesTwo";
import ServicesThree from "../common/ServicesThree";
import ReadyToTalk from "../common/ReadyToTalk";
import Partner from "../common/Partner";
// import AppDownload from '../common/AppDownload'
import AccountCreate from "../common/AccountCreate";
import Footer from "../layout/Footer";

export default {
  name: "FeaturesOne",
  components: {
    Navbar,
    PageTitle,
    VideoTitle,
    Services,
    ServicesTwo,
    ServicesThree,
    ReadyToTalk,
    Partner,
    // AppDownload,
    AccountCreate,
    Footer,
  },
  mounted() {
    document.dispatchEvent(new Event("render-complete"));
  },
};
</script>
