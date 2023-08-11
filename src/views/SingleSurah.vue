<template>
    <div class="flex w-full" v-if="getSingleSurah">
        <div class="mx-4 xl:max-w-7xl xl:mx-auto w-full" v-if="getSingleSurah.number != undefined">
            <h2 class="text-center text-2xl my-4 font-semibold">
               ` {{ getSingleSurah.name }} `
            </h2>
            <div>
                <div class="flex flex-col w-full">
                    
                    <div class="text-right w-full text-lg font-mono"><b><center>{{ getSingleSurah.bismillah.arab }}</center></b></div>
                    <div v-for="dataSurah in getSingleSurah.ayahs">
                        <div class="px-3 py-5 rounded-xl border hover:shadow-lg flex flex-col my-4">
                            <div class="text-right w-full text-lg font-mono"><b>{{ dataSurah.arab }}</b></div>
                            <div><p>
                                {{ dataSurah.translation }}
                            </p></div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ getSingleSurah }} -->
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("surah/fetchSingleSurah", this.number);
    },
    computed: {
        ...mapGetters("surah", ['getSingleSurah'])
    },
    props: ['number'],
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>