type CraftingRecipe = {
    _amt?: number;
    [key: string]: number;
};

export enum Rarity {
    common = "Common",
    uncommon = "Uncommon",
    rare = "Rare",
    epic = "Epic",
    insane = "Insane",
    godly = "Godly",
}

/** An Item */
export class Item {
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

    constructor(
        canBeStolen: boolean,
        name: string,
        description: string,
        uses: string[],
        price: number,
        canBeSold: boolean | number = false,
        id: string,
        rarity: Rarity,
        emoji: string | undefined = undefined,
        useable: boolean = false,
        craftingRecipe: CraftingRecipe = {}
    ) {
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
