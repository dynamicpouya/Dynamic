AOS.init()
// --------------------------------------------Header--------------------------------------------------------------
//---------------------------------Logo Part-----------------------

function hoverLogo(){
    const logoEl=document.getElementById('logo')
    const logoBgEl=document.getElementById('redbglogo')
    function hover(){
        logoBgEl.style.display="block"
        logoBgEl.classList.add("animate__animated")
        logoBgEl.classList.add("animate__shakeY")
    }
    function remove(){
        logoBgEl.style.display="none"
        logoBgEl.classList.remove("animate__shakeY")
    }
    logoEl.addEventListener("mouseover", hover)
    logoEl.addEventListener("mouseout", remove)
}
const logo= async (endpointLogo)=> {
    try {
        const resource = await fetch(endpointLogo)
        const res = await resource.json()
        if(!res.status > 200) throw Error('lost data')
        const wrapperEl=document.getElementById("wrapperLogo")
        wrapperEl.insertAdjacentHTML("beforeend", `
<img src="${res[0].imgLogo}"  alt="log" class=" h-full ms-3 sm:ms-12 hover:scale-150 transition-all ease-in-out z-10 " id="logo">`)
        hoverLogo()

    } catch (e) {
        console.error(e)
    }
}

logo("http://localhost:3003/logoPic")

//---------------------------------Ul part--------------------------


const wrapperul=document.getElementById("ul")
const navbar= async (endpointNav)=> {
    try {
        const resource = await fetch(endpointNav)
        const res = await resource.json()
        if(!res.status > 200) throw Error('lost data')
        res.forEach(item=> {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.href = item.href
            a.textContent=item.text
            li.append(a)
            li.classList.add('ps-5')
            li.classList.add('hover:text-red-600')
            wrapperul.appendChild(li)
        })

    } catch (e) {
        console.error(e)
    }
}

navbar("http://localhost:3003/navbar")


// -------------------------menu-responsive-sm-md-lg-icon--------------------------------

const openEl=document.getElementById('icon')
const closeEl=document.getElementById('closeBtn')
const wrapperResponsiveDivEl=document.getElementById('wrapperResponsiveDiv')
const responEl=document.getElementById('responDiv')
const responUl= async (endpointNav)=> {
    try {
        const resource = await fetch(endpointNav)
        const res = await resource.json()
        if(!res.status > 200) throw Error('lost data')
        const ul=document.createElement("ul")
        res.forEach(item=> {
            const li = document.createElement("li")
            li.textContent=item.text
            ul.appendChild(li)
            function style(){
                let styleLi=['hover:text-red-600','flex','justify-center','sm:pt-5','sm:pb-5','pb-0','pt-1','border-b-2']
                li.classList.add(...styleLi)
            }
            style()
        })
        const classUl=['text-white','w-full']
        ul.classList.add(...classUl)
       responEl.appendChild(ul)

    } catch (e) {
        console.error(e)
    }
}
responUl("http://localhost:3003/navbar")

//--------------------------------matchPoint:for menu-------------------------------------------

 let mediaPoint =window.matchMedia("(max-width: 1024px)")
function breakpoint(x){
    if (x.matches){
        function stylesOfCoverMenu(){
            wrapperResponsiveDivEl.style.background='rgba(255, 255, 255, 0.04)'
            wrapperResponsiveDivEl.style.boxShadow=' 0 4px 30px rgba(0, 0, 0, 0.1)'
            wrapperResponsiveDivEl.style.backdropFilter='blur(6.3px)'
        }

        function activeBtn(){
            responEl.style.transition='all'
            responEl.style.transitionDuration='1000ms'
            responEl.style.transitionTimingFunction='ease-in-out'
            responEl.style.transform='translateX(0px)'
            responEl.classList.remove('translate-x-64')
            stylesOfCoverMenu()
        }
        function closeBtn(){
            responEl.style.transition='all'
            responEl.style.transform='translateX(250px)'
            responEl.style.transitionDuration='1000ms'
            responEl.style.transitionTimingFunction='ease-out'
            setTimeout(function (){
                wrapperResponsiveDivEl.removeAttribute('style')
            },1000)

        }
        openEl.addEventListener("click",activeBtn)
        closeEl.addEventListener('click', closeBtn)
    }else{
        wrapperResponsiveDivEl.style.display='none'
    }
}
breakpoint(mediaPoint)
mediaPoint.addEventListener('change',breakpoint)

