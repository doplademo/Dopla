<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";

export default defineComponent({
  components: { ParagraphNormal },
});
</script>

<template>
  <div class="flex flex-col w-full bg-pinkBold rounded-lg p-8">
    <img class="self-center" src="~/assets/images/common/piece.png" />
    <paragraph-normal class-name="mt-4 font-semibold"
      >Your order has now been sent to pharmacy</paragraph-normal
    >
    <paragraph-normal class-name="font-medium mt-2"
      >Farmaseutti tarkastaa lääkkeesi ja laskee Kela-korvauksien
      määrän.</paragraph-normal
    ><paragraph-normal>
      <p>
        Saat tekstiviestin, kun lääkkeet ovat valmiit tilattavaksi. Kun olet
        maksanut tilauksen, lähetämme sen valitsemaasi toimitusosoitteeseen.
      </p>
      <br />
      <p>Arvioitu odotusaika on 1 tunti.</p>
      <br />
      <p>Odottaessa voit käyttää puhelinta tai tietokonetta normaalisti.</p>
    </paragraph-normal>
  </div>
</template>



<style>
</style>