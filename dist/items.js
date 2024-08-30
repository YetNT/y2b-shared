"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Rarity = void 0;
var Rarity;
(function (Rarity) {
    Rarity["common"] = "Common";
    Rarity["uncommon"] = "Uncommon";
    Rarity["rare"] = "Rare";
    Rarity["epic"] = "Epic";
    Rarity["insane"] = "Insane";
    Rarity["godly"] = "Godly";
})(Rarity || (exports.Rarity = Rarity = {}));
/** An Item */
class Item {
    constructor(canBeStolen, name, description, uses, price, canBeSold = false, id, rarity, emoji = undefined, useable = false, craftingRecipe = {}) {
        this.canBeStolen = canBeStolen === true;
        this.craftingRecipe =
            Object.entries(craftingRecipe).length === 0
                ? undefined
                : craftingRecipe;
        this.name = name;
        this.description = description;
        this.uses = uses;
        this.price = price;
        this.sell =
            canBeSold === false
                ? -1
                : typeof canBeSold === "number"
                    ? canBeSold
                    : Math.round(price * 0.7); // Replace 0.7 with sellPercentage if you have that variable defined
        this.id = id;
        this.rarity = rarity;
        this.emoji = emoji !== undefined ? emoji : undefined;
        this.useable = useable === true;
        this.image = undefined;
    }
}
exports.Item = Item;
//# sourceMappingURL=items.js.map