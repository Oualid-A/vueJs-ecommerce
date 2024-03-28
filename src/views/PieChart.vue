<template>
</template>

<script>
import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'PieChart';

export const data = [
  ['Task', 'Hours per Day'],
  ['Rain', 8],
  ['Sun', 2],
  ['Humidity', 2],
  ['Wind', 2],
];

export const options = {
  width: "100%",
  height: 400,
  pieHole: 0.4,
  is3D: true,
  
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
        });
  },
});
</script>