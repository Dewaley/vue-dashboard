import { ref } from "vue";
import { defineStore } from "pinia";

export const useHamburgerStore = defineStore("hamburgerStore", () => {
    const hamburger = ref(true)

    const toggleHamburger = () => {
        hamburger.value = !hamburger.value
    }

    return {
        hamburger,
        toggleHamburger
    }
});
