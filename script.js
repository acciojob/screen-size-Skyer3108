
function updateSize() {
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    

    const sizeInfoElement = document.querySelector('#sizeInfo h1');
    
   
    sizeInfoElement.textContent = `Width: ${width} and Height: ${height}`;
}


updateSize();


window.addEventListener('resize', updateSize);