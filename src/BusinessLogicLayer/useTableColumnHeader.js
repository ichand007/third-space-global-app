/* A Business Layer: function: main grid table header and cell formating  */

export default function useTableColumnHeader() {
    const columns = [
        "ID ","Title", 
        {
                name: "description",
                label: "Description",
                options: {
                    MUIDataTableHeadCell:() => ({
                        toolButton: {
                        justifyContent: 'left'
                        }
                    }),
                    setCellProps: () => ({ style: {whiteSpace: "pre-wrap", wordBreak: "break-word", minWidth: "100px", maxWidth: "1200px", justifyContent: 'center'  }}),
                    customBodyRender: (data, type, row) => {return <pre>{data}</pre>},
            },
        },
        "Price","DiscountPercentage","Rating","Stock","Brand","category"];

    return { columns }
}