import React, { Component } from 'react';

class Asia extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(){
        fetch("https://restcountries.eu/rest/v2/region/asia")
            .then(data=>data.json())
            .then(data=>this.setState({data:data}));
    }

    render(){
        var element;


        let dataMap = this.state.data.map(
            (eachElement)=>{
                var total = 0;
                for (element in eachElement.languages){
                    total++;
                }

                return (<div>
                    <img className={"imageSmaller"} src={eachElement.flag} alt={eachElement.name+ "'s flag"}/>
                    <h1>{eachElement.name}</h1>
                    <p>Capital: {eachElement.capital}</p>
                    <p>Total languages {total}</p>
                </div>)
            }
        )
        return(
            <div>
                <h1>Asia</h1>
                <div className={"grid"}>
                    {dataMap}
                </div>
            </div>
        );
    }
}

export default Asia;