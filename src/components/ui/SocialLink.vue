<template>
    <a
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        class="size-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors duration-200"
        :aria-label="label"
    >
        <Icon :icon="icon" class="size-4" />
    </a>
</template>

<script setup lang="ts">
import type { SocialLinkProps } from "@/types";
import { Icon } from "@iconify/vue";

defineProps<SocialLinkProps>();
</script>