//----------------------------section: fifa trailer----------------------------------------
const videoEl= document.createElement('video')
const srcEl= document.createElement('source')
const trailerEl=document.getElementById("Trailer")
const wrapperTrailerEl=document.getElementById("wrapperTrailer")
const bodyTrailer= async (endpointTrailer)=> {
    try {
        const resource = await fetch(endpointTrailer)
        const res = await resource.json()
        if (!res.status > 200) throw Error('lost data')
        srcEl.src=res[0].Media
        videoEl.appendChild(srcEl)
        trailerEl.appendChild(videoEl)
        trailerEl.classList.add('z-10')
        function style1(){
            videoEl.classList.add("w-full")
            videoEl.classList.add("rounded-2xl")
            videoEl.controls=true
            srcEl.classList.add("h-full")
            srcEl.classList.add("w-full")}
        style1()
        const bg=document.createElement("img")
        const text=document.createElement("h1")
        const button=document.createElement('button')
        bg.alt=`${res[2].alt}`
        bg.src=res[1].img
        text.textContent=res[3].text
        button.textContent=res[4].textButton
        wrapperTrailerEl.appendChild(bg)
        wrapperTrailerEl.appendChild(text)
        text.appendChild(button)
        // ----------------------------library aos part for text-----------------------
        text.setAttribute('data-aos',"flip-right")
        text.setAttribute('data-aos-delay',"50")
        text.setAttribute('data-aos-duration',"1000")
        text.setAttribute('data-aos-easing',"ease-in-out")
        text.setAttribute('data-aos-mirror',"true")
        text.setAttribute('data-aos-once',"false")
        text.setAttribute('data-aos-anchor-placement',"top-center")
        // ------------------------------------------------library aos for trailerEl-------------------------------------
        trailerEl.setAttribute('data-aos',"fade-up")
        trailerEl.setAttribute('data-aos-delay',"50")
        trailerEl.setAttribute('data-aos-duration',"1000")
        trailerEl.setAttribute('data-aos-easing',"ease-in-out")
        trailerEl.setAttribute('data-aos-mirror',"true")
        trailerEl.setAttribute('data-aos-once',"false")
        trailerEl.setAttribute('data-aos-anchor-placement',"top-center")
        // ---------------------------------------------------------------------------------------------------------------
        function styles(){
            bg.classList.add("opacity-50")
            bg.classList.add("z-0")
            bg.classList.add("w-full")
            const style2=['text-white','w-[50%]','z-10','absolute']
            text.classList.add(...style2)
            const style3=['right-0','font-bold','text-lg','sm:text-2xl','md:text-4xl','lg:text-5xl','ps-5','top-0','h-full','flex','flex-col','justify-center','items-baseline']
            text.classList.add(...style3)
            const style4=["hover:bg-yellow-500" ,"bg-yellow-300" ,"text-black" ,"text-[10px]","sm:text-lg","font-bold", "rounded-2xl", "px-6" , "py-3" ,"md:px-12" ,"md:py-5" ,"h-0" , "flex" ,"items-center" ,"justify-center" , "z-20", "transition-colors", "shadow",'mt-8']
            button.classList.add(...style4)

        }
        styles()
    } catch (e) {
        console.log(e)
    }
}
bodyTrailer("http://localhost:3003/mediaBody")
//---------------------------------------------section package of games---------------------------------------------------
const containerEl=document.getElementById("wrappercards")
const coverEl=document.getElementById("wrapperCover")
// -------------codes of background--------------------------
const back=document.getElementById('back')
const backimg= async (endpointImg)=> {
    try {
        const resource = await fetch(endpointImg)
        const res = await resource.json()
        if (!res.status > 200) throw Error('lost data')
        const data=res[0].background[0].bg
        const img =document.createElement('img')
        img.src=data
        img.alt=`${res[0].background[0].altImg}`
        img.classList.add("w-full")
        img.classList.add("h-full")
        img.classList.add("z-0")
        back.appendChild(img)
        coverEl.prepend(back)
    } catch (e) {
        console.log(e)
    }
}
backimg("http://localhost:3003/sectionPackage")
//-----------codes of packages-------------------------

