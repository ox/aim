const React = require("react");
const electron = require("electron");
const {ipcRenderer} = electron;

const Window = ({ title, children }) => {
  ipcRenderer.send('bar', 123);

  return (
    <div class="window">
      <header class="window-header">
        <img class="window-header-icon" src="close.png" />
        <div class="window-header-title">{title}</div>
        <button id="closeBtn" class="window-header-button window-header-close" />
        <button class="window-header-button window-header-maximize" />
        <button class="window-header-button window-header-minimize" />
      </header>
      <section>
        {children}
      </section>
    </div>
  );
}

Window.defaultProps = {
  title: "thunderfunk88",
};

module.exports = Window;
