const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
    const maxDamage = dragon.strength;
    const minDamage = 15;
    let damage = Math.floor(Math.random() * (maxDamage+1))
    while(damage < minDamage){
        damage =  Math.floor(Math.random() * (maxDamage + 1))
    }
    return damage;
  }



  const damageReturnedWarrior = () => {
    const maxDamage = warrior.strength * warrior.weaponDmg;
    const minDamage = warrior.strength;
    let damageWarrior = Math.floor(Math.random() * (maxDamage+1)); 
    while(damageWarrior < minDamage){
        damageWarrior = Math.floor(Math.random() * (maxDamage+1)); 
    }
    return damageWarrior;
  }

  const returnObject = () => {
    const minDamage = mage.intelligence
    const maxDamage = mage.intelligence * 2
    const mana = mage.mana - 15
    mage.mana = mana;
    let aleactoryDamage = Math.floor(Math.random() * (maxDamage + 1))
    while(aleactoryDamage < minDamage){
        aleactoryDamage =  Math.floor(Math.random() * (maxDamage + 1))
    }
    if(mage.mana  < 15 ){
        console.log('Nao possui mana suficiente')
        mana += 15;
        mage.mana = mana;
    }

     let obj = {
         damageShadow: aleactoryDamage ,
         gastedMana: mana 
     }
     return obj;
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    turnWarrior: (func) => {
        const damageWarrior = func();
        warrior.damage = damageWarrior;
        dragon.healthPoints  = dragon.healthPoints - damageWarrior;
    },
    turnMage: (func) => {
        let damageAndMana = func()
        let damageMage = damageAndMana.damageShadow
        mage.damage = damageMage;
        mage.mana = damageAndMana.gastedMana
        dragon.healthPoints = dragon.healthPoints - damageMage;
    },
    turnDragon: (func) => {
        let damageDragon = func()
        dragon.damage = damageDragon;
        mage.healthPoints = mage.healthPoints - damageDragon;
        warrior.healthPoints = warrior.healthPoints - damageDragon;
    },
    situation: () => {
        console.log(battleMembers)
    }
  };

  gameActions.turnWarrior(damageReturnedWarrior)
  gameActions.turnMage(returnObject)
  gameActions.turnDragon(dragonDamage)
  gameActions.situation()
