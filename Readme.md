# ODataContext - How to filter data by a foreign key value


<p>Sometimes it is required to filter some entities by a foreign key value.</p>
<p>This example demonstrates how to select all products that are associated with a required category. The Product entity has the Category navigation property. To filter products by the category ID, we need to expand the Category property using the ODataStore.expand option. In this case, we will be able to access a key field of a navigation property. This example operates with the <a href="http://services.odata.org/Northwind/Northwind.svc/"><u>Northwind</u></a> online OData service. We can determine that Category is a navigation property of the Product one by typing the following URL in our browser "<a href="https://services.odata.org/Northwind/Northwind.svc/$metadata">https://services.odata.org/Northwind/Northwind.svc/$metadata</a>".</p>

<p> </p>
<p>In this case our code should be as follows:</p>

```js
var db = new DevExpress.data.ODataContext({
        url: "<a href="https://services.odata.org/Northwind/Northwind.svc">http://services.odata.org/Northwind/Northwind.svc</a>",
        errorHandler: function (error) {
            alert(error.message);
        },
        entities: {
             Products: { key: "ProductID" }
        }
});

var viewModel = {
       dataSource: new DevExpress.data.DataSource({
            store: db.Products,
            select: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
            expand: ['Category'],
            filter: ['Category.CategoryID', '=', 5]
       })
};
```


<p> </p>

<br/>


