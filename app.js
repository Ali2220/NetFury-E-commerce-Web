let icon = document.querySelector('.icon');
let ul = document.querySelector('ul');

icon.addEventListener('click', () => {
  ul.classList.toggle('showData'); // adding class named 'showData' in ul and using toggle so that first it shows and then it hides

  // ye condition is liye lgayi hai k jb home, shop etc show ho to x k icon dikhe
  if (ul.className == 'showData') {
    document.getElementById('bar').className = 'fa-regular fa-circle-xmark';
  } else {
    document.getElementById('bar').className = 'fa-solid fa-bars';
  }
});

// navbar

let shops = document.getElementById('shops');
let reviews = document.getElementById('reviews');
let blogs = document.getElementById('blogs');
let contacts = document.getElementById('contacts');

shops.addEventListener('click', () => {
  shops.style.color = '#50c878';
  reviews.style.color = 'wheat';
  blogs.style.color = 'wheat';
  contacts.style.color = 'wheat';
});

reviews.addEventListener('click', () => {
  reviews.style.color = '#50c878';
  shops.style.color = 'wheat';
  blogs.style.color = 'wheat';
  contacts.style.color = 'wheat';
});

blogs.addEventListener('click', () => {
  blogs.style.color = '#50c878';
  shops.style.color = 'wheat';
  reviews.style.color = 'wheat';
  contacts.style.color = 'wheat';
});

contacts.addEventListener('click', () => {
  contacts.style.color = '#50c878';
  shops.style.color = 'wheat';
  reviews.style.color = 'wheat';
  blogs.style.color = 'wheat';
});

// Card js

let crd = document.querySelectorAll('.crd');
let itemPage = document.querySelector('.itemPage');
let container = document.querySelector('.container');
let itemImg = document.getElementById('itemImg');
let buyBtn = document.getElementById('buyBtn');

crd.forEach(function (curValue) {
  curValue.addEventListener('click', function () {
    itemPage.style.display = 'flex';
    container.style.display = 'none';

    let imgSrc = curValue.firstElementChild.src;
    itemImg.src = imgSrc;

    buyBtn.addEventListener('click', function () {
      document.querySelector('.buyPage').style.display = 'block';
      document.querySelector('.buyText').innerHTML = `
      <h3>Enter Details :</h3>
        <input type="text" placeholder="Enter Your Name" id="name" /> <br />
        <input type="text" placeholder="Enter Your Address" id="address" /> <br />
        <input type="number" placeholder="Enter Your Mobile Number" id="num" /> <br />
        <h3>Payment Option</h3>
        <select>
          <option value="Google-Pay">Google-Pay</option>
          <option value="Phone-Pay">Phone-Pay</option>
          <option value="Direct-bank-transfer">Direct bank transfer</option>
          <option value=" Cash-on-Delivery">Cash on Delivery</option>
        </select>
        <br />

        
        
      `;
      let buyText = document.querySelector('.buyText');
      let button = document.createElement('button');
      button.innerText = 'Submit';
      buyText.appendChild(button);

      button.addEventListener('click', function () {
        let name = document.getElementById('name');
        let address = document.getElementById('address');
        let num = document.getElementById('num');

        if (name.value == '' && address.value == '' && num.value == '') {
          alert('Please Enter Details');
        } else {
          alert('Your order is Placed');
          document.querySelector('.buyPage').style.display = 'none';
        }
      });

      let cross = document.querySelector('.cross');
      cross.addEventListener('click', function () {
        document.querySelector('.buyPage').style.display = 'none';
      });
    });
  });
});

// connect

function connect() {
  let names = document.getElementById('names');
  let number = document.getElementById('number');

  if (names.value == '' || number.value == '') {
    alert('Fill Details');
  } else {
    alert('Thanks For Connecting');
  }
}
