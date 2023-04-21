let iniciar = function(){

    let hero ={
        name: "Héroe",
        hp: 150,
        hpMax: 150,
        atk: 10,
    }
    
    let slime ={
        name: "Slime",
        hp: 900,
        hpMax: 900,
        atk: 20
    }

    while(hero.hp != 0){
        ataca(hero, slime);
        showStats(hero, slime);   
        if(slime.hp <= 0){  break;  }
        ataca(slime, hero);
        showStats(hero, slime);
    }
    console.log(`¡Combate concluido!`)
}

let ataca = function(atkChar,defChar){
    defChar.hp= defChar.hp - atkChar.atk
    console.log(`¡${atkChar.name} hace ${atkChar.atk} puntos de daño a ${defChar.name}!`);
}

let showStats = function(char1, char2){
    console.log(`${char1.name} - ${char1.hp}/${char1.hpMax}`)
    console.log(`${char2.name} - ${char2.hp}/${char2.hpMax}`)
}

iniciar();