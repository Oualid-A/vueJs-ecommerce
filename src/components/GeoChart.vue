<template>

</template>

<script>
import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'GeoChart';

export const data = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
    ['India', 800],
    ['China', 900],
    ['Japan', 1000],
    ['morocco', 1100],
    ['egypt', 1200],
];

export const options = {
    width: "80%",
    height: 400,
};

export default defineComponent({
    name: 'GeoChart',
    components: {
        GChart,
    },
    setup() {
        return () =>
            h(GChart, {
                data,
                options,
                type,
                settings: {
                    packages: ['geochart'],
                },
            });
    },
});
</script>