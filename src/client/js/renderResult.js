const renderResults = (json) => {
  const {
    categories,
    polarity,
    subjectivity,
    organization,
    person,
    location,
    keyword,
  } = json;

  document.querySelector("#label").innerHTML = categories[0].label;
  document.querySelector("#polarity").innerHTML = polarity;
  document.querySelector("#subjectivity").innerHTML = subjectivity;
  document.querySelector("#person").innerHTML = person
    ? person.join(" & ")
    : "There i no persons";

  document.querySelector("#keywords").innerHTML = keyword
    ? keyword.slice(0, 6).join(" & ")
    : "There is no keyWords";

  document.querySelector("#location").innerHTML = location
    ? location[0]
    : "There is no location";

  document.querySelector("#organization").innerHTML = organization
    ? organization[0]
    : "There is no Organization";

};

export { renderResults };
