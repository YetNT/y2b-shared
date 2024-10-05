"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Rarity = void 0;
/** Item rarities */
var Rarity;
(function (Rarity) {
    Rarity["common"] = "Common";
    Rarity["uncommon"] = "Uncommon";
    Rarity["rare"] = "Rare";
    Rarity["epic"] = "Epic";
    Rarity["insane"] = "Insane";
    Rarity["godly"] = "Godly";
})(Rarity || (exports.Rarity = Rarity = {}));
/** An Item, i literally have nothing more to say. */
class Item {
    constructor(
    /** Indicates whether the item can be stolen. */
    canBeStolen, 
    /** The name of the item. */
    name, 
    /** A description of the item. */
    description, 
    /** An array of descriptions of the item's uses. */
    uses, 
    /** The amount of coins required to buy the item. */
    price, 
    /** The amount of coins you receive when selling the item.
     * If set to -1, the item cannot be sold.
     * Defaults to false.
     */
    canBeSold = false, 
    /** The unique identifier of the item. */
    id, 
    /** The rarity of the item using the enum. */
    rarity, 
    /** The emoji representation of the item. */
    emoji = undefined, 
    /** Indicates whether the item is usable. Defaults to false. */
    useable = false, 
    /** The crafting recipe of the item. If undefined, you can't craft it. */
    craftingRecipe = {}) {
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