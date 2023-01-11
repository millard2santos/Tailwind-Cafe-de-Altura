const container = document.getElementById('container')
const empty = document.getElementById('empty')
const counter = document.getElementById('counter')
let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
    empty.classList.add('hidden')
    
    cart = JSON.parse(localStorage.getItem('cart'))
    counter.innerText = cart.length
    cart.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `<div class="flex gap-7">
        <div class="flex gap-3.5 items-center">
            <img src="/assets/icons/minus.png" alt="" class="w-3 ">
            <div
                class="w-6 h-6 flex justify-center items-center bg-greenCounter rounded-full text-xs text-green">
                1</div>
            <img src="/assets/icons/plus.png" alt="" class="w-3 h-3">
        </div>
        <img src="${element.img}" alt="" class="w-[55px] h-[55px]">
        <div class="flex flex-col justify-center">
            <p class="font-semibold text-sm">${element.name}</p>
            <p class="text-sm">Paquete de café, 250gr</p>
        </div>
    </div>
    <p class="font-semibold text-lg">${element.price}</p>`
    div.classList.add('flex', 'justify-between', 'items-center', 'gap-6')
    container.append(div)
    });
}



