import { Component } from '../component/Component.js';

const createCells = (datum) => Object.values(datum)
  .map((val) => `<td>${val}</td>`)
  .join('')
  .trim();

const ASC_SORT = 'asc';
const DESC_SORT = 'desc';

export class SortableTable extends Component {
  constructor(root, { data, comparator }) {
    super(root, { className: 'sortable-table', tag: 'table', listeners: ['click'] });
    this.data = [...data];
    this.comparator = comparator;
    this.prepare();
    this.sortAsc = true;
    this.sortKey = this.keys[0];
    this.onClick = this.onClick.bind(this);
  }

  prepare() {
    this.keys = Object.keys(this.data[0] || {});
  }

  toHtml() {
    return `
      <thead class="sortable-table-heading">
        <tr>
            ${this.createHeadings()}
        </tr>
      </thead>
      <tbody class="sortable-table-body">
        ${this.createRows()}
      </tbody>
    `;
  }

  createHeadings() {
    const active = (key) => key === this.sortKey
      ? this.sortAsc
        ? ASC_SORT
        : DESC_SORT
      : '';

    return this.keys.map((key) => `
      <th class="${active(key)}" data-sort="${key}">
        ${key}
      </th>
    `).join('').trim();
  }

  createRows() {
    const active = (index) => (index + 1) % 2 ? 'row-gray' : '';
    return this.data
      .sort(this.comparator(this.sortKey, this.sortAsc))
      .map((datum, index) => `<tr class="${active(index)}">${createCells(datum)}</tr>`)
      .join('')
      .trim();
  }

  onClick(ev) {
    const key = ev.target.dataset['sort'];
    if(key) {
      this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
      this.sortKey = key;
      this.render();
    }
  }
}
