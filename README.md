<style>
  body {
    margin: 0;
    font-family: "Courier New", monospace;
    background: #000;
    color: #00ff9c;
  }

  .container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #00ff9c;
    box-shadow: 0 0 20px #00ff9c33;
  }

  h1 {
    text-align: center;
    color: #00ff9c;
    text-shadow: 0 0 8px #00ff9c;
  }

  p {
    text-align: center;
    color: #9affd6;
  }

  .terminal {
    background: #020202;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #00ff9c55;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  .links a {
    text-decoration: none;
    color: #00ff9c;
    padding: 10px;
    border: 1px solid #00ff9c;
    transition: 0.2s;
  }

  .links a:hover {
    background: #00ff9c;
    color: #000;
    box-shadow: 0 0 10px #00ff9c;
  }

  .prompt::before {
    content: "b3rl1n@jhonaldrix:~$ ";
    color: #00ff9c;
  }

  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
    color: #00ff9c88;
  }
</style>

<div class="container">

  <div class="terminal">
    <p class="prompt">Initializing repository...</p>
    <p class="prompt">Loading web projects...</p>
    <p class="prompt">Access granted.</p>

    <div class="links">
      <a href="https://myportfolio-ec1axaecd-iamjhonaldrixs-projects.vercel.app/" target="_blank">
        [ ./PORTFOLIO ]
      </a>

      <a href="https://iamjhonaldrix.github.io/My-WEB-Projects/Raine" target="_blank">
        [ cd Raine ]
      </a>

      <a href="https://iamjhonaldrix.github.io/My-WEB-Projects/Calculator" target="_blank">
        [ cd Calculator ]
      </a>
    </div>
  </div>

  <div class="footer">
    system://status → online | more builds incoming...
  </div>
</div>
