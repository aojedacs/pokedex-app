function Finder({
    finderLabel = "Buscador",
    buttonText = "Buscar",
    setBusqueda,
    setIniciarBusqueda
  }) {
  
  
    const onClickButton = () =>{
      setIniciarBusqueda(true)
    }
    return (
      <>
        <label htmlFor="">{finderLabel}</label>
        <input type="text" onChange={(e) => setBusqueda(e.target.value)} />
        <input type="button" value={buttonText} onClick={(e)=>setIniciarBusqueda(true)} />
      </>
    );
  }
  
  export default Finder;
  