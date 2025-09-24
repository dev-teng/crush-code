document.getElementById('btnHeart').addEventListener('click', function() {
    Swal.fire({
    title: 'For Raquel, Someone Truly Special 💖',
    html: `
      <p>Hi Raquel,</p>
      <p>You’re the kindest soul I know,</p>
      <p>Hardworking beyond words,</p>
      <p>And more beautiful than a sunset.</p>
      <p>Just wanted to remind you,</p>
      <b>You're amazing, and I’m lucky to know you.</b> 😊✨
    `,
    icon: 'info',
    confirmButtonText: 'You’re incredible! 🌟',
    background: '#fff0f5',
    backdrop: `
      rgba(255, 192, 203, 0.4)
      url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif")
      center
      no-repeat
    `,
    customClass: {
      popup: 'love-popup',
      title: 'love-title'
    }
  });
    }   
);  