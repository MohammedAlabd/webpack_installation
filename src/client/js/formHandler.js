const handleSubmit = async (event) => {
  event.preventDefault();
  let input = document.querySelector("#text").value;
  // check what text was put into the form field

  const dataToPost = {
    document: input,
  };

  const optionJSON = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  };
  if(!formValidData(input)) {
    alert("please enter an atrial of 10 words or more")
    return
  }
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

const formValidData =(input) => {
  return input.split(" ").length > 9 
}
export { handleSubmit };
