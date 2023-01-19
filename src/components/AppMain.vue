<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";


export default {
    name: "AppMain",
    components: {
        ProjectCard
    },
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
            <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
        </div>
    </div>
</template>
