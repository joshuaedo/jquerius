const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>jQuerius</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap');
      html {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: black;
      }
      section {
        color: white;
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      jQuerius is live!
    </section>
  </body>
</html>
`;

module.exports = html;
