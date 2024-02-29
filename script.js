const dots = document.querySelectorAll('.dot');
const blocks = document.querySelectorAll('.block');

function scrollToBlock(blockNumber) {
  const targetBlock = blocks[blockNumber - 1];
  targetBlock.scrollIntoView({ behavior: 'smooth' });
  setActiveDot(blockNumber);
}

function setActiveDot(index) {
  dots.forEach((dot, i) => {
    if (i === index - 1) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', () => {
  let currentBlock = 0;
  blocks.forEach((block, index) => {
    const blockTop = block.offsetTop - window.innerHeight * 0.5;
    if (window.scrollY >= blockTop) {
      currentBlock = index + 1;
    }
  });
  setActiveDot(currentBlock);
});
