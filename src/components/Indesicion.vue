<template>
  <img :src="img" v-if="img !== ''" alt="bg">
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con un signo de interrogación (?)</p>

    <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer === 'yes' ? 'Si' : 'No' }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Indecision',
    data() {
        return {
            question: '',
            answer: '',
            img: '',
            isValidQuestion: false as boolean
        };
    },
    watch: {
        question(value: string, oldValue: string): void {
            (this as any).isValidQuestion = false;
            console.log({value});

            if (value.includes('?')) {
                (this as any).isValidQuestion = true;
                this.getAnswer();
            }
        }
    },
    methods: {
        async getAnswer(): Promise<void> {
            (this as any).answer = 'Pensando...';

            try {
                const response: Response = await fetch('https://yesno.wtf/api');
                const { answer, image } = await response.json();
                (this as any).img = image;
                (this as any).answer = answer
            } catch (error: unknown) {
                (this as any).answer = 'No se pudo cargar del API';
            }
        }
    }
});
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>