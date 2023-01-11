<template>
  <profile-wrapper>
    <h4 class="heading-four font-semibold my-6">Active reminders (4)</h4>

    <div class="flex flex-col gap-4">
      <profile-accordion title="Medicine name"><profile-reminder active medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
      <profile-accordion title="Medicine name"><profile-reminder active medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
      <profile-accordion title="Medicine name"><profile-reminder active medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
      <profile-accordion title="Medicine name"><profile-reminder active medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
    </div>

    <h4 class="heading-four font-semibold mb-6 mt-16">On pause (2)</h4>

    <div class="flex flex-col gap-4">
      <profile-accordion title="Medicine name"><profile-reminder medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
      <profile-accordion title="Medicine name"><profile-reminder medicine-id="001"
          medicine-name="Simvastatin ABC Pharma 20 mg, op98" /></profile-accordion>
    </div>

  </profile-wrapper>
</template>

<script>
import { defineComponent } from 'vue';
import ProfileAccordion from '~/components/ProfileAccordion.vue';
import ProfileReminder from '~/components/ProfileReminder.vue';
import ProfileWrapper from '~/components/ProfileWrapper.vue';

export default defineComponent({
  components: { ProfileWrapper, ProfileAccordion, ProfileReminder },
  props: {},
})
</script>