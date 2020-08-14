const serverUrl = 'https://sandbox.2600hz.com:8443/v2'
const accountId = '4642e64040cdb8b89c310a21a07c7f62'
const vmBoxId = 'b37675a2d7b90d60f0ee5d4175502394'

const headers = () => {
    const h = new Headers();

    h.append('Authorization','eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImI5ZTkyZDI4OTViZTAyZjliZWExZDkwNGU0MjY2YTE0In0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6InI2S1RLVFpRODA2ZlA0ZlJtSXlXaWl1akZjQTlvU1VxNzhEUGpsUDJjS3MiLCJhY2NvdW50X2lkIjoiNDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjIiLCJvd25lcl9pZCI6Ijc1ODEyNTI4M2NmOTJlYjRhNjZjZTk3NjNiODQ2MWQyIiwibWV0aG9kIjoiY2JfdXNlcl9hdXRoIiwiZXhwIjoxNTk4Mjg5MTYxfQ.mIhePXeYqyBLDaqz9D-Vea9ETnEo-6oJ4oO1Z-uY0o3Br4URgqNCEfab9WmH5Fit27AFdBreCcoVjOBOULkC4PD4q-fsFbNqe08p_jPyyWwK1SAr_8bCIUDpR8HP8MeBuOZFRgbZm5f9lEXW54PHPH2DctgKRTn6eIOhmGH1ztZnDGGfqyULaIxYwugdTXx0GVuvGw3mm6Uca8dQdnOEriIcqjLZoWyQV2oUJloKISaQn0Tl-vv5YhiJvY0KYUBKfg92R8egu_8Y2QSPZPcXNCGE1SHoVsx_1MGjRITS94iXa0rnxXW0cYfB2ESIfU5Tgwedw1scJC6qZ1f2do_-qg');
    return h;
};

const request = (method, path) => {
    const url = `${serverUrl}${path}`;
    const options = { method, headers: headers() };

    //if (body) {
    //    options.body = JSON.stringify(body);
    //}   

    return fetch(new Request(url, options)).
        then(response => response.json().
            then(({ data }) => data).
            then(console.log).
            catch(console.log));
};

const Api = {
    get(path) {
        return request('GET', path);
    },
    //post(path, data = {}) {
    //    return request('POST', path, data);
    //},
    //delete(path) {
    //    return request('DELETE', path);
    //}
};

export default Api;