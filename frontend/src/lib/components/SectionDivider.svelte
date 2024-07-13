<script lang=ts>
    export let src;
	import { getImageSrc } from "$lib/directus";
</script>
<div class="relative h-0">
    <div class="divider" style="background-image: url('{getImageSrc(src)}')"/>
</div>
<style>

    .divider{
        background-color: #371B5600;
        background-position: center center;
        background-repeat: repeat-x;
        background-size: 650px auto;
        position: absolute;
        width: 100%;
        height: 50px;
        z-index: 5;
        left: 0%;
        top: -25px;
    }
</style>