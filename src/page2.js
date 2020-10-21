import React, { Fragment } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import { ModalProvider } from '@tatareact/core/Modal';
import { Section } from '@tatareact/core/Section';
import { ThemeProvider } from '@tatareact/core/ThemeProvider';
import { InputLabel as Label } from '@tatareact/core/InputLabel';
import { Input } from '@tatareact/core/Input';
import { Date } from '@tatareact/core/Date';
import { Button } from '@tatareact/core/Button';
import DataGrid, { DataGridColumn } from '@tatareact/core/DataGrid';
import { CodeTextLookup } from '@tatareact/core/CodeTextLookup';
import { CodeCombo } from '@tatareact/core/CodeCombo';
import {Grid} from "@material-ui/core/Grid";

const Page2 = () => {
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
      <Section title="حساب های برداشت کارمزد">
        <Grid container>
          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>شماره حساب:</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <CodeTextLookup ratio="1:1" hidebutton />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>شماره حساب برداشت کارمزد:</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <CodeTextLookup ratio="1:1" hidebutton />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}></Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>تاریخ شروع اعتبار از:</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Date />
            <Label>تا:</Label>
            <Date />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>تاریخ خاتمه اعتبار از:</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Date />
            <Label>تا:</Label>
            <Date />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} left></Grid>

          <Grid item lg={2} md={2} sm={2} xs={2} left>
            <Label>وضعیت:</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <CodeCombo items={[]} />
          </Grid>
        </Grid>
      </Section>
      <Section grid>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ButtonGroup variant="text">
              <Button>بازیابی</Button>
              <Button>جدید</Button>
              <Button>ویرایش</Button>
              <Button>حذف</Button>
            </ButtonGroup>
          </Grid>
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


export default Page2;