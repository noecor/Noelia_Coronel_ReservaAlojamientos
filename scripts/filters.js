class Filters extends React.Component {
  state = {
    initialDate: "",
    endDate: ""
  };

  //Estas funciones toman los datos ingresados en los filtros, y le pasan la info a App a traves de Props.
  handleOnClickDate = (event) => {
    this.setState({ initialDate: event.target.value });
    this.props.addInitialDateProp(event.target.value);
  };
  handleOnClickDate2 = (event) => {
    this.setState({ endDate: event.target.value });
    this.props.addEndDateProp(event.target.value);
  };
  handleOnClickCountry = (event) => {
    this.props.filterCountryProp(event.target.value);
  };
  handleOnClickPrice = (event) => {
    this.props.filterPriceProp(event.target.value);
  };
  handleOnClickSize = (event) => {
    this.props.filterSizeProp(event.target.value);
  };

  render() {
    const countryOption = countries.map((e) => <option key={e}>{e}</option>);
    return (
      <div className="filters">
        <input
          className="width-filter"
          type="date"
          value={this.state.initialDate}
          onChange={this.handleOnClickDate}
        ></input>
        <input
          className="width-filter"
          type="date"
          value={this.state.endDate}
          onChange={this.handleOnClickDate2}
        ></input>
        <select className="width-filter" onChange={this.handleOnClickCountry}>
          <option className="width-filter" value="all">
            Todos los países
          </option>
          {countryOption}
        </select>
        <select className="width-filter" onChange={this.handleOnClickPrice}>
          <option value="all">Cualquier precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select className="width-filter" onChange={this.handleOnClickSize}>
          <option value="all"> Cualquier tamaño </option>
          <option value="little"> Hotel pequeño </option>
          <option value="medium"> Hotel mediano </option>
          <option value="big"> Hotel grande </option>
        </select>
      </div>
    );
  }
}

// Esta Función recorre el array de países y hace un nuevo array sólo con los que no se repiten

const countries = [];
hotelsData.forEach((e) => {
  if (countries.includes(e.country)) {
  } else {
    countries.push(e.country);
  }
});
