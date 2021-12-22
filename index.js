let country = document.getElementById('country');
let code = document.getElementById('countrycode');

let changeCountry=(params)=>{
    if(country.value == 'nig'){
        code.value = '+234'
    }
    else if(country.value == 'gmny'){
        code.value = '+49'
    }
    else if(country.value == 'cad'){
        code.value = '+1'
    }
    else if(country.value == 'us'){
        code.value = '+1'
    }
    else if(country.value == 'uk'){
        code.value = '+44'
    }
    else if(country.value == 'france'){
        code.value = '+33'
    }
    else if(country.value == 'ity'){
        code.value = '+39'
    }
}