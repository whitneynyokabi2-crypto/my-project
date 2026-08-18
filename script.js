let salary = 0;
const budgetSection = document.getElementById("budgetSection");
const salaryInput = document.getElementById("salaryInput");
const saveSalaryBtn = document.getElementById("saveSalaryBtn");
const needsSlider = document.getElementById("needsSlider");
const wantsSlider = document.getElementById("wantsSlider");
const savingsSlider = document.getElementById("savingsSlider");
const errorMessage = document.getElementById("errorMessage");
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
    const needs = Number(needsSlider.value);
    const wants = Number(wantsSlider.value);
    const savings = Number(savingsSlider.value);
    document.getElementById("needsValue").textContent = needs + "%";
    document.getElementById("wantsValue").textContent = wants + "%";
    document.getElementById("savingsValue").textContent = savings + "%";
    document.getElementById("needsBar").value = needs;
    document.getElementById("wantsBar").value = wants;
    document.getElementById("savingsBar").value = savings;
    if (needs > 50 || wants > 30) {
      errorMessage.classList.remove("hidden");
    } else {
      errorMessage.classList.add("hidden");
    }
}
saveSalaryBtn.addEventListener("click", handleSalarySubmit);
needsSlider.addEventListener("input", updateBudget);
wantsSlider.addEventListener("input", updateBudget);
savingsSlider.addEventListener("input", updateBudget);