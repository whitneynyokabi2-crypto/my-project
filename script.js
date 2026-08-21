let salary = 0;
const budgetSection = document.getElementById("budgetSection");
const salaryInput = document.getElementById("salaryInput");
const saveSalaryBtn = document.getElementById("saveSalaryBtn");
const needsSlider = document.getElementById("needsSlider");
const wantsSlider = document.getElementById("wantsSlider");
const savingsSlider = document.getElementById("savingsSlider");
const errorMessage = document.getElementById("errorMessage");
const budgetMessage = document.getElementById("budgetMessage");
const MAX_BUDGET = 100;
function handleSalarySubmit() {
  salary = Number(salaryInput.value);
  if (!salary || salary <= 0) {
    alert("Please enter a valid salary");
    return;
  }
  budgetSection.classList.remove("hidden");
  updateBudget();
}
function updateBudget() {
    let needs = Number(needsSlider.value);
       let wants = Number(wantsSlider.value);
    let savingsAmount = Number(savingsSlider.value);
          needsSlider.value = needs;
            // Keep total within 100%
  if (needs + wants > MAX_BUDGET) {
    if (document.activeElement === needsSlider) {
      needs = MAX_BUDGET - wants;
      needsSlider.value = needs;
    } else if (document.activeElement === wantsSlider) {
      wants = MAX_BUDGET - needs;
      wantsSlider.value = wants;
    }
  }

  const savings = MAX_BUDGET - needs - wants;

  needsSlider.value = needs;
  wantsSlider.value = wants;
  savingsSlider.value = savings;
    document.getElementById("needsValue").textContent = needs + "% (" + (salary * needs / 100).toFixed(2) + ")";
    document.getElementById("wantsValue").textContent = wants + "% (" + (salary * wants / 100).toFixed(2) + ")";
    document.getElementById("savingsValue").textContent = savings + "% (" + (salary * savings / 100).toFixed(2) + ")";
    document.getElementById("needsBar").value= needs;
    document.getElementById("wantsBar").value= wants;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    document.getElementById("savingsBar").value= savings;
   if (needs > 50 && wants > 30) {
    budgetMessage.textContent =
      `Please note both your needs and wants are exceeding the recommended percentages. This leaves you with only ${100 - needs - wants}% to save`;
    budgetMessage.classList.remove("hidden");
      budgetMessage.scrollIntoView({
  behavior: "smooth",
  block: "center"
});
  } else if (needs > 50) {
    budgetMessage.textContent =
      "You're not making a good choice. It is advised to keep your needs below 50%.";
    budgetMessage.classList.remove("hidden");
      budgetMessage.scrollIntoView({
  behavior: "smooth",
  block: "center"
});
  } else if (wants > 30) {
    budgetMessage.textContent =
      "You're not making a good choice. It is advised to keep your wants below 30%.";
    budgetMessage.classList.remove("hidden");
      budgetMessage.scrollIntoView({
  behavior: "smooth",
  block: "center"
});
  } else {
    budgetMessage.textContent = "";
    budgetMessage.classList.add("hidden");
      budgetMessage.scrollIntoView({
  behavior: "smooth",
  block: "center"
});
  }

}
saveSalaryBtn.addEventListener("click", handleSalarySubmit);
needsSlider.addEventListener("input", updateBudget);
wantsSlider.addEventListener("input", updateBudget);
savingsSlider.addEventListener("input", updateBudget);