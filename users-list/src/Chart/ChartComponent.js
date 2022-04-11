import React from 'react';
import {fetchData} from '../helpers'
import {PageNumber} from '../App'
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official'
import {options} from './options'

const ChartComponent = () => {
  const [occurencesOfTitles,setOccurencesOfTitles] = React.useState([]);
  let numOfPage = React.useContext(PageNumber);
  let urlForApiCall = "user?page="+numOfPage.stateOfPageNumber.pageNum+"&limit=10";
  React.useEffect(() =>{
    fetchData(urlForApiCall).then(res => {
      let differentTitles = [...new Set(res.data.data.map(el => el.title))];
      let occurences = [];
      for (let title of differentTitles) {
        occurences.push({ name: title, y:100 * res.data.data.filter(el => el.title ===title).length / res.data.data.length});
      }
      setOccurencesOfTitles(occurences);
    }).catch(err => console.log('Error in api call: '+err));
  },[urlForApiCall]);
  return <div className="pie-chart-for-titles" >
    <HighchartsReact highcharts={Highcharts} options={{...options,...options.series[0].data = occurencesOfTitles}} />
  </div>
}

export default ChartComponent;