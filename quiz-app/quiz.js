// Verificacion de resultados
if (window.location.search) {
  let result = {};
  window.location.search.replace(
    /[?&amp;]+([^=&amp;]+)=([^&amp;]*)/gi,
    function(str, key, value) {
      result[key] = value;
    }
  );
  let score = 0;
  let answersByUser = JSON.parse(localStorage.getItem("data"));
  Object.keys(result).map(key => {
    answersByUser[key.substr(1, 1) - 1].answer == result[key] && score++;
  });
  let count = document.getElementById("score-count");
  count.innerHTML = score;
}

let request = axios.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
class QuizItem {
  constructor(title, options, index) {
    this.title = title;
    this.options = options;
    this.index = index;
  }
  _createAnswer = (text, index, question) => {
    let wrapper = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let p = document.createElement("p");
    p.innerHTML = text;
    input.name = `q${question}`;
    input.value = index;
    input.type = "radio";
    input.required = true;
    wrapper.classList.add("option-wrapper");
    label.appendChild(input);
    label.appendChild(p);
    wrapper.appendChild(label);
    return wrapper;
  };
  createItem = () => {
    let section = document.createElement("section");
    let title = document.createElement("h3");
    section.classList.add("quiz-item");
    title.innerHTML = `Q${this.index}. ${this.title}`;
    section.appendChild(title);
    this.options.map((option, i) => {
      let wrapper = this._createAnswer(option, i + 1, this.index);
      section.appendChild(wrapper);
    });
    return section;
  };
}
request
  .then(({ data }) => {
    window.localStorage.setItem("data", JSON.stringify(data));
    let quiz = document.getElementsByClassName("quiz");
    data.map(q => {
      let item = new QuizItem(q.question, q.options, q.id);
      let sectionToAdd = item.createItem();
      quiz[0].appendChild(sectionToAdd);
    });
  })
  .catch(error => console.log(error.message));
