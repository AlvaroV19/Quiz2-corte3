<template>
    <ion-card>
        <ion-item>
            <ion-input id="id" type="hidden"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label="codigo: "></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label="nombre: "></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label="descripcion: "></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label="estado: "></ion-input>
        </ion-item>
    </ion-card>
</template>

<script lang="ts">
    import { IonInput } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonInput },
    props: {
        color: String     
    }
});
</script>