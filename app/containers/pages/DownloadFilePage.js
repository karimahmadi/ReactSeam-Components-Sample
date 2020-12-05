import React from 'react';
import { Button } from '@tatareact/core/Button';
import { DownLoadFile } from '@tatareact/core/DownLoadFile';
// import { Section } from '@tatareact/core/Section';
import * as axios from 'axios';

axios.defaults.baseURL = 'http://192.168.101.171';

const handleIsValid = () => {
  console.log('is valid so return true');
  return true;
};
const handleNotValid = () =>
  // console.log('not valid so return false');
  true;
const handleError = error => {
  console.log('response.status:', error.response.status);
  console.log('response.data:', error.response.data);
};

const DownloadFilePage = () => (
  <div>
    <DownLoadFile
      url="http://192.168.101.171/rest/lc/report/due/date/pdf/80?branchId=125&organManagementCode=933100"
      authorization="Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0d2JESGJzZ1plMVFvbXJRQU9FZWllWG9GVGQ3SHpjNnEzUXVtdnYzbFFJIn0.eyJqdGkiOiI0Njg1M2EyOS04NjI4LTQ2ZjEtYTdkZS01M2Y3ZjRlNGJmYzgiLCJleHAiOjE2MDcxODU2MjksIm5iZiI6MCwiaWF0IjoxNjA3MTQ5NzI4LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMDAuMTExL2F1dGgvcmVhbG1zL1Rlc3QtUmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo5MzBjMzI3ZC01YWZhLTQyZGQtOTJhNi05MjQ3OGY5MWJlNGM6ZTIzYWU3ZWMtY2ViNC00NzdjLThiYzEtYjFkYWNjNzg0ZGI4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibGMtY2xpZW50LXRlc3QiLCJhdXRoX3RpbWUiOjE2MDcxNDk2MjksInNlc3Npb25fc3RhdGUiOiIwMjczMzA1Mi1mODg4LTQ0MzYtYjU0YS01NzA0NDRhYzU1YzkiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6OTAwMiIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzE6MTIwMCIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6ODAiLCJodHRwOi8vbG9jYWxob3N0OjgwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MTo4MCIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6ODAxMCIsIioiLCJodHRwOi8vbG9jYWxob3N0IiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MTo4MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MSIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzIiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImJyYW5jaC5hdHRlbmRhbnQiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwicGVyc29uYWxDb2RlIjoiMjA1NDI5Iiwiem9uZWluZm8iOiIiLCJ3ZWJzaXRlIjoiIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJiaXJ0aGRhdGUiOiIiLCJnZW5kZXIiOiIiLCJwcm9maWxlIjoiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjA1NDI5IiwiZ2l2ZW5fbmFtZSI6Itqp2LHbjNmFIiwibG9jYWxlIjoiZmEtSVIiLCJtaWRkbGVfbmFtZSI6IiIsInVzZXJJZCI6IjEwNzY0MCIsInBpY3R1cmUiOiIiLCJvcmdhbkNvZGUiOiI0MDkiLCJzZXJ2ZXJNYWMiOiIwMDowNDo3NTowYTo2ZTphNiIsIm5hbWUiOiLaqdix24zZhSDYstmG2K8iLCJuaWNrbmFtZSI6IiIsIm9yZ2FuSWQiOiIyMDgiLCJmYW1pbHlfbmFtZSI6Itiy2YbYryJ9.FUA4oGEEGb2K28H5Hgr9Yxn2v02DWIqf7EsExJHKUTlPse7is7l0k43vGSWUlUu_M-p6r6WnLYKdV_KIXfaGPL2vrxqr2Lk4PNFiKhppkDdyhHgOQ6XVnGEM7yzJRQ6DQjKkdkRmRON-J-5EY99lFF5mA2Y5Hgr2kRqYo0kQL-ePJBmU5thPFHED8uw9txd6HsmXXahUlUiOnt2ygEB7g4y97MV6g01rRkP4LgbDOEjjmQh_l3hDlXVw3zVSphCIzL7-D2HnsyPET6Ak2mtBgFxEyU6pFtzjLorlwEWCKPXmceSsxvWpzIt-9P46RKTLqec_vpTQYVVTRRjqRx5PBw"
      responseType="blob"
      fileType="application/pdf"
      isValid={handleIsValid}
      onError={handleError}
    >
      open in new tab
    </DownLoadFile>

    <DownLoadFile
      download
      url="http://192.168.101.171/rest/lc/report/due/date/pdf/80?branchId=125&organManagementCode=933100"
      authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
      responseType="blob"
      fileName="myPdfFile.pdf"
      isValid={handleNotValid}
      onError={handleError}
    >
      download file
    </DownLoadFile>
    <Button>Test Button</Button>
  </div>
);

export default DownloadFilePage;
