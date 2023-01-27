<script>
export default {
    data: function () {
        return {

        }
    },
}
</script>

<template>

    <div class="filterelement">

        <fieldset>
            <legend>Choose your favorite monster</legend>
            <details>
                <summary>Durée</summary>
                Something small enough to escape casual notice.
            </details>
            <details>
                <summary>Langue</summary>
                Something small enough to escape casual notice.
            </details>
            <details>
                <summary>Date de publication</summary>
                Something small enough to escape casual notice.
            </details>
        </fieldset>
    </div>
</template>>
     

<style scoped>
.filterelement {
    margin-top: 1em;
}

legend {
    background-color: #000;
    color: #fff;
    font-size: 0.8em;
    padding: 0.2em;
}

input {
    margin: 0.2rem;
    font-size: 0.5em;
}

details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.2em 0.5em 0;
}

summary {
    font-weight: bold;
    margin: -0.2em -0.2em 0;
    padding: 0.2em;
    font-size: 0.6em;
}

details[open] {
    padding: 0.5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
}
</style>