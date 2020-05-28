function handleSubmit(event) {
  event.preventDefault();

  let text = document.querySelector("#text").value;
  // check what text was put into the form field
  // checkForName(text)

  const configObj = {
    METHOD: {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: text,
    },
  };

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/post", configObj)
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      document.getElementById("results").innerHTML = res.message;
    });
}

export { handleSubmit };
