<template >
    <div class="card bg-primary text-white shadow">
        <img src="https://picsum.photos/400/200" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <p class="card-text"><ul>
                <li>Altezza: {{character.height}}cm</li>
                <li>Peso: {{character.mass}}Kg</li>
                <li>Genere: {{character.gender}}</li>
                <li>Anno nascita: {{character.birth_year}}</li>
            </ul></p>
        </div>
    </div>
</template>



<script>
export default {
props: {
    character: Object,
}
}
</script>




<style scoped lang="scss">

</style>