import {select, selectAll} from 'd3-selection';
import 'd3-selection-multi';

select('#container')
  .append('svg')
  .attrs({
    width: '300px',
    height: '200px'
  })
  .style('background-color', '#09F');
