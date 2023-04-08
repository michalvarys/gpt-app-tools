const replaceValues = (text, values) => {
  let newText = text;
  Object.keys(values).forEach((key) => {
    const regex = new RegExp(`<${key}>`, "g");
    newText = newText.replace(regex, values[key]);
  });
  return newText;
};

const formToMap = (form) => {
  const values = {};
  for (let element of form.elements) {
    if (element.name) {
      if (element.type === "checkbox") {
        values[element.name] = element.checked;
      } else {
        values[element.name] = element.value;
      }
    }
  }
  return values;
};

function getSettings(){
    let settings = { messages: [], token: '' };
    try {
      settings = JSON.parse(document.getElementById("settings").textContent);
    } catch {}
    return settings 
}

function formattedMessages(values){
    const { messages } = getSettings()
    return messages.map((message) => {
        return {
            ...message,
            content: replaceValues(message.content, values)
        };
    })
}

async function askQuestion(answerElementId = "answer") {
  const settings = getSettings()

  /** @type {HTMLFormElement} */
  const form = document.getElementById("form");
  const values = formToMap(form);
  const messages = formattedMessages(values)

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${settings.token}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      n: 1,
      best_of: 3,
      messages,
      //temperature: 0.3
    }),
  });
  
  const data = await response.json();
  const { message } = data.choices[0];

  let answerEl = document.getElementById(answerElementId)
  if(!answerEl){
    answerEl = document.createElement("div");
    answerEl.id = answerElementId
    document.body.append(answerEl)
  }

  answerEl.innerHTML = message.content.trim();
}
