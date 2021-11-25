// js file

// all ids
function change(){
        //select items
        let from_value=document.getElementById('from_value').value;
        let to_value=document.getElementById('to_value').value;
        let from_currentValue=document.getElementById('from_currentValue');
        let to_current_Value=document.getElementById('to_currentValue');
        let from_symbol=document.getElementById('from_symbol');
        let to_symbol=document.getElementById('to_symbol');
        // appends
        from_currentValue.innerHTML=from_value;
        to_current_Value.innerHTML=to_value;
        if(from_currentValue.innerHTML=='Fahrenheit'){
            
            from_symbol.innerHTML='°F'
            
        }else if(from_currentValue.innerHTML=='Celsius'){
            from_symbol.innerHTML='°C'
        }
        else if(from_currentValue.innerHTML=='Kelvin'){
            from_symbol.innerHTML='K'
        }
        if(to_current_Value.innerHTML=='Kelvin'){
            to_symbol.innerHTML='K'
        }
        else if(to_currentValue.innerHTML=='Celsius'){
            to_symbol.innerHTML='°C'
        }
        else if(to_currentValue.innerHTML=='Fahrenheit'){
            to_symbol.innerHTML='°F'
        }
        
    


 }

//converter function
function converter(){
    // select values
    let from_value=document.getElementById('from_value').value;
    let to_value=document.getElementById('to_value').value;
    let from_currentValue=document.getElementById('from_currentValue');
    let to_current_Value=document.getElementById('to_currentValue');
   

    // input values
    let input_from=document.getElementById('from').value;
    let input_to=document.getElementById('to');   
    
    //conditions
    if (from_currentValue.innerHTML=='Celsius' && to_current_Value.innerHTML=='Fahrenheit'){
        let cel_to_fah_formula=(input_from*9/5)+32
        input_to.value=cel_to_fah_formula;
    }else if(from_currentValue.innerHTML=='Fahrenheit' && to_current_Value.innerHTML=='Celsius'){
        let fah_to_cel_formula=(input_from-32)*5/9;
        input_to.value=fah_to_cel_formula.toFixed(2)
        // to_symbol.innerHTML='°C';
        // from_symbol.innerHTML='°F'
        
    }else if(from_currentValue.innerHTML=='Kelvin' && to_current_Value.innerHTML=='Celsius'){
        let kelvin_to_cel_formula=(input_from-273.15);
        input_to.value=kelvin_to_cel_formula.toFixed(1);
    }else if(from_currentValue.innerHTML=='Kelvin' && to_current_Value.innerHTML=='Fahrenheit'){
        let kelvin_to_fah_formula=(input_from-273.15)*9/5+32;
        input_to.value=kelvin_to_fah_formula.toFixed(1);
    }else if (from_currentValue.innerHTML=='Celsius' && to_current_Value.innerHTML=='Kelvin'){
        let cel_to_kel_formula=parseInt(input_from+273.15)
        input_to.value=cel_to_kel_formula
    } else if (from_currentValue.innerHTML=='Fahrenheit' && to_current_Value.innerHTML=='Kelvin'){
        let fah_to_kelvin_formula=(input_from-32)*5/9+273.15;
        input_to.value=fah_to_kelvin_formula.toFixed(2);
    }else if(from_currentValue.innerHTML==to_current_Value.innerHTML){
        input_to.value=input_from;
    }
    
}

