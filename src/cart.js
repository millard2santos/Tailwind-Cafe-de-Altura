const container = document.getElementById('container')
const empty = document.getElementById('empty')
const counter = document.getElementById('counter')
const subtotal = document.getElementById('subtotal')
const envio = document.getElementById('envio')
const total = document.getElementById('total')
const inputEnvio = document.querySelectorAll('.envio')
console.log(inputEnvio);




let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
    empty.classList.add('hidden')
    cart = JSON.parse(localStorage.getItem('cart'))
    let cartFiltered = cart.filter((e, i) =>
        i === cart.findIndex((t) => (
            e.name === t.name
        ))
    )
    let cartFilteredLength = []
    cartFiltered.forEach(e => {
        cartFilteredLength.push(cart.filter((x) => x.name === e.name).length);
    })
    

    counter.innerText = cart.length
    cartFiltered.forEach((element, i) => {
        const div = document.createElement('div')
        div.innerHTML = `<div class="flex gap-7">
        <div class="flex gap-3.5 items-center">
            <img src="/assets/icons/minus.png" alt="" class="w-3 ">
            <div
                class="quantity w-6 h-6 flex justify-center items-center bg-greenCounter rounded-full text-xs text-green">
                ${cartFilteredLength[i]}</div>
            <img src="/assets/icons/plus.png" alt="" class="w-3 h-3">
        </div>
        <img src="${element.img}" alt="" class="w-[55px] h-[55px]">
        <div class="flex flex-col justify-center">
            <p class="font-semibold text-sm">${element.name}</p>
            <p class="text-sm">Paquete de café, 250gr</p>
        </div>
    </div>
    <p class="font-semibold text-lg">${Number(element.price) * cartFilteredLength[i]},00</p>`
        div.classList.add('flex', 'justify-between', 'items-center', 'gap-6')
        container.append(div)
        subtotal.innerText = Number(subtotal.innerText) + Number(element.price) * cartFilteredLength[i] 
        total.innerText = Number(total.innerText) + Number(element.price) * cartFilteredLength[i] 
    });
    inputEnvio.forEach( e => {
        let final = Number(total.innerText) + Number(e.value)
        e.addEventListener('click', (event) => {
            event.target.value != '0' ? envio.innerText = event.target.value + ',00' : envio.innerText = 'GRATIS'
            total.innerText = final + ',00'
        })
    })
    subtotal.innerText += ',00€'
    
    






}





