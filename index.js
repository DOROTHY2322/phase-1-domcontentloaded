// Your code goes here
const body=document.querySelector('p');
body.innerHTML= '<p>JavaScript is so cool. It lets me add text to my page programmatically.</p>'
//add an event
const event = document.createEvent('Event');
event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event );
    body.querySelector('p');
    body.textContent = ('This is really cool!');
    console.log(body.textContent);
