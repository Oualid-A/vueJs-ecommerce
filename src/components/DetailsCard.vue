<template>
  <div className="w-auto h-full">
    <div v-if="weatherData"
      className="mx-auto h-full max-w-full p-4  xl:w-full bg-gradient-to-br from-[#f7f4f2] via-[#f7f4f2] to-[#f7f4f2] rounded-lg text-black ">
      <header className="flex justify-between items-center space-x-4">
        
        <div class="text-black ">
          <select name="location" id="" class="rounded-xl bg-[#cfcac6] p-1 " @change="handleLocationChange($event.target.value)">
            <option value="Oujda">Oujda</option>
            <option value="Rabat">Rabat</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Tanger">Tanger</option>
            <option value="Nador">Nador</option>
            <option value="Al-Hoceïma">Al Hoceïma</option>
            <option value="Agadir">Agadir</option>
          </select>
        </div>
        <div class="flex justify-end items-center space-x-4">
          <div className="flex items-center bg-[#fff] p-1 rounded-2xl space-x-2 h-7 w-15">
            <div className="bg-[#0e2547] flex rounded-full items-center justify-center p-2 h-5 w-5">
             <img src="../components/icons/darkmode.png" alt="" srcset="" class="w-10">
            </div>
            <div className="">
              <img src="../components/icons/night-mode.png" alt="" srcset="" class="w-5">
            </div>
          </div>
          <img src="../assets/notification.png" alt="Notification" className="w-6 rounded-full bg-white p-1" />
          <img src="../assets/joe.jpg" alt="Joe" className="w-10 rounded-full" />
        </div>
      </header>
      <section className="flex flex-col justify-center items-center space-y-3 mt-6">
        <img  :src="weatherData.current.condition.icon" alt="" className="w-20" />
        <h1 className="text-3xl font-bold">{{ weatherData.current.temp_c }}° C</h1>
        <h2 className="text-xl font-medium">{{ weatherData.current.condition.text }}</h2>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <h2 className="flex items-center">
              <AirIcon className="mr-2" /> Wind
              <span className="border-r px-3">{{ weatherData.current.wind_kph }} km/h</span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="flex items-center">
              <AirIcon className="mr-2" /> Humidity {{ " " }}
              <span> {{ weatherData.current.humidity }}%</span>
            </h2>
          </div>
        </div>
      </section>
      <section class="mt-4">
        <div class="flex justify-between items-center">
          <h1 class="font-semibold text-xl">Weather Forecast</h1>
          <div class="text-base font-medium rounded-lg border border-white bg-zinc-300 bg-opacity-10 px-4 py-1">
            Celsius
          </div>
        </div>
        <div
          class="flex justify-between items-center rounded-3xl w-[98%] p-2 mt-6 bg-gradient-to-t from-[#ece8e3] via-[#ece8e3] to-[#ece8e3]">
          <template v-for="interval in ['7', '14', '30']" :key="'interval-' + interval" >
            <div class="w-[25%] rounded-3xl text-center font-medium p-2 cursor-pointer"
              :class="{ 'bg-gradient-to-t from-[#cfcac6] via-[#cfcac6] to-[#cfcac6]': selectedInterval === interval }"
              @click="handleIntervalClick(interval)">
              {{ interval }} Days
            </div>
          </template>

        </div>
      </section>
      <section class="mt-4 overflow-y-auto">
        <template v-for="(forecast, index) in weatherData.forecast.forecastday" :key="index">
          <div  class="flex justify-between items-center border-b-2 border-cyan-300 py-2">
            <div class="flex items-center">
              <img :src="forecast.day.condition.icon" alt="" class="mr-2" />
              <div>
                <h1 class="text-xl font-medium">{{ forecast.date }}</h1>
                <p class="text-xl font-light">{{ forecast.day.condition.text }}</p>
              </div>
            </div>
            <div class="w-20 text-right">
              <span>{{ forecast.day.avgtemp_c }}° C</span>
            </div>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>
<script>
import { getDataStatistics } from '@/services/forecast'
import { onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'DetailsCard',

  setup() {
    const state = reactive({
      weatherData: null,
      selectedInterval: "7",
      location: "Oujda"
    });

    const handleIntervalClick = (interval) => {
      state.selectedInterval = interval;
      fetchData();
    };
    const handleLocationChange = (newLocation) => {
      state.location = newLocation;
      fetchData();
    };

    const fetchData = async () => {
      try {
        state.weatherData = await getDataStatistics(state.selectedInterval, state.location);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    onMounted(async () => {
      fetchData();

    });
    
    return {
      ...toRefs(state),
      handleIntervalClick,
      handleLocationChange,
    };
  },
}
</script>
<style scoped></style>


<!-- // data() {
  //   return {
  //     weatherData: []
  //   }
  // },
  // mounted() {
  //    getDataStatistics("7", "Oujda").then((res)=>{
  //     this.weatherData = res
  //     console.log(res);
  //   })
  //   console.log("hello");
  // }, -->