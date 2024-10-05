export type CraftingRecipe = {
    _amt?: number;
    [key: string]: number;
};
/** Item rarities */
export declare enum Rarity {
    common = "Common",
    uncommon = "Uncommon",
    rare = "Rare",
    epic = "Epic",
    insane = "Insane",
    godly = "Godly"
}
/** An Item, i literally have nothing more to say. */
export declare class Item {
    /** Can the item be stolen? */
    canBeStolen: boolean;
    /** The crafting recipe of the item. if undefined you can't craft it. If it can then you typically can't buy the item and will have to forge it via /forge */
    craftingRecipe?: CraftingRecipe;
    /**  Name of the item */
    name: string;
    /** Description of the item */
    description: string;
    /** Array of uses (Description of uses actually, implementations are hard coded or extracted into their own file (well soon to be)) */
    uses: string[];
    /** The amount of coinz you have to buy it for */
    price: number;
    /** The amount of coins you have to sell it for */
    sell: number;
    /** The unique identifier of the item.
     * Make sure once you set it and it's in the DB to NOT change this property in your items.js file.
     * I've warned you!
     * (Essentially just use an ID that's unique to all the other items so no items clash.) */
    id: string;
    /** Rariy of the item using the enum */
    rarity: Rarity;
    /** Emoji of the item */
    emoji?: string;
    /** Is the item useable? Im not even sure if i'll even use this parameter not gonnna lie */
    useable: boolean;
    /** Image of the item. May just cache the item images
     * on bot load so the website doesnt have a hard time finding them.
     */
    image?: string;
    constructor(
    /** Indicates whether the item can be stolen. */
    canBeStolen: boolean, 
    /** The name of the item. */
    name: string, 
    /** A description of the item. */
    description: string, 
    /** An array of descriptions of the item's uses. */
    uses: string[], 
    /** The amount of coins required to buy the item. */
    price: number, 
    /** The amount of coins you receive when selling the item.
     * If set to -1, the item cannot be sold.
     * Defaults to false.
     */
    canBeSold: boolean | number, 
    /** The unique identifier of the item. */
    id: string, 
    /** The rarity of the item using the enum. */
    rarity: Rarity, 
    /** The emoji representation of the item. */
    emoji?: string | undefined, 
    /** Indicates whether the item is usable. Defaults to false. */
    useable?: boolean, 
    /** The crafting recipe of the item. If undefined, you can't craft it. */
    craftingRecipe?: CraftingRecipe);
}
