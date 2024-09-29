export const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
  
export const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }