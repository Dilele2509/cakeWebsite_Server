INSERT INTO [dbo].[order_details]
    (
        [order_id],
        [product_id],
        [price],
        [quantity],
        [total]
    )
VALUES 
    (
        @order_id,
        @product_id,
        @price,
        @quantity,
        @total
    )

SELECT * FROM [dbo].[order_details]
WHERE [id]=id