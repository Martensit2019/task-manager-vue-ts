<template>
  <div class="layout">
    <TheHeader />
    <main class="main">
      <Container>
        <RouterView />
      </Container>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 97vh;
}
.main {
  flex: 1;
}
</style>
