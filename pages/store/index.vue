<template>
  <main>
    <greeting-section :name="name" />
    <section class="px-4">
      <pending-prescription
        v-if="cardNumber === 1"
        title="Reseptejäsi päivitetään"
      >
        <button @click="cardNumber = 2">
          <img src="~/assets/images/common/loading-circle.png" alt="" />
        </button>
        <template #body>
          <heading-five class-name="mb-4">
            <span class="text-white"
              >Reseptit päivitetty 25.02.2022 klo 13:59</span
            >
            <br />
            <span class="text-blackLightest">
              Voit pyytää farmaseuttia tarkistamaan reseptisi seuraavan kerran
              25.02.2022 klo 15:59
            </span>
          </heading-five>
          <ParagraphNormal class-name="text-white">
            <p>
              Pieni hetki. Apteekin farmaseutti tuo reseptilääketietojasi
              Doplaan.
            </p>
            <br />
            <p>Olet jonossa numerolla: X*</p>
            <br />
            <p>
              Saat tekstiviestin, kun reseptisi näkyvät ja ovat tilattavissa
              apteekista.
            </p>
            <br />
            <p>
              Odottaessa voit käyttää puhelinta tai tietokonetta normaalisti.
            </p>
            <br />
            <p>*Tietoja päivitetään apteekin aukioloaikoina.</p>
            <p>ma-pe 8.30-21</p>
            <p>la 9-19</p>
            <p>su 11-18</p>
          </ParagraphNormal>
        </template>
      </pending-prescription>

      <order-ready v-else-if="cardNumber === 2" />
    </section>
    <section class="px-4">
      <heading-four class-name="my-4 font-semibold"
        >Suosittua juuri nyt</heading-four
      >
      <paragraph-normal
        >Tutustu apteekin verkkokaupan tuotteisiin.</paragraph-normal
      >
      <div class="flex flex-row overflow-x-scroll my-4">
        <store-product
          v-for="product in dummyProducts"
          :id="product.id"
          :key="product.id"
          :sku="product.sku"
          :name="product.name"
          :price="product.price"
          :additions="product.additions"
          :package-quantity="product.packageQuantity"
        />
      </div>
    </section>
    <news-section />
  </main>
</template>

<script>
import HeadingFour from "~/components/Heading/HeadingFour.vue";
import OrderReady from '~/components/OrderReady.vue';
import ParagraphNormal from "~/components/Paragraph/ParagraphNormal.vue";
import PendingPrescription from "~/components/PendingPrescription.vue";
import GreetingSection from "~/components/StoreHome/GreetingSection.vue";
import NewsSection from "~/components/StoreHome/NewsSection.vue";
import StoreProduct from "~/components/StoreProduct.vue";
import { dummyProducts } from "~/dummy/dummyReviews";

export default {
  components: {
    ParagraphNormal,
    HeadingFour,
    StoreProduct,
    NewsSection,
    GreetingSection,
    PendingPrescription,
    OrderReady,
},
  data() {
    return {
      name: "Ulla",
      dummyProducts,
      cardNumber: 2,
    };
  },
};
</script>

<style>
</style>