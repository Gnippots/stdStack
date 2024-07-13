<script lang="ts">
    import "../app.css";
	import { getImageSrc } from '$lib/directus';
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
    import type { PageData } from '$lib/interfaces';
    export let data: PageData;
    import '@fortawesome/fontawesome-free/css/all.min.css'


    let links = [
        {href: '/about', label: 'About'}
    ]

</script>

<svelte:head>
    <title>{data.global.title}</title> 
    <link rel="icon" type="image/x-icon" href={getImageSrc(data.global.favicon)}>
</svelte:head>


<body>
    <header class="bg-[#222222] text-[#DDDDDD] p-1 flex justify-between items-center">
        <a href="/"><img src={getImageSrc(data.global.headerLogo)} alt="logo" class="logo"/></a>
        <div class="wide-menu">
            {#each links as link}
                <a href={link.href}>{link.label}</a>
            {/each}

        </div>
        <div class="hamburger-menu">
            <HamburgerMenu>
                <div>
                    {#each links as link}
                        <p><a href={link.href}>{link.label}</a></p>
                    {/each}
                </div>
            </HamburgerMenu>

        </div>
    </header>

    <div class="overflow-auto h-[calc(100vh-45px)]">
        <slot></slot>
    </div>
</body>

<style>
    header .logo {
        max-height: 40px;
    }

    body {
        height: 100vh;
        margin: 0;
        position: relative;
        z-index: -2;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    .wide-menu {
        padding-right: 4px;
        display: none;
        gap: 20px;
    }

    .hamburger-menu {
        display: block;
        padding-right: .8rem;
    }

    @media (min-width: 768px) {
        .hamburger-menu {
            display:none;
        }

        .wide-menu {
            display: flex;
        }
    }

    .hamburger-menu div {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
        position:absolute;
        right: 0px;
        background-color: #222222;
    }
    .hamburger-menu p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        display: flex;
        gap: 1rem;
    }
    .hamburger-menu p:hover {
        text-decoration: underline;
    }


</style>
