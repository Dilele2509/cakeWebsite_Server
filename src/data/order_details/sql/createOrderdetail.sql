INSERT INTO [dbo].[order_details]
    (
        [product_id],
        [product_size],
        [price],
        [quantity]
    )
VALUES 
    (
        @product_id,
        @product_size,
        @price,
        @quantity
    )

SELECT * FROM [dbo].[order_details]