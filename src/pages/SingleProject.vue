<script>
import axios from 'axios';

export default {
    name: "SingleProject",
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            project: {},
        }
    },
    created() {
        //console.log(this.$route.params.slug);

        const slug = this.$route.params.slug;
        axios.get(`${this.baseUrl}/api/projects/${slug}`).then(resp=> {
            //console.log(this.resp.data.project);
            if (resp.data.success) {
                this.project = resp.data.project;
            } else {
                this.$router.push({name:"NotFound"});
            }
        }); 
    }
}
</script>

<template>
    <div class="container">
            <h2 class="text-center mb-4">{{ project.title }} </h2>
            <p class="text-center text-success">{{ project.type ? project.type.title : 'No Type' }}</p>
            <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top" alt="">
            <p v-else>No Image</p>
            <p>{{ project.description }}</p>
    </div>
</template>