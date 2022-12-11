<template>
  <div class="container mx-auto">
    <div>
      <nav class="flex justify-between">
        <h2>Title</h2>
        <ul class="flex gap-2">
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<script setup>
</script>

<style>
body {
  font-family: "Chivo Mono", sans-serif;
}
</style>