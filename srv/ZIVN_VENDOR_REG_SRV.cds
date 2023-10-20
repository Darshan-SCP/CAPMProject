using ZIVN_VENDOR_REG_SRV from './external/ZIVN_VENDOR_REG_SRV.cds';

service ZIVN_VENDOR_REG_SERVICE {
     
    entity GetCitySet as projection on ZIVN_VENDOR_REG_SRV.GetCitySet
  
    @readonly
    entity BPTypeSet as projection on ZIVN_VENDOR_REG_SRV.BPTypeSet
    {        key Spras, key Bpkind, Text40     }    
;
    @readonly
    entity CheckNewVendorCodeSet as projection on ZIVN_VENDOR_REG_SRV.CheckNewVendorCodeSet
    {        key Lifnr, Status     }    
;
    @readonly
    entity CheckUpdateReqSet as projection on ZIVN_VENDOR_REG_SRV.CheckUpdateReqSet
    {        key RequestNo, Status     }    
;
    @readonly
    entity GetStateSet as projection on ZIVN_VENDOR_REG_SRV.GetStateSet
    {        key Land1, key Bland, Bezei     }    
;
    @readonly
    entity GetSortKeySet as projection on ZIVN_VENDOR_REG_SRV.GetSortKeySet
    {        key Zuawa, Ttext     }    
;
    @readonly
    entity GetVendorsSet as projection on ZIVN_VENDOR_REG_SRV.GetVendorsSet
    {        key Bukrs, key Lifnr, Name1     }    
;
}