function criaMascara() {
    const maximoInput = document.getElementById(`inputData`).maxLength;
    let valorInput = document.getElementById(`inputData`).value;

    if(isNaN(valorInput[valorInput.length-1])){
        document.getElementById(`inputData`).value = valorInput.substring(0, valorInput.length-1);
       return;
    }

    const mascaras = valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})/, "$1/$2/$3-$4:$5")


    if(valorInput.length  === maximoInput -4)
        document.getElementById(`inputData`).value = mascaras;
  };
