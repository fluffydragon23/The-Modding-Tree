addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tabFormat: [
      ["display-text", () => `You have ${format(player.points)} points<br><br>`],
      "upgrades"
      ],
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
        upgrades: {
        11: {
    title: "Make this whatever you want!",
    description: "Double your point gain.",
    cost: new Decimal(10),
    
    currencyDisplayName: "points",
    
    currencyInternalName: "points",
        },
                12: {
    title: "Booster!",
    description: "Boost point gain based on points.",
    cost: new Decimal(25),
    
    currencyDisplayName: "points",
    
    currencyInternalName: "points",
    
        effect() {
        return player.points.add(1).pow(0.2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
          13: {
    title: "Wow, they are useful!",
    description: "Boost point gain based on achievements.",
    cost: new Decimal(75),
    
    currencyDisplayName: "points",
    
    currencyInternalName: "points",
    
        effect() {
     return player.a.points.add(1).pow(1.5);
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    },
})
addLayer("a", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "a", // This appears on the layer's node. Default is the id with the first letter capitalized
    color: "#F5754E",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tooltip:"Achievements",
    resource: "achievements", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
layerShown(){return true},
update (diff){
player.a.points = new Decimal(player.a.achievements.length).add(
  );
},
achievements: {
  11:{
  name: "Upgraded",
  done() {return hasUpgrade("p",11)},
  tooltip:"Get PU11."
  }
},
})