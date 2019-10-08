calculate = () => {
  var numberOfUnits = document.getElementById("numberOfUnits").value;
  var unitCost = document.getElementById("unitCost").value;
  var unitSell = document.getElementById("unitSell").value;

  var totalCost = (document.getElementById("totalCost").value =
    parseInt(numberOfUnits) * parseFloat(unitCost));
  if (unitCost == "") {
    document.getElementById("totalCost").value = "";
  }

  var totalSell = (document.getElementById("totalSell").value =
    parseInt(numberOfUnits) * parseFloat(unitSell));

  if (unitSell == "") {
    document.getElementById("totalSell").value = "";
  }

  document.getElementById("overallCost").value = parseFloat(totalCost);
  document.getElementById("overallCost").value = isNaN(
    document.getElementById("overallCost").value
  )
    ? 0.0
    : (document.getElementById("overallCost").value = parseFloat(totalCost));

  document.getElementById("overallSell").value = parseFloat(totalSell);
  document.getElementById("overallSell").value = isNaN(
    document.getElementById("overallSell").value
  )
    ? 0.0
    : (document.getElementById("overallSell").value = parseFloat(totalSell));

  var taxable = document.getElementById("taxable").value;
  document.getElementById("overallSellTax").value =
    (parseFloat(
      (document.getElementById("overallCost").value = parseFloat(totalCost)) +
        parseFloat(0)
    ) *
      parseFloat(taxable)) /
    100;

  document.getElementById("overallSellTax").value = isNaN(
    document.getElementById("overallSellTax").value
  )
    ? 0.0
    : (document.getElementById("overallSellTax").value = parseFloat(
        (document.getElementById("overallSellTax").value =
          (parseFloat(
            (document.getElementById("overallSellTax").value = parseFloat(
              totalSell
            )) + parseFloat(0)
          ) *
            parseFloat(taxable)) /
          100)
      ));
};

var calculateShip = () => {
  document.getElementById("shipping").value = document.getElementById(
    "shipAndHan"
  ).value;
};

var overallTotal = () => {
  document.getElementById("totalOverall").value =
    parseFloat(document.getElementById("numberOfUnits").value) +
    parseFloat(document.getElementById("unitCost").value);

  document.getElementById("totalOverall").value =
    parseFloat(document.getElementById("shipping").value) +
    parseFloat(document.getElementById("overallCost").value);
};
