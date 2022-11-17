



window.addEventListener("load", () => 
{

     let filmBlock = document.createElement('div')
     filmBlock.classList.add("filmBlock");

    let url = 'https://api.kinopoisk.dev/movie?field=rating.kp&search=9-10&field=year&limit=500&search=2010-2020&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06' 

    let m = document.querySelector(".button").addEventListener("click", () => {

            filmBlock.innerHTML = ' '

            let container = document.querySelector('.movie')


            fetch(url).then(res => res.json()).then(data => {

            let rand = Math.floor(Math.random()*data.docs.length)

            console.log(data.docs)
                
            let film = data.docs[rand];
            
            let name = film.name
            

            let img = film.poster.url;
            let year = film.year;
            let country = film;

            filmBlock.innerHTML = `
                <img src=${img}>
                <p> ${name} (${year})</p> 
            `
            console.log(data.docs)

            container.appendChild(filmBlock)
        
        })
            
    })
    
})



