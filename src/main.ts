const btnAddMeal = document.querySelector(".btn__add-meal") as HTMLElement;
const select = document.querySelector("#select") as HTMLInputElement;
const weekOverview = document.querySelector(".week__overview") as HTMLElement;
const inputMeal = document.querySelector("#meal") as HTMLInputElement;
// const btnDelete = document.querySelector(".item__delete") as HTMLElement;

const week1:string[] = [];
const week2:string[] = []
const week3:string[] = []
const week4:string[] = []



const addMealToWeek = () => {
  if(inputMeal.value.length === 0) {
    console.log("Nichts eingegeben")
  } else {
    switch (select.value) {
      case "week1":
        week1.push(inputMeal.value);
        break;
      case "week2":
        week2.push(inputMeal.value);
        break;
      case "week3":
        week3.push(inputMeal.value);
        break;
      case "week4":
        week4.push(inputMeal.value);
        break;
    }
    chooseArrayByCriteria(select.value);
    inputMeal.value = ""; 
  }

}



const loadElementToHtml = (week:string[]) => {
  weekOverview.innerHTML = ""
  if(week) {
    week.forEach((item, index) => {
      const div = document.createElement("div")
      div.className = "item__card";
      div.innerHTML = `<div class="item__title">${item}</div>`;

      const btn = document.createElement("button") as HTMLElement;
      btn.className = "item__delete";
      btn.addEventListener("click", () => deleteFromArray(div, week, index))
      btn.innerHTML = "X"
      div.appendChild(btn);
      weekOverview.appendChild(div)
    })
  }
}

const chooseArrayByCriteria = (e:string) => {
  console.log(e)
  switch(e) {
    case "week1":
      loadElementToHtml(week1);
      break
    case "week2":
      loadElementToHtml(week2);
      break
    case "week3":
      loadElementToHtml(week3);
      break
    case "week4":
      loadElementToHtml(week4);
      break
  }
}

const deleteFromArray = (div:HTMLElement, week:string[], index:number) => {
  week.splice(index, index + 2);
  div.innerHTML = ""
}



select.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLSelectElement;
  chooseArrayByCriteria(target.value);
})
btnAddMeal.addEventListener("click", addMealToWeek)
loadElementToHtml(week1)
