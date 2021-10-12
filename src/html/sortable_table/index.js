import {SortableTable} from './SortableTable.js';
import {AutoComplete} from '../auto-complete/AutoComplete.js';

const root = document.getElementById('app');
const data = [
  {"Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany"},
  {"Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico"},
  {"Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico"},
  {"Name": "Around the Horn", "City": "London", "Country": "UK"},
  {"Name": "B's Beverages", "City": "London", "Country": "UK"},
  {"Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden"},
  {"Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany"},
  {"Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France"},
  {"Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain"},
  {"Name": "Bon app'", "City": "Marseille", "Country": "France"},
  {"Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada"},
  {"Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina"},
  {"Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico"},
  {"Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland"},
  {"Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil"}
];

const comparator = (field, asc) => (d1, d2) => {
  const sign = asc ? 1 : -1;
  if(!field) {
    return sign * d1['Name'].localeCompare(d2['Name']);
  } else {
    return sign * d1[field].localeCompare(d2[field]);
  }
};

const autoCompleteData = new Set();

data.forEach((item) => {
  autoCompleteData.add(item.Name);
  autoCompleteData.add(item.City);
  autoCompleteData.add(item.Country);
});

const autoComplete = new AutoComplete(root, {
  data: Array.from(autoCompleteData),
  label: 'Search elements',
  placeholder: 'Search elements'
});

autoComplete.render();

const component = new SortableTable(root, { data, comparator});
component.render();
