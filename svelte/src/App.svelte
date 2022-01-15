<script>
    let list = [];
    let text = "";
    function handleSubmit(e) {
        e.preventDefault();
        list = [...list, text];
    }
    function handleDelete(text) {
        list = list.filter((x) => x != text);
    }
</script>

<form on:submit={handleSubmit}>
    <p>Input a text</p>
    <input type="text" id="textInput" bind:value={text} />
</form>
<ul>
    {#each list as text}
        <li>
            {text}
            <button on:click={() => handleDelete(text)}>Delete</button
            >
        </li>
    {/each}
</ul>
