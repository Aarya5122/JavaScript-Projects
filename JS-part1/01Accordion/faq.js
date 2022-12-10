const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

function showFaq(item) {
  let description = item.currentTarget.parentElement.parentElement.querySelector("p")
  {(description.classList.contains("hidden"))?description.classList.remove("hidden"):description.classList.add("hidden")}
}

function createFaq(arr) { 
  arr.forEach(obj => {

    const item = document.createElement("div")  
    item.classList = "faq"
    item.id = obj.id

    const itemHeader = document.createElement("div")
    itemHeader.classList = "faq_header"

    const heading = document.createElement("h3")
    heading.textContent = obj.question

    const description = document.createElement("p")
    description.textContent = obj.answer
    description.classList = "hidden para text"


    const button = document.createElement("button")
    button.innerHTML = `<img class="plus" src="./image/plus.png" alt="button"/>`
    button.classList = "show_btn"

    button.addEventListener("click", ()=>{
      showFaq(event)
      btnStatusUpdate(event.target)
    })

    itemHeader.append(heading, button)
    item.append(itemHeader, description)
    accordianBody.appendChild(item)
  });
}

function btnStatusUpdate(plus) {
  (plus.style.transform === "rotate(45deg)")?plus.style.transform = "rotate(0deg)" : plus.style.transform = "rotate(45deg)"
  plus.style.transition = "transform 0.2s"

  // let img = plus
  // (img.style.transform === "rotate(45deg)")?img.style.transform = "rotate(0deg)" : img.style.transform = "rotate(45deg)"
}

createFaq(faqData)
