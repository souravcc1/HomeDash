titleEl = document.getElementById('title');
descriptionEl = document.getElementById('description');
imageEl = document.getElementById('image');
humanNameEl = document.getElementById('humanName');

(async () => {
    if (!localStorage.getItem('dash')) {
        window.location.href = '/all.html';
        return;
    }

    const form = document.getElementById('form');
    form.action = '/api/dash/'+localStorage.getItem('dash');

    const data = await (await fetch('/api/dash/'+localStorage.getItem("dash"), {headers:getAuthHeader()})).json();
    titleEl.value = data.title;
    descriptionEl.value = data.description;
    imageEl.value = data.image;
})();
