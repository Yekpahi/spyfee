<script>

export default {
    components: {

    }
}
</script>

<template>
    <div class="container">
        <div class="topcontainer">
            <p>Triez ici </p>
            <details>
                <summary>Duration</summary>
                <fieldset>
                    <legend>Choose your monster's features:</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked>
                        <label for="scales">Scales</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Horns</label>
                    </div>
                </fieldset>
            </details>

            <details>
                <summary>Langue</summary>
                <fieldset>
                    <legend>Choisissez une langue</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked>
                        <label for="scales">Français</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Anglais</label>
                    </div>
                </fieldset>
            </details>

            
            <details>
                <summary>Ancienneté</summary>
                <fieldset>
                    <legend>Choisissez la place d'Ancienneté</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked>
                        <label for="scales">Il y a un an </label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Ce mois</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Cette semaine</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Aujourd'hui</label>
                    </div>
                </fieldset>
            </details>

            
            <details>
                <summary>Pertinence</summary>
                <fieldset>
                    <legend>Choisissez votre choix de pertinence</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked>
                        <label for="scales">Plus commentés</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Plus notés</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Plus vus</label>
                    </div>
                </fieldset>
            </details>
        </div>
        <div class="bottomcontainer">
            <p>Les catégories</p>
            <ul>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.container {
    position: absolute;
    right: 0;
    width: 18vw;
    margin-right: 3rem;

}

.topcontainer {
    margin-top: 5px;
    padding: 0.5em;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

.bottomcontainer {
    margin-top: 50px;
    background-color: rgb(182, 182, 212);
}
</style>