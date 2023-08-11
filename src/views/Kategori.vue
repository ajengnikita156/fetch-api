<template>
    <div class="bg-white">
            <center><h2 class="text-2xl font-bold tracking-tight text-gray-900">Category Product</h2></center>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="grid md:grid-cols-4 gap-4">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <center>
                    <img class="rounded-t-lg " src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"  style="height: 200px; width: 200px; margin: 20px;"/>
                </center>
                <div class="p-5">
                    <h6 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Electronics</h6>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <center>
                    <img class="rounded-t-lg " src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" style="height: 200px; width: 200px; margin: 20px;" />
                </center>
                <div class="p-5">
                    <h6 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Jewelery</h6>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <center>
                    <img class="rounded-t-lg " src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" style="height: 200px; width: 200px; margin: 20px;" />
                </center>
                <div class="p-5">
                    <h6 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Men's Clothing</h6>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <center>
                    <img class="rounded-t-lg " src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" style="height: 200px; width: 200px; margin: 20px;" />
                </center>
                <div class="p-5">
                    <h6 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Women's Clothing</h6>
                </div>
            </div>
        </div>
    </div>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="category in getKategori" class="group relative">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                            alt="Front of men&#039;s Basic Tee in black."
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                            
                    </div>
                    
                    <div :key="index" class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                   Kategori: {{ category }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div> 


            </div>
        </div>
    
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kategori', ['getKategori', 'getCategoryImages']),
    },
    methods: {
        ...mapActions('kategori', ['fetchKategori']),

    },
    created() {
        this.fetchKategori();
    },
}
</script>

<style></style> 


<!-- <template>
    <div class="flex-container">
        <div v-for="product in getProducts" :key="product.id" class="card">
            <img :src="product.image" style="width: 400px; height: 400px;">
        <router-link class="container" :to="{ name : 'Detail', params:{id_product : product.id}}">
            <h4>{{ product.category }}</h4>
        </router-link>
    </div>
    </div>
</template>
<script>
import { product } from '@/views/Product';
import { kategori } from '@/views/Kategori';


export default {
    props: [
        "id_kategori",
    ],
    setup(props){
        const detail = kategori["kategori"].find(function(item) {
            return item.id == props.id_kategori
            
        });
        const data = product["product"].filter(function(barang){
            return detail.id == barang.id_kategori
            
        });

        const getImgSrc = (imgFileName) => {
        return 'product.image' + imgFileName + '';
       }
        
        return{
            detail,
            data,
            getImgSrc

        }
    }
}
</script>

<style scoped>
.flex-container {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0, 0, 0.2);
}
.container {
    padding: 2px 16px;
}

img{
  width: 150px;
  height: 130px;
}

</style> -->