const packageoff= async (endpointImgs)=> {
    try {
        const resource = await fetch(endpointImgs)
        const res = await resource.json()
        if (!res.status > 200) throw Error('lost data')
        const data=res[1].packages[0]
        const div=document.createElement('div')
        const image=document.createElement('img')
        for(const key in data){
            if(data.hasOwnProperty(key)){
                const div=document.createElement('div')
                const image=document.createElement('img')
                const src=data[key]
                image.src=src
                div.appendChild(image)
                function style(){
                    const styleDiv=["relative", "shadow-2xl", "shadow-black","hover:shadow-white", "transition-all", "transition-transform", "rounded-2xl",  "ms-[-50px]",  "hover:translate-y-[-20px]", "w-full", "left-0","sibling-target", "sibling","overflow-hidden"]
                    div.classList.add(...styleDiv)
                    image.classList.add("h-full")
                    image.classList.add("w-full")
                }
                style()
                containerEl.appendChild(div)

            }
        }
    } catch (e) {
        console.log(e)
    }
}
packageoff("http://localhost:3003/sectionPackage")
// ---------------codes of text--------------------------
const titleEl=document.getElementById('text')
const packageText= async (endpointText)=> {
    try {
        const resource = await fetch(endpointText)
        const res = await resource.json()
        if (!res.status > 200) throw Error('lost data')
        const data=res[2].title[0].text
        const h1 =document.createElement('h1')
        h1.textContent=data
        h1.classList.add("text-white")
        h1.classList.add("font-bold")
        h1.classList.add("text-[10px]")
        h1.classList.add("sm:text-[21px]")
        h1.classList.add("lg:text-[30px]")
        h1.classList.add("xl:text-[xx-large]")
        h1.classList.add("z-10")
        h1.classList.add("text-textColor")
        titleEl.appendChild(h1)
    } catch (e) {
        console.log(e)
    }
}
packageText("http://localhost:3003/sectionPackage")
// -----------------------------------------------------section: menu cards------------------------------------
const wrappermenuEl=document.getElementById("wrapperMenu")
const menuCard= async (endpointcard)=> {
    try {
        const resource = await fetch(endpointcard)
        const res = await resource.json()
        if (!res.status > 200) throw Error('lost data')
        const dataImg=res[0]
       const dataTitle=res[1]
       const dataPrice=res[2]
        const dataStar=res[3]
        for(const key in dataImg){
            if(dataImg.hasOwnProperty(key)){
                const divTitle=document.createElement('div')
                const divStar=document.createElement('div')
                const wrapperPriceStar=document.createElement('div')
                const image=document.createElement('img')
                const h1=document.createElement('h1')
                const priceText=document.createElement('p')
                const star=`
                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6 text-yellow-400 fill-yellow-400\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\" />\n</svg>
                 <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6 text-yellow-400 fill-yellow-400\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\" />\n</svg>
                  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6 text-yellow-400 fill-yellow-400\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\" />\n</svg>
                   <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6 text-yellow-400 fill-yellow-400\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\" />\n</svg>
                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6 text-yellow-400 fill-yellow-400\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\" />\n</svg>
                `

                h1.textContent=dataTitle[key]
                image.src=dataImg[key]
                priceText.textContent=dataPrice[key]
                divTitle.appendChild(image)
                divTitle.appendChild(h1)
                divStar.insertAdjacentHTML("beforeend", star)
                wrapperPriceStar.appendChild(divStar)
                wrapperPriceStar.appendChild(priceText)
                divTitle.appendChild(wrapperPriceStar)


                function style(){
                    const styleDiv=["flex-col","w-full","rounded-xl","overflow-hidden","flex","justify-center"]
                    divTitle.classList.add(...styleDiv)
                    image.classList.add('w-[50%]')
                    image.classList.add('rounded-xl')
                    image.classList.add('mx-auto')
                    image.classList.add('shadow')
                    image.classList.add('shadow-black')
                    image.classList.add('shadow-2xl')
                    image.classList.add('hover:shadow-white')
                    h1.classList.add('text-white')
                    h1.classList.add('ps-2')
                    h1.classList.add('pt-3')
                    h1.classList.add('mx-auto')
                    h1.classList.add('font-bold')
                    divStar.classList.add('flex')
                    divStar.classList.add('w-[5rem]')
                    priceText.classList.add('text-white')
                    wrapperPriceStar.classList.add('flex')
                    wrapperPriceStar.classList.add('justify-evenly')
                    wrapperPriceStar.classList.add('pt-4')
                    divTitle.classList.add("hover:translate-y-[-10px]")
                    divTitle.classList.add("transition-transform")
                    divTitle.classList.add("transition-all")
                    image.classList.add("hover:cursor-pointer")
                }
                style()
                wrappermenuEl.appendChild(divTitle)
            }
            }

    } catch (e) {
        console.log(e)
    }
}
menuCard("http://localhost:3003/sectionMenu")


