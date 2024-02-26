<template>
  <header class="header">
    .
    <Container>
      <nav class="nav">
        <div>
          <router-link to="/"><div class="logo">Таск-менеджер</div></router-link>
        </div>
        <div class="menu">
          <router-link to="/"><div class="menu__btn">Таск-менеджер</div></router-link>
          <router-link to="/about"><div class="menu__btn">О программе</div></router-link>
        </div>
      </nav>
    </Container>
  </header>
</template>

<style scoped lang="scss">
@import 'theHeader';
</style>
