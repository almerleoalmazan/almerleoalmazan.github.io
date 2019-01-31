
const element = document.querySelector('#machine');
const btn = document.querySelector('.btn');

const machine = new SlotMachine(element, {
  active: 0,
  delay: 12000,
  transition: 'ease-in-out',
  randomize() {
    return 197;
  }
});

btn.addEventListener('click', () => {
  machine.shuffle(205);

  machine.stop();

  btn.style.fontSize = '30px';
  btn.style.fontWeight = 'bold';
  btn.style.color = 'black';
  btn.innerText = 'Congratulations to:';
  btn.disabled = true;
  btn.className = 'btn';
});

