
import testData from "./data/test.json"; /* Example of reading in data */
import testData2 from "./data/test2.json"; /* Example of reading in data */
import testData3 from "./data/test3.json"; /* Example of reading in data */
import testData4 from "./data/test4.json"; /* Example of reading in data */
import testData5 from "./data/test5.json"; /* Example of reading in data */
import './css/style.scss';
import './css/styles.css'; /* Example of connecting a style-sheet */
import {drawBarChart} from "./js/barchart"; /* Example of importing one function from a js file for multiple {f(x), f(y), f(z)}*/
//import {drawdonut} from "./js/linechart";
import {drawline} from "./js/linechart";
import {drawss} from "./js/chart3";
import {drawstream} from "./js/chart4";



let x = 2;
console.log(testData5);
drawBarChart(testData5["data"], "#bar"); // ID 
//drawBarChart(data["data"], "#bar"); // ID 
drawline(testData2["data"], "#do"); // ID 
drawss(testData3["data"], "#donut"); // ID 
drawstream(testData4["data"], "#stream"); // ID 
/* 
    TODO: all the other logic for implementing your charts + adding in some basic filters 
    (e.g. dropdown menus for seeing different aspects of the data)
*/