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
    document.getElementById("needsValue").textContent = needs + "% (" + (salary * needs / 100).toFixed(2) + ")";
    document.getElementById("wantsValue").textContent = wants + "% (" + (salary * wants / 100).toFixed(2) + ")";
    document.getElementById("savingsValue").textContent = savings + "% (" + (salary * savings / 100).toFixed(2) + ")";
    document.getElementById("needsBar").value = needs;
    document.getElementById("wantsBar").value = wants;
    document.getElementById("savingsBar").value = savings;
    if (needs > 50 && wants <= 30) {
       alert("You're not making a good choice. It is advised to keep your needs below 50%.");
    }
    else if (wants > 30  && needs <= 50) {
       alert("You're not making a good choice. It is advised to keep your wants below 30%.");
    }
    else if(wants > 30 && needs > 50) {
       alert(`Please note both your needs and wants are exceeding the recommended percentages. This leaves you with only ${100-needs-wants}% to save`);
    }
}
saveSalaryBtn.addEventListener("click", handleSalarySubmit);
needsSlider.addEventListener("input", updateBudget);
wantsSlider.addEventListener("input", updateBudget);
savingsSlider.addEventListener("input", updateBudget);