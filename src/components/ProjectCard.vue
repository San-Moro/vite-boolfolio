<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card mx-2">

        <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top" alt="">
        <p v-else>No Image</p>

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <div class="d-flex justify-content-between">
                <p><span v-for="technology in project.technologies" :key="technology.id">-{{ technology.name }} </span></p>
                <p class="text-end text-success">{{ project.type ? project.type.title : 'No Type' }}</p>
            </div>
            <p class="card-text">{{ project.description }}</p>

            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" href="" class="btn btn-primary">
                Read more
            </router-link>
        </div>
        
    </div>
</template>