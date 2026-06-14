<template>
    <li>
        <slot />
    </li>
</template>

<script setup lang="ts">
defineProps<{
    variant?: string;
}>();
</script>
