/* A Presentation Layer: function: mainly work with jsx releated stuff on main data grid  */

import MUIDataTable from "mui-datatables";
import useShoppingStoreDataGrid from "../BusinessLogicLayer/useShoppingStoreDataGrid";
import useTableColumnHeader from "../BusinessLogicLayer/useTableColumnHeader";




const ShoppingStoreDataGrid = () => {
  
  const {tableData, options, numberOfTotalFilteredRecords, isLoading, error} = useShoppingStoreDataGrid();
  const {columns} = useTableColumnHeader();


  return (
    <div>
        <p>Number of filtered records: {numberOfTotalFilteredRecords}</p>
        <MUIDataTable
          title={"TSG Online Store"}
          data={tableData}
          columns={columns}
          options={options}
        />
    </div> 
  )

};



export default ShoppingStoreDataGrid;