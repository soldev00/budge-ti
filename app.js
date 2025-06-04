// BUDGET CONTROLLER
let budegtController = (function () {
  //Some Code
})();

// UI CONTROLLER
let UIController = (function () {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBTN: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will either be inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let DOM = UICtrl.getDOMstrings();

  let ctrlAddItem = function () {
    // 1. Get the field input data
    let input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget comtroller
    // 3. Add the ite, to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  document.querySelector(DOM.inputBTN).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keycode == 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budegtController, UIController);
