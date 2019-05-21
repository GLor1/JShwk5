var rootDiv = document.getElementById('root');

var container = document.createElement('div');

var logo = document.createElement('img');
logo.src = 'cool.jpg';
logo.style.width = '50%';
logo.style.length = '50%';
logo.style.marginLeft = '30%';
logo.style.opacity= '.6';


rootDiv.appendChild(container);
rootDiv.appendChild(logo);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function(){
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
        data.forEach(users => {
            var card = document.createElement('div');
            card.classList.add('w3-card', 'w3-green', 'w3-cell-middle')
            var header1 = document.createElement('h1');
            header1.textContent = users.email;
            header1.style.textAlign = 'center';

            var para1 = document.createElement('p');
            para1.textContent = users.name;
            para1.style.textAlign= 'center';

            var cphrase = document.createElement('p');
            cphrase.textContent = users.catchPhrase;


            container.appendChild(card);
            card.appendChild(header1);
            card.appendChild(para1);    

        });
    }else {
        console.log('error');
        var errorMessage = document.createElement('marquee');
        errorMessage.textContent = "oh no.";
        rootDiv.appendChild(errorMessage);
}
}
request.send();