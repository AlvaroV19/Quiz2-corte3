<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Rol</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content>       
        <ComponentNew></ComponentNew>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import ComponentNew from '@/components/ComponentNew.vue';
</script>