<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "QuizTemplate"
})
</script>

<template>
    <v-container>
        <div>
            Q.
            <v-textarea disabled value="퀴즈내용"/>
        </div>
        <div>
            A.
            <v-text-field label="정답입력"/>
            <v-btn>제출</v-btn>
        </div>
    </v-container>
</template>

<style scoped>

</style>