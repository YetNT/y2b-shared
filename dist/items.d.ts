type CraftingRecipe = {
    _amt?: number;
    [key: string]: number;
};
export declare enum Rarity {
    common = "Common",
    uncommon = "Uncommon",
    rare = "Rare",
    epic = "Epic",
    insane = "Insane",
    godly = "Godly"
}
/** An Item */
export declare class Item {
    canBeStolen: boolean;
    craftingRecipe?: CraftingRecipe;
    name: string;
    description: string;
    uses: string[];
    price: number;
    sell: number;
    id: string;
    rarity: Rarity;
    emoji?: string;
    useable: boolean;
    image?: string;
    constructor(canBeStolen: boolean, name: string, description: string, uses: string[], price: number, canBeSold: boolean | number, id: string, rarity: Rarity, emoji?: string | undefined, useable?: boolean, craftingRecipe?: CraftingRecipe);
}
export {};
