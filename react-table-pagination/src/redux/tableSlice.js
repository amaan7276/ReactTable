
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { name: 'Freda', email: 'fwrings0@f6s.com', phone: '59679757699', website: 'http://sun.com', industry: 'Real Estate Investment Trusts', status: 'true', remark: 'nulla nisl nunc nisl duis' },
    { name: 'Aloysius', email: 'ama1and1y2@lycos.com', phone: '49881116631', website: 'http://51.la', industry: 'Hospital/Nursing Management', status: 'false', remark: 'aliquam imperdiet' },
    { name: 'Dalil', email: 'dlume12@sreference.com', phone: '99139116562', website: 'http://walmart.com', industry: 'EDP Services', status: 'true', remark: 'id ornare imperdiet' },
    { name: 'Kort', email: 'krittman3@sakura.ne.jp', phone: '49288050239', website: 'http://51.edu', industry: 'n/a', status: 'false', remark: 'auctor gravida sem' },
    { name: 'Heall', email: 'hollison4@pinterest.com', phone: '38582338235', website: 'http://iamazon.com', industry: 'Automotive Aftermarket', status: 'true', remark: 'quis turpis' },
    { name: 'Sharone', email: 'sjannink5@zig2art.com', phone: '39137960376', website: 'http://lanazon.com', industry: 'Industrial Specialties', status: 'true', remark: 'quis turpis' },
    { name: 'Hildegarde', email: 'hkruddy6@gmail.com', phone: '89501501860', website: 'http://huffingtonpost.com', industry: 'Industrial Specialties', status: 'true', remark: 'plat0 dictumst aliquam' },
    { name: 'Hulda', email: 'horiuchidansh7@answers.com', phone: '39584220685', website: 'http://yandex.ru', industry: 'Package Goods/Cosmetics', status: 'true', remark: 'et eros vehicula' },
    { name: 'Stina', email: 'stales8@google.pl', phone: '46286745543', website: 'http://mayodi.com', industry: 'Industrial Machinery/Components', status: 'false', remark: 'eg8t orci vehicula' },
    { name: 'Jena', email: 'jhugg@wikispaces.com', phone: '42228058688', website: 'https://qlem.jp', industry: 'n/a', status: 'false', remark: 'eu est' },
  ],
  filteredData: []
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableData(state, action) {
      state.data = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    addTableRow(state, action) {
      state.data.push(action.payload);
      state.filteredData.push(action.payload);
    },
  },
});

export const { setTableData, setFilteredData, addTableRow } = tableSlice.actions;
export default tableSlice.reducer;
