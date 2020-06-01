const renderResults = (json) => {
  const {
    label,
    polarity,
    subjectivity,
    organization,
    person,
    location,
    keyword,
  } = json;

  document.querySelector("#label").innerHTML = label;
  document.querySelector("#polarity").innerHTML = polarity;
  document.querySelector("#subjectivity").innerHTML = subjectivity;
  document.querySelector("#person").innerHTML = person
  document.querySelector("#keywords").innerHTML = keyword
  document.querySelector("#location").innerHTML = location
  document.querySelector("#organization").innerHTML = organization

};

export { renderResults };
