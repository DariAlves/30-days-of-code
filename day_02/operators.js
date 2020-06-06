/* 
    Task

    * Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip),
    * and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

    Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!
*/
function solve(meal_cost, tip_percent, tax_percent) {
    let totalCost = (meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));
    return Math.round(totalCost);
}

