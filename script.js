function openModal(){
    const overlayElement=document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}
function closeModel(){
    const overlayElement=document.getElementById('overlay');
    overlayElement.style.display = "none";
}

function openSidebar() {
    document.querySelector('.sidebar').style.left = '0';
  }
  
  
  function closeSidebar() {
    document.querySelector('.sidebar').style.left = '-250px';
  }
  