const updateGreet = newGreetMessage => {
  const greetElement = document.querySelector("#greet")
  greetElement.innerHTML = newGreetMessage
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = new URL(window.location);
  const queryParams = new URLSearchParams(currentUrl.search);
  greetMessage = queryParams.get("greet");
  if (greetMessage) {
    updateGreet(queryParams.get("greet"));
  }
})
