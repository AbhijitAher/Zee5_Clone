function navbar(){
    return `<nav class="bg-black sticky top-0 text-white h-20 pt-4 flex">
    <div class="container flex mr-10">
        <a class="w-12 h-12" href="#">
            <img src="./images/ZEE5_logo.svg" alt="">
        </a>
        <a class="px-5 text-sm"  href="index.html">
            <p>Home</p>
        </a>
        <a class="px-5" href="#">
            <p class="text-sm whitespace-nowrap">TV Shows</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>Movies</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>Web Series</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>News</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>Premium</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>Live TV</p>
        </a>
        <a class="px-5 text-sm whitespace-nowrap" href="#">
            <p>ZEEPLEX</p>
        </a>
        <a class="px-5 text-sm" href="#">
            <span class="material-icons">
                apps
            </span>
        </a>
    </div>
    <div class="container">
        <a class="" href="#">
            <span class="material-icons">
                search
            </span>
        </a>
        <button type="submit" class="ml-5 bg-black py-2 px-3 border border-white rounded-md text-sm font-bold transition duration-500 hover:bg-white hover:text-black"> <a href="sign_in.html" target="_blank"> LOGIN </a></button>

        <button type="button" class="ml-5 bg-purple-500 py-2 px-3 rounded text-sm text-white font-bold transition duration-500 hover:bg-purple-800">BUY PLAN</button>
    </div>
</nav>`
}

export default navbar;