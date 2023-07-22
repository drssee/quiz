<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "QuizView",
    components: {
        QuizTemplate: () => import('@/components/QuizTemplate.vue')
    },
    data() {
        return {
            category: ['카테고리1', '카테고리2', '카테고리3']
        }
    }
})
</script>

<template>
    <v-container>
        <v-app-bar>
            <v-app-bar-title>
                퀴즈
                <v-select :items="category" label="카테고리"/>
            </v-app-bar-title>
            <v-spacer/>
            <template>
                <v-btn>오답노트</v-btn>
                <v-btn>지난문제</v-btn>
                <v-btn to="/insert">퀴즈등록</v-btn>
            </template>
        </v-app-bar>
        <quiz-template/>
    </v-container>
</template>

<style scoped>

</style>