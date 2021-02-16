$(function(){  
    var oDataContext = new DevExpress.data.ODataContext({
        url: "https://services.odata.org/Northwind/Northwind.svc",
        errorHandler: function (error) {
            alert(error.message);
        },
        entities: {
            Products: { key: "ProductID" }
        }
    });
    $("#dataGrid").dxDataGrid({
        columns:["ProductID","ProductName","Category.CategoryID","Category.CategoryName"],
        dataSource: new DevExpress.data.DataSource({
            store: oDataContext.Products,
            select: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
            expand: ['Category'],
            filter: ['Category.CategoryID', '=', 5]
        })
    });
});