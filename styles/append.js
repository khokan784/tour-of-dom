// where add?
const placeslist = document.getElementById('places-list');
// what to be add
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// add the child
placeslist.appendChild('li');

// **************************************************

// where add?
const maincontainer = document.getElementById('main-container');
// what to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);
maincontainer.appendChild(section);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani kabo';
ul.appendChild(li1);



// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>my dress section</h1>
    <ul>
        <li>shity</li>
        <li>pent</li>
        <li>lungi</li>
    </ul>
`
maincontainer.append(sectionDress);