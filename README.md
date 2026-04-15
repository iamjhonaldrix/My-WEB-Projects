body {
  margin: 0;
  background: #0b0f14;
  font-family: "Courier New", monospace;
  color: #4c8eff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.window {
  width: 750px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #1f2a33;
  box-shadow: 0 0 30px rgba(0,255,120,0.15);
}

.titlebar {
  background: #111820;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 13px;
}

.terminal {
  background: rgba(10, 15, 20, 0.95);
  padding: 15px;
  min-height: 300px;
}

#output {
  margin-bottom: 10px;
}

.line {
  margin-bottom: 2px;
}

.prompt-text {
  color: #4c8eff;
}

.input-text {
  color: #ffffff;
}

.success { color: #4cff88; }
.error { color: #ff4d4d; }
.info { color: #ffffff; }

.input-line {
  display: flex;
  align-items: center;
}

.prompt {
  margin-right: 8px;
}

.input-wrapper {
  position: relative;
  flex: 1;
}

#cmdInput {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: inherit;
  position: relative;
  z-index: 2;
}

#hint {
  position: absolute;
  left: 0;
  top: 0;
  color: #7d91b3;
  pointer-events: none;
  z-index: 1;
}

.dir { color: #4da6ff; }
.exec { color: #4cff88; }
.link { color: #00ffff; }
.archive { color: #ff4d4d; }
.image { color: #ff4dff; }
.device { background: yellow; color: black; }
.file { color: #ffffff; }
.clickable { color: #00ffff;}

.link-item {
  text-decoration: none;
  cursor: pointer;
  color: orange;
}

.link-item:hover {
  text-decoration: underline;
  opacity: 0.8;
}

</style>
</head>

<body>

<div class="window">

  <div class="titlebar">
    <span>b3rl1n@kali</span>
  </div>

  <div class="terminal">
    <div id="output"></div>

    <div class="input-line">
      <span class="prompt" id="prompt">(b3rl1n㉿kali)-[~]</span>

      <div class="input-wrapper">
        <span id="hint">type help</span>
        <input id="cmdInput" autofocus />
      </div>
    </div>
  </div>
</div>
