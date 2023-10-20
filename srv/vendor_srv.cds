using ZIVN_VENDOR_REG_SRV from './external/ZIVN_VENDOR_REG_SRV.cds';

service VENDOR_SERVICE {
     entity GetCitySet as projection on ZIVN_VENDOR_REG_SRV.GetCitySet
}
