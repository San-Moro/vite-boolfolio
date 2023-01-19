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
    <div class="card mx-2" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>
</template>