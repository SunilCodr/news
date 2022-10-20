console.log('This is practice news website')
// Initialiaze the news;api parameter
source = 'The Indian Express';
let apiKey = '09b3245a8f6b4e21b265624d8302ec75';
// Grab the news container
let newsAccordian = document.getElementById('news-accordian');
const xhr = new XMLHttpRequest();
// create aan ajax get request
xhr.open('get', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

let spinner = document.getElementById('spinner');
let accordian = document.querySelector('.accordion');
console.log('accordion ',accordian.children.length)
xhr.onreadystatechange = function() {
    console.log('ready State ', xhr.readyState)
}
console.log(' initial status ',xhr.status)

   

let item = document.querySelector('.accordion-item');

    function reload() {
        window.location.reload()
    }


console.log('first accordion length:', accordian.children.length)
    xhr.onload = function () {
    
        if (this.status == 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = '';
            articles.forEach(function(element, index) {
                let news = `<div class="accordion-item">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                        aria-expanded="false" aria-controls="collapse${index}">
                                        <b>Breaking News ${index+1}:</b>${element.title}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordian-collapse collapse" aria-labelledby="heading${index}"
                                    data-bs-parent="#newsAccordian c">
                                    <div class="accordion-body">${element.content}.<a href='${element.url}' target='_blank'> Read more here</a></div>
                                </div>
                                
                            </div> `
                    
                    newsHtml += news
            } )
            newsAccordian.innerHTML = newsHtml;
            spinner.style.display = 'none'
            console.log('accordion onload ',accordian.childElementCount)
            console.log('accordion length: ',accordian.children.length)

            

        }
    
        else {
            console.error('error occured')
        }
        
        
    
    }
    xhr.send();


    setTimeout(function() {
        console.log('20sec done')
        console.log('accordion length: ',accordian.children.length)
        if(accordian.children.length == 0) {
        console.log(' else status ',xhr.status)
        let retry = document.getElementById('error');
        let reload = document.getElementById('reloadBtn');
        retry.classList.add('show')
        retry.classList.remove('hide');
        reload.classList.add('show')
        reload.classList.remove('hide');
        spinner.style.display = 'none';
        console.log('10 second done')
        accordian.style.display = 'none'
        }
    },30000)

 
    


   
    





// window.addEventListener('load', ()=> {
//     spinner.style.display = 'none'
// })


