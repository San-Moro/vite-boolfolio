<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";


export default {
    name: "ProjectsPage",
    components: {
        ProjectCard
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalPosts: null,
        }
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            axios.get(`${this.baseUrl}/api/projects`, {
                params: {
                    page: page
                }
            }).then(resp=> {
                //console.log(resp.data.results);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalPage = resp.data.results.total;
            })
        }
    }
}

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="container text-center">
        <h2 class="text-center mb-4">All our projects</h2>
        <div class="row row-cols-3 flex-wrap justify-content-center g-3">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
            <!-- pages navigation -->
            <nav class="navigation d-flex justify-content-between">
                    <div>
                        page {{ currentPage }} in {{ lastPage }}
                    </div>
                    <div>
                        <a class="btn btn-outline-primary me-2" :class="currentPage === 1 ? 'disabled' : ''" href=""
                            @click.prevent="getProjects(currentPage - 1)"><i class="fa-solid fa-arrow-left"></i></a>
                        <a class="btn btn-outline-primary" :class="{ 'disabled': currentPage === lastPage }" href=""
                            @click.prevent="getProjects(currentPage + 1)"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </nav>
        </div>
    </div>
</template>