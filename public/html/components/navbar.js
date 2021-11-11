function navbar(){
    return `<nav class="bg-black sticky top-0 text-white h-20 flex z-70">
    <div class="container inline-flex mr-10 pl-7 items-center w-10/12">
        <a class="w-12 h-12 mx-4" href="index.html">
            <img src="./images/ZEE5_logo.svg" alt="">
        </a>
        <a class="px-3 text-sm"  href="index.html">
            <p class="border-b-2 border-white p-1">Home</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">TV Shows</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">Movies</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">Web Series</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">News</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">Premium</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">Live TV</p>
        </a>
        <a class="px-3" href="#">
            <p class="text-sm whitespace-nowrap p-1 border-black border-b-2 transition duration-250 ease-in hover:border-white">ZEEPLEX</p>
        </a>
        <a class="px-3 text-xs" href="#">
            <span class="material-icons p-1">
                apps
            </span>
        </a>
        
    </div>
    <div class="container inline-flex items-center w-4/12">
    
        <a class="px-3" href="#">
            <span class="material-icons p-1">
                search
            </span>
        </a>
        
        <a class="px-3" href="#">
            <span class="material-icons p-1">
                translate
            </span>
        </a>


        <button type="submit" class="ml-3 bg-black p-2 border border-white rounded-md text-xs font-bold transition duration-500 hover:bg-white hover:text-black"> <a href="sign_in.html" target="_blank"> LOGIN </a></button>
        
        <button class="ml-5 bg-purple-500 text-xs text-white font-bold transition duration-500 hover:bg-purple-800 py-2 px-3 rounded inline-flex items-center"> 
            <img class="w-5 mr-1" src="./images/crown.png"  alt=""/>
            <span>BUY PLAN</span>
        </button>

        <a class="px-3" href="#">
            <span class="material-icons p-1">
                menu
            </span>
        </a>
    </div>
</nav>`
}

export default navbar;