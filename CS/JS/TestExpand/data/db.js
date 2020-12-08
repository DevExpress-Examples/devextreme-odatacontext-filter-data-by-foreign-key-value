/// <reference path="../js/jquery-1.9.1.min.js"; />
/// <reference path="../js/knockout-2.2.1.js"; />
/// <reference path="../js/dx.all.js"; />

(function() {
    TestExpand.db = new DevExpress.data.ODataContext({
            url: "http://services.odata.org/Northwind/Northwind.svc",
            errorHandler: function (error) {
                alert(error.message);
            },
            entities: {
                Products: { key: "ProductID" }
            }
    });
})();