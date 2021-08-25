const React = require("react");
const electron = require("electron");
const {ipcRenderer} = electron;

const Window = ({ title, children }) => {
  const closeWindow = () => {
    ipcRenderer.send('close-window');
  }

  return (
    <div class="window">
      <header class="window-header">
        <img class="window-header-icon" src="close.png" />
        <div class="window-header-title">{title}</div>
        <button class="window-header-button window-header-close" onClick={closeWindow} />
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
