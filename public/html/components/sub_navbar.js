function navbar(){
    return `<nav class="bg-black sticky top-0 text-white h-20 flex">
    <div class="container inline-flex mr-10 pl-7 items-center w-10/12">
        <a class="w-12 h-12 mx-4" href="index.html">
            <img src="./images/ZEE5_logo.svg" alt="">
        </a>
    </div>
    
    <div class="container inline-flex flex-row-reverse items-center w-1/12">

        <button type="submit" class="ml-3 bg-black p-2 border border-white rounded-md text-xs font-bold transition duration-500 hover:bg-white hover:text-black"> <a href="sign_in.html" target="_blank"> LOGIN </a></button>

    </div>
</nav>`
}

export default navbar;