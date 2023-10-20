const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {
    this.on("GET", "GetCitySet", async (req, res) => {

        let S4Conn = await cds.connect.to('ZIVN_VENDOR_REG_SRV');
        // ZIVN_VENDOR_REG_SRV/GetCitySet
        const citydata = await S4Conn.send('GET', '/GetCitySet');
        // console.log(citydata);
        return citydata;

    });
    this.on("POST", "GetCitySet", async (req, res) => {

        let S4Conn = await cds.connect.to('ZIVN_VENDOR_REG_SRV');
        // ZIVN_VENDOR_REG_SRV/GetCitySet
        let Payload = req.data;
        // const citydata = await S4Conn.send('POST', '/GetCitySet', Payload, { "Content-Type": "application/json" });
        // // console.log(citydata);
        // var outRes = citydata;

        let oImportedCaseDetails =  await S4Conn.send({
            method: 'POST',
            path: '/$batch',
            headers: { 'Content-Type': 'multipart/mixed;boundary=batch'},
            data:  '--batch\r\n'+
            'Content-Type: application/http\r\n'+
            'Content-Transfer-Encoding: binary\r\n'+
            '\r\n'+
            'GET GetCitySet HTTP/1.1\r\n'+
            '\r\n'+
            '\r\n'+
            '--batch--', });
        return oImportedCaseDetails;

    });

})