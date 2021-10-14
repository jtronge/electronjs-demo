// Notice communication with the backend process through the
// window.backgroundAPI object
document.querySelector("#test-button-0")
  .addEventListener("click", async () => {
    await window.backgroundAPI.doAction0();
  });
document.querySelector("#test-button-1")
  .addEventListener("click", async () => {
    await window.backgroundAPI.doAction1();
  });
document.querySelector("#test-button-2")
  .addEventListener("click", async () => {
    await window.backgroundAPI.doAction2();
  });
