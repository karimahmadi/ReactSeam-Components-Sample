import React, { Fragment } from 'react';
import { render } from 'react-dom';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import { ModalProvider } from '@tatareact/core/Modal';
import { Section } from '@tatareact/core/Section';
import { InputLabel as Label } from '@tatareact/core/InputLabel';
import { Date } from '@tatareact/core/Date';
import { Button } from '@tatareact/core/Button';
import { Input } from '@tatareact/core/Input';
import DataGrid, { DataGridColumn } from '@tatareact/core/DataGrid';
import { Grid } from '@tatareact/core/Grid';
import { AmountInput } from '@tatareact/core/AmountInput';

const SearchContract = () => {
  const useData = () => [
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/10/25',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/02',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
  ];

  const rows = useData();

  return (
    <Fragment>
      <Section title="گزارش اطلاعات قرارداد">
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>شماره قرارداد:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>کد ملی:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>شماره درخواست بانک مرکزی:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>
        </Grid>
        <Grid container>
          <Button>جستجو</Button>
        </Grid>
      </Section>
      <Section>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>شماره قرارداد:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>شماره درخواست بانک مرکزی:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>تعداد اقساط:</Label>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Input />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>دوره اقساط:</Label>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Input />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>شماره پرسنلی:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>​ نام و نام خانوادگی/ نام شرکت:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Input />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>کد وثیقه:</Label>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Input />
          </Grid>

          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>نرخ سود:</Label>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Input />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>مبلغ قرارداد:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <AmountInput />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>​مبلغ وثیقه:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <AmountInput />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>تعداد اقساط پرداخت شده:</Label>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Input />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>تاریخ قرارداد:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>تاریخ سررسید قرارداد:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
        </Grid>
      </Section>
      <Section grid>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <DataGrid data={rows} pagination>
              <DataGridColumn title="تاریخ" field="date" align="right" />
              <DataGridColumn
                title="روز هفته"
                field="dayofweek"
                align="right"
              />
              <DataGridColumn
                title="نوع تعطیلی"
                field="holidaytype"
                align="right"
              />
              <DataGridColumn title="توضیحات" field="desc" align="right" />
            </DataGrid>
          </Grid>
        </Grid>
      </Section>
    </Fragment>
  );
};
export default SearchContract;
// const App = () => (
//     <ThemeProvider>
//         <TestSection/>
//     </ThemeProvider>
// );
//
// render(
//     <ModalProvider>
//         <App/>
//     </ModalProvider>,
//     document.getElementById('root'),
// );
