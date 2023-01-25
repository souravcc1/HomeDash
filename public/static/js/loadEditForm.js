titleEl = document.getElementById('title');
descriptionEl = document.getElementById('description');
imageEl = document.getElementById('image');
humanNameEl = document.getElementById('humanName');

(async () => {
    if (!localStorage.getItem('dash')) {
        return;
    }

    const form = document.getElementById('form');
    form.action = '/api/dash/'+localStorage.getItem('dash');

    const data = await (await fetch('/api/dash/'+localStorage.getItem("dash"), {headers:getAuthHeader()})).json();
    titleEl.value = data.title;
    descriptionEl.value = data.description;
    imageEl.value = data.image;
})();

document.querySelector('#send').addEventListener('click', (event)=> {
    event.preventDefault()

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const image = document.querySelector('#image').value;
    
    const path = localStorage.getItem('dash') ? '/api/dash/'+localStorage.getItem('dash') : '/api/dash/new'

    fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify({
            title: title,
            description: description,
            image: image
        })
    }).then(()=> {
        if(localStorage.getItem('dash')){
            window.location.href = '/'
        }
        else{
            window.location.href = '/all.html'
        }
    })
})