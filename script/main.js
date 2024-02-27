// load data from api
const loadPhone = async (brand,showAll) => {

const getResponse = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brand}`)

    const data = await getResponse.json();

    displayPhones(data.data, showAll)

}

//display data 

const displayPhones = (phones,showAll) => {


    const showAllBtn = document.getElementById('showAllBtn')

    //display show all button according to data length

    if ( phones.length > 12 && !showAll) {

        showAllBtn.classList.remove('hidden')
    } else {
        showAllBtn.classList.add('hidden')

    }

    if (!showAll) {
        phones = phones.slice(0,12)
    }

    
    const parent = document.getElementById('card-Container')
    parent.textContent =''
    phones.forEach(element => {

        const child = document.createElement('div')

        child.innerHTML = `

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow   text-center px-7 py-4 ">
            <a href="#" class=" rounded-lg grid place-content-center p-9 w-full dark:bg-[#0D6EFD0D]">
                <img class="" src=${element.image} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-2xl poppins-semibold pt-7 tracking-tight text-gray-900 ">${element.phone_name}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse py-3">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900">$599</span>
                    <a class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2" onclick="loadDetails('${element.slug}')">Show Details</a>
                </div>
            </div>
        </div>
        `

        parent.appendChild(child)
    });
    loadingToggle(false)
}

//set search logic
const search = document.getElementById('search-btn')
const searchField = document.getElementById('default-search')

function searchApi(showAll){

    
    loadPhone(searchField.value,showAll)
    loadingToggle(true)
}

//set spinner toggle

const loadingToggle = (isToggled) =>{
    
    const parent = document.getElementById('spinner')

    if(isToggled){
        parent.classList.remove('hidden')
    }else{
        parent.classList.add('hidden')

    }
}

//show all data according to condition

document.getElementById('showAllBtn').addEventListener('click', ()=>{
    searchApi(true)
    // console.log("showAll");
})

// load details

async function loadDetails(id){
    const getResponse = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await getResponse.json()
    const phoneInfo = data.data;
    console.log(phoneInfo);
    document.getElementById('phone-details-name').innerText = phoneInfo?.name
    document.getElementById('phone-details-image').setAttribute('src', phoneInfo?.image)
    document.getElementById('add-details').innerHTML = `
                    <p class=" text-xl font-bold pb-2 text-black ">Storage :<span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.mainFeatures?.storage}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Display Size : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.mainFeatures?.displaySize}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Chipset : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.mainFeatures?.chipSet}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Memory : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.mainFeatures?.memory}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Slug : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.slug}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Bluetooth : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.others?.Bluetooth}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">Brand : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.brand}</span></p>
                    <p class=" text-xl font-bold pb-2 text-black ">GPS : <span class=" text-sm pl-2 text[#706F6F] ">${phoneInfo?.others?.GPS}</span></p>
                    
    `
    
    document.getElementById('popupModal').classList.remove('hidden')
}

document.getElementById('closeModal').addEventListener('click',function(){
    document.getElementById('popupModal').classList.add('hidden')

})

