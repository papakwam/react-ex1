import React from 'react';


function Card() {
  return (
    <div className='card'>
      <h2>Virtual Class</h2>
      <p>This will aid our mates that can not join us face to face</p>
      <img
        src='https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpcnR1YWwlMjBhc3Npc3RhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' // Add an image URL or replace with actual image
        alt='Virtual Class'
      />
    </div>
  );
}

export default Card;

