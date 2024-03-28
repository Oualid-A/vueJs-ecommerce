<template>
  <div className="  w-full">
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="font-semibold text-base">Weekly Temperature</div>
      <div className="flex gap-5 justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-teal-300 h-4 w-7">{{ location }}</div>
          
        </div>

      </div>
    </div>
    <GChart :data="myData" :options="options" :type="type" />
  </div>
</template>

<script>
import { getDataStatistics, getWeatherData } from '@/services/forecast';
import { defineComponent, onMounted, ref } from 'vue';
import { GChart } from 'vue-google-charts';

export default defineComponent({
  name: 'BarChart',
  components: {
    GChart,
  },

  setup() {
    const weatherData = ref(null);
    const myData = ref([
      ['Days', 'Temperature', 'Humidity'],
    ]);
    const selectedInterval = ref("7");
    const location = ref(null);

    const fetchData = async () => {
      try {
        const locationResponse = await getWeatherData();
        location.value = locationResponse.name;

        const dataResponse = await getDataStatistics(selectedInterval.value, location.value);

        dataResponse.forecast.forecastday.forEach((item) => {
          myData.value.push([item.date, item.day.avgtemp_c, item.day.avghumidity]);
        });

        weatherData.value = dataResponse;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      myData,
      options: {
        chart: {
          title: 'Weekly Temperature',
          subtitle: 'Days, Sun, and Humidity',
        },
        width: "100%",
        height: 400,

      },
      type: 'ColumnChart',
    };
  },
});
</script>
