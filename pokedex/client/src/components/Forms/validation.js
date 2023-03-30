const validation = (input) => {

    let errors = {}

    if(!input.name){
        errors.name = "The name can't be empty";
    }
    if(input.hp.length > 2){
        errors.hp = "HP cannot be greater than 99"
    }
    if(input.attack.length > 2){
        errors.attack = "Attack cannot be greater than 99"
    }
    if(input.speed.length > 2){
        errors.speed = "Speed cannot be greater than 99"
    }
    if(input.defense.length > 2){
        errors.defense = "Defense cannot be greater than 99"
    }
    if(input.weight.length > 2){
        errors.weight = "Weight cannot be greater than 99"
    }
    if(input.height.length > 2){
        errors.height = "Height cannot be greater than 99"
    }
    if(!input.hp){
        errors.hp  = "You must complete all fields"
    }
    if(!input.defense){
        errors.defense  = "You must complete all fields"
    }
    if(!input.attack){
        errors.attack  = "You must complete all fields"
    }
    if(!input.speed){
        errors.speed  = "You must complete all fields"
    }
    if(!input.weight){
        errors.weight  = "You must complete all fields"
    }
    if(!input.height){
        errors.height  = "You must complete all fields"
    }
    
    return errors
}

export default validation