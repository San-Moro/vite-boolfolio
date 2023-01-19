<script>
import axios from "axios";

export default {
    name: "AppMain",
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: []
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`).then(resp=> {
                this.projects = resp.data.results;
            })
        }
    }
}

</script>

<template>
    <div class="container text-center">
        <h2 class="text-center mb-4">All our projects</h2>
        <div class="row row-cols-3 flex-wrap justify-content-center g-3">
            <div class="card mx-2" style="width: 18rem;" v-for="project in projects" :key="project.id">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
           
        </div>
    </div>
</template>
