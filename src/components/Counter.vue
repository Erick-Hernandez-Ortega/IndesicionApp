<template>
    <h2>Counter {{ title }}</h2>
    <p>{{ count }} <sup>2</sup> = {{ squareValue }}</p>

    <div>
        <button type="button" @click="count++">+1</button>
        <button type="button" @click="count--">-1</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // Por TS

export default defineComponent ({
    name: "Counter",
    props: {
        title: {
            type: String,
            default: 'Counter',
            validator (value: string): boolean {
                return value.length > 5
            }
        }
    },
    data () {
        return {
            count: 0
        }
    },
    methods: {
        getSquareValue (): number {
            return this.count * this.count
        }
    },
    computed: {
        squareValue (): number {
            return this.count * this.count
        }
    }
});
</script>


<style scoped>
button {
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>