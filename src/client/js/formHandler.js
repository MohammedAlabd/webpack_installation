const handleSubmit = async (event) => {
  event.preventDefault();
  let text = document.querySelector("#text").value;
  // check what text was put into the form field

  const dataToPost = {
    document: text,
  };

  const optionJSON = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  };

  console.log("::: Form Submitted :::");
  const res = await fetch("http://localhost:8081/add", optionJSON);
  try {
    const json = await res.json();
    Client.renderResults(json);
    return 1;
  } catch (error) {
    console.error("error", error);
    return 0;
  }
};

export { handleSubmit };
