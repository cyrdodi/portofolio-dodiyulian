<template>
  <Head>
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,400,500,600,700"
    />
  </Head>

  <div class="container mx-auto p-4">
    <div>
      <nav class="flex justify-between border-b pb-4">
        <h2>Dodi Yulian</h2>
        <ul class="flex gap-2">
          <!-- <li>Home</li>
          <li>About</li> -->
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
  font-family: "Roboto Mono", "Space Mono", sans-serif;
}
</style>